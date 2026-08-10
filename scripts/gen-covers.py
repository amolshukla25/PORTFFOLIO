"""Generate branded cover images for blog posts and active projects.

Creates:
  public/blogs/covers/<slug>.webp    — unique cover per blog post (1280x720)
  public/projects/covers/<id>.webp   — cover per active project  (1280x720)

Also rewrites the `coverImage:` frontmatter of every blog post to point at its
new generated cover.

Run: python scripts/gen-covers.py
"""

import os
import re

from PIL import Image, ImageDraw, ImageFont, ImageFilter

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(BASE, "public")
BLOGS_DIR = os.path.join(BASE, "content", "blogs")
FONT_DIR = r"C:\Windows\Fonts"

W, H = 1280, 720

# Category -> accent color + label
CATEGORIES = {
    "ai": ((167, 139, 250), "AI & ML"),
    "webdev": ((56, 189, 248), "Web Development"),
    "backend": ((52, 211, 153), "Backend & APIs"),
    "datascience": ((251, 191, 36), "Data Science"),
    "devops": ((251, 113, 133), "DevOps & Cloud"),
}

# Active (uncommented) projects: id -> (title, category, subtitle)
PROJECTS = [
    ("portfolio-card", "Portfolio Card", "webdev", "Interactive 3D Web Experience"),
    ("academic-learning-assistant", "AI-Powered Academic Learning Assistant", "ai", "LLM Tutoring Platform"),
    ("smart-resume-analyzer", "Smart Resume Analyzer", "ai", "AI Resume Screening System"),
    ("ikigai-website", "Ikigai School of AI Website", "webdev", "Education Platform"),
]


# Ground-truth category per blog slug (matches the original per-topic covers;
# makes the script deterministic and idempotent across re-runs).
SLUG_CATEGORY = {
    "a-complete-guide-to-answer-engine-optimization-aeo": "webdev",
    "building-a-real-time-chat-app-with-websockets-and-nodejs": "backend",
    "building-interactive-3d-web-apps-with-threejs-and-react-three-fiber": "webdev",
    "deep-dive-into-transformers-and-self-attention-mechanisms": "ai",
    "demystifying-deep-learning-build-a-neural-network-from-scratch-in-python": "ai",
    "designing-clean-apis-with-fastapi-and-pydantic-v2": "backend",
    "fine-tuning-llama-3-on-custom-datasets-using-qlora": "ai",
    "getting-started-with-langchain-and-langgraph-for-ai-agents": "ai",
    "how-to-build-an-llm-rag-pipeline-with-nextjs-and-fastapi": "ai",
    "how-to-deploy-nextjs-to-vercel-and-aws-amplify": "devops",
    "how-to-handle-authentication-in-nextjs-with-nextauthjs": "webdev",
    "implementing-dark-mode-in-tailwind-css-and-nextjs": "webdev",
    "introduction-to-prompt-engineering-system-prompts-and-few-shot-learning": "ai",
    "managing-state-in-react-zustand-vs-redux-toolkit-vs-context-api": "webdev",
    "mastering-python-generators-for-memory-efficient-data-pipelines": "backend",
    "optimizing-web-applications-for-core-web-vitals-in-2026": "webdev",
    "python-for-data-science-advanced-pandas-and-numpy-techniques": "datascience",
    "scaling-machine-learning-models-from-jupyter-to-kubernetes": "devops",
    "supercharging-vs-code-extensions-and-settings-for-ai-engineers": "devops",
    "the-future-of-web-development-nextjs-16-and-react-server-components": "webdev",
    "the-ultimate-git-cheat-sheet-for-solo-developers": "devops",
    "understanding-machine-learning-loss-functions-mse-cross-entropy-and-hubers": "ai",
    "understanding-vector-databases-pinecone-vs-chroma-vs-qdrant": "ai",
    "why-every-ai-engineer-needs-to-learn-docker": "devops",
    "writing-clean-typescript-advanced-types-and-utility-types": "webdev",
}

# Map of tag keywords -> category (used so the script stays idempotent after
# the first run rewrites every coverImage to /blogs/covers/<slug>.webp)
TAG_CATEGORY = {
    "ai": [
        "ai", "llm", "machine learning", "deep learning", "tensorflow",
        "python", "langchain", "rag", "transformers", "generative", "llama",
        "prompt", "neural", "vector", "agent",
    ],
    "webdev": [
        "next.js", "react", "typescript", "javascript", "tailwind",
        "zustand", "redux", "three.js", "frontend", "web", "nextauth",
    ],
    "backend": [
        "fastapi", "backend", "api", "node.js", "websocket", "nodejs",
        "pydantic",
    ],
    "datascience": ["data science", "pandas", "numpy", "data"],
    "devops": [
        "devops", "kubernetes", "vercel", "aws", "deploy", "docker",
        "ci/cd", "git",
    ],
}


def infer_category(raw, cover, slug):
    # 1) Explicit per-slug ground truth
    if slug in SLUG_CATEGORY:
        return SLUG_CATEGORY[slug]
    # 2) Legacy cover path (first run)
    for k in CATEGORIES:
        if cover.startswith(f"/cover_{k}"):
            return k
    # 3) Tags-based inference (fallback for new posts)
    mt = re.search(r"^tags:\s*\[(.*?)\]", raw, re.M | re.S)
    tags = mt.group(1).lower() if mt else ""
    for k, keys in TAG_CATEGORY.items():
        if any(key in tags for key in keys):
            return k
    return "ai"


