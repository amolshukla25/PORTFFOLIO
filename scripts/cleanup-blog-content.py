"""
Cleanup script for blog content.

1. Removes the spammy "## Additional SEO Indexing Notes by Amol shukla" keyword-stuffed
   sections appended to most posts (hurts Google quality signals).
2. Deduplicates accidentally repeated "Deep Dive Technical Breakdown" sections.
3. Fixes incorrect copy-pasted frontmatter tags so each post matches its real topic.

Safe to re-run: idempotent. Preserves CRLF line endings.
"""

import os
import re
import sys

BLOGS_DIR = os.path.join(os.path.dirname(__file__), "..", "content", "blogs")

# Marker sections
SEO_NOTES_MARKER = "## Additional SEO Indexing Notes by Amol shukla"
DEEP_DIVE_MARKER = "## Deep Dive Technical Breakdown & Architecture Guidelines by Amol shukla"

# Correct tags per blog slug (derived from each post's title/description)
CORRECT_TAGS = {
    "a-complete-guide-to-answer-engine-optimization-aeo": [
        "SEO", "AEO", "AI", "Content Strategy",
    ],
    "building-a-real-time-chat-app-with-websockets-and-nodejs": [
        "Node.js", "WebSockets", "Socket.io", "Real-time",
    ],
    "building-interactive-3d-web-apps-with-threejs-and-react-three-fiber": [
        "Three.js", "React Three Fiber", "3D", "WebGL",
    ],
    "deep-dive-into-transformers-and-self-attention-mechanisms": [
        "AI", "Transformers", "NLP", "Deep Learning",
    ],
    "demystifying-deep-learning-build-a-neural-network-from-scratch-in-python": [
        "AI", "Deep Learning", "Python", "Neural Networks",
    ],
    "designing-clean-apis-with-fastapi-and-pydantic-v2": [
        "FastAPI", "Python", "API Design", "Pydantic",
    ],
    "fine-tuning-llama-3-on-custom-datasets-using-qlora": [
        "AI", "LLM", "Fine-tuning", "QLoRA",
    ],
    "getting-started-with-langchain-and-langgraph-for-ai-agents": [
        "AI", "LangChain", "LangGraph", "AI Agents",
    ],
    "how-to-build-an-llm-rag-pipeline-with-nextjs-and-fastapi": [
        "AI", "RAG", "Next.js", "FastAPI", "LLM",
    ],
    "how-to-deploy-nextjs-to-vercel-and-aws-amplify": [
        "Next.js", "Vercel", "AWS", "Deployment",
    ],
    "how-to-handle-authentication-in-nextjs-with-nextauthjs": [
        "Next.js", "Authentication", "NextAuth.js", "Security",
    ],
    "implementing-dark-mode-in-tailwind-css-and-nextjs": [
        "Next.js", "Tailwind CSS", "Dark Mode", "Frontend",
    ],
    "introduction-to-prompt-engineering-system-prompts-and-few-shot-learning": [
        "AI", "Prompt Engineering", "LLM", "Generative AI",
    ],
    "managing-state-in-react-zustand-vs-redux-toolkit-vs-context-api": [
        "React", "State Management", "Zustand", "Redux",
    ],
    "mastering-python-generators-for-memory-efficient-data-pipelines": [
        "Python", "Generators", "Performance", "Data Engineering",
    ],
    "optimizing-web-applications-for-core-web-vitals-in-2026": [
        "Performance", "Core Web Vitals", "SEO", "Web Development",
    ],
    "python-for-data-science-advanced-pandas-and-numpy-techniques": [
        "Python", "Pandas", "NumPy", "Data Science",
    ],
    "scaling-machine-learning-models-from-jupyter-to-kubernetes": [
        "MLOps", "Kubernetes", "Machine Learning", "Docker",
    ],
    "supercharging-vs-code-extensions-and-settings-for-ai-engineers": [
        "VS Code", "Developer Tools", "AI", "Productivity",
    ],
    "the-future-of-web-development-nextjs-16-and-react-server-components": [
        "Next.js", "React", "Server Components", "Web Development",
    ],
    "the-ultimate-git-cheat-sheet-for-solo-developers": [
        "Git", "Version Control", "Developer Tools",
    ],
    "understanding-machine-learning-loss-functions-mse-cross-entropy-and-hubers": [
        "Machine Learning", "Deep Learning", "Loss Functions", "Python",
    ],
    "understanding-vector-databases-pinecone-vs-chroma-vs-qdrant": [
        "AI", "Vector Databases", "Pinecone", "ChromaDB", "Qdrant",
    ],
    "why-every-ai-engineer-needs-to-learn-docker": [
        "Docker", "Containers", "MLOps", "AI",
    ],
    "writing-clean-typescript-advanced-types-and-utility-types": [
        "TypeScript", "JavaScript", "Type System", "Software Engineering",
    ],
}


def clean_file(filepath, slug):
    with open(filepath, "r", encoding="utf-8", newline="") as f:
        raw = f.read()

    original = raw
    changed = []

    # 1. Remove repeated Deep Dive sections (keep the first occurrence only)
    count = raw.count(DEEP_DIVE_MARKER)
    if count > 1:
        # Truncate at the start of the second occurrence — the remaining
        # occurrences are exact duplicates followed by the SEO-notes section.
        second_idx = raw.find(DEEP_DIVE_MARKER, raw.find(DEEP_DIVE_MARKER) + 1)
        raw = raw[:second_idx].rstrip()
        changed.append(f"removed {count - 1} duplicated 'Deep Dive' section(s)")

    # 2. Remove keyword-stuffed SEO notes section
    if SEO_NOTES_MARKER in raw:
        idx = raw.find(SEO_NOTES_MARKER)
        raw = raw[:idx].rstrip()
        changed.append("removed keyword-stuffed 'SEO Indexing Notes' section")

    # 3. Fix frontmatter tags
    if slug in CORRECT_TAGS:
        tags_json = json_tags(CORRECT_TAGS[slug])
        new_raw, n = re.subn(
            r"(?m)^tags:[^\r\n]*(\r?\n)",
            lambda m: f"tags: {tags_json}\r\n",
            raw,
            count=1,
        )
        if n > 0 and new_raw != raw:
            raw = new_raw
            changed.append("fixed frontmatter tags")

    if raw != original:
        # Ensure the file ends with exactly one trailing newline
        raw = raw.rstrip("\r\n") + "\r\n"
        with open(filepath, "w", encoding="utf-8", newline="") as f:
            f.write(raw)
        return changed
    return None


def json_tags(tags):
    return "[" + ", ".join(f'"{t}"' for t in tags) + "]"


def main():
    if not os.path.isdir(BLOGS_DIR):
        print(f"Blogs dir not found: {BLOGS_DIR}")
        sys.exit(1)

    files = sorted(f for f in os.listdir(BLOGS_DIR) if f.endswith(".md"))
    total_changed = 0
    for fname in files:
        slug = fname[: -len(".md")]
        filepath = os.path.join(BLOGS_DIR, fname)
        result = clean_file(filepath, slug)
        if result:
            total_changed += 1
            print(f"[cleaned] {fname}: {', '.join(result)}")
        else:
            print(f"[  same ] {fname}")

    print(f"\nDone. {total_changed}/{len(files)} files updated.")


if __name__ == "__main__":
    main()