def font(name, size):
    return ImageFont.truetype(os.path.join(FONT_DIR, name), size)


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def wrap_text(draw, text, fnt, max_w):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        test = (cur + " " + w).strip()
        if draw.textlength(test, font=fnt) <= max_w:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def make_cover(path, title, subtitle, cat, watermark="AMOL SHUKLA"):
    accent, label = CATEGORIES.get(cat, CATEGORIES["ai"])

    # Vertical gradient background
    c_top, c_bot = (12, 14, 30), (32, 28, 62)
    grad = Image.new("RGB", (1, H))
    for y in range(H):
        grad.putpixel((0, y), lerp(c_top, c_bot, y / (H - 1)))
    img = grad.resize((W, H), Image.Resampling.BILINEAR).convert("RGBA")

    # Soft accent orbs
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    r1 = int(W * 0.5)
    gd.ellipse([W - r1 * 1.1, -r1 * 0.5, W + r1 * 0.4, r1 * 0.7], fill=accent + (70,))
    r2 = int(H * 1.3)
    gd.ellipse([-r2 * 0.35, H - r2 * 0.8, r2 * 0.55, H + r2 * 0.25], fill=(96, 165, 250, 55))
    glow = glow.filter(ImageFilter.GaussianBlur(90))
    img.alpha_composite(glow)

    # Subtle blueprint grid
    grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(grid)
    step = 64
    for x in range(0, W, step):
        gd.line([(x, 0), (x, H)], fill=(255, 255, 255, 14))
    for y in range(0, H, step):
        gd.line([(0, y), (W, y)], fill=(255, 255, 255, 14))
    img.alpha_composite(grid)

    d = ImageDraw.Draw(img)
    mx = int(W * 0.07)
    my = int(H * 0.1)

    # Category chip
    chip_f = font("arialbd.ttf", 28)
    chip_w = int(d.textlength(label, font=chip_f)) + 60
    chip_h = 58
    d.rounded_rectangle([mx, my, mx + chip_w, my + chip_h], radius=29, fill=accent)
    d.text((mx + 30, my + 13), label, font=chip_f, fill=(15, 17, 34))

    # Title (wrapped, up to 3 lines)
    title_f = font("arialbd.ttf", 62)
    max_w = W - 2 * mx
    lines = wrap_text(d, title, title_f, max_w)[:3]
    ty = my + chip_h + 52
    for ln in lines:
        d.text((mx, ty), ln, font=title_f, fill=(255, 255, 255))
        ty += 76

    # Accent underline under the title
    d.rounded_rectangle([mx, ty + 10, mx + 160, ty + 18], radius=4, fill=accent)

    # Subtitle (bottom-left)
    sub_f = font("arial.ttf", 30)
    d.text((mx, H - my - 46), subtitle, font=sub_f, fill=(196, 202, 233))

    # Watermark (bottom-right)
    wm_f = font("arialbd.ttf", 28)
    ww = d.textlength(watermark, font=wm_f)
    d.text((W - mx - ww, H - my - 46), watermark, font=wm_f, fill=(255, 255, 255, 120))

    img.convert("RGB").save(path, "WEBP", quality=88)
    print("wrote", os.path.relpath(path, PUB))


def gen_blogs():
    out_dir = os.path.join(PUB, "blogs", "covers")
    os.makedirs(out_dir, exist_ok=True)

    for fname in sorted(os.listdir(BLOGS_DIR)):
        if not fname.endswith(".md"):
            continue
        slug = fname[:-3]
        fpath = os.path.join(BLOGS_DIR, fname)
        raw = open(fpath, encoding="utf-8").read()

        m = re.search(r"^title:\s*[\"']?(.+?)[\"']?\s*$", raw, re.M)
        title = (m.group(1).strip() if m else slug.replace("-", " ").title()).strip('"').strip("'")

        mc = re.search(r"^coverImage:\s*[\"']?(.+?)[\"']?\s*$", raw, re.M)
        cover = mc.group(1).strip() if mc else ""
        cat = infer_category(raw, cover, slug)
        subtitle = f"{CATEGORIES[cat][1]} · Technical Blog"

        make_cover(os.path.join(out_dir, slug + ".webp"), title, subtitle, cat)

        # Rewrite coverImage frontmatter
        if mc:
            new_raw = raw.replace(mc.group(0), f'coverImage: "/blogs/covers/{slug}.webp"')
        else:
            new_raw = re.sub(r"^(---\s*)$", rf'\1\ncoverImage: "/blogs/covers/{slug}.webp"', raw, count=1)
        if new_raw != raw:
            open(fpath, "w", encoding="utf-8").write(new_raw)
            print("updated", os.path.relpath(fpath, BASE))


def gen_projects():
    out_dir = os.path.join(PUB, "projects", "covers")
    os.makedirs(out_dir, exist_ok=True)
    for pid, title, cat, sub in PROJECTS:
        make_cover(os.path.join(out_dir, pid + ".webp"), title, sub, cat, watermark="AMOL SHUKLA")


if __name__ == "__main__":
    gen_blogs()
    gen_projects()
    print("Done.")
