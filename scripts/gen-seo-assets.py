"""Generate missing SEO/brand assets: og.png, favicon.ico, apple-touch-icon.png.

Also re-encodes oversized blog cover PNGs to WebP.
Run: python scripts/gen-seo-assets.py
"""
import os

from PIL import Image, ImageDraw, ImageFont, ImageOps

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(BASE, "public")

FONT_DIR = r"C:\Windows\Fonts"


def font(name, size):
    return ImageFont.truetype(os.path.join(FONT_DIR, name), size)


def make_og():
    W, H = 1200, 630
    c_top = (7, 9, 22)
    c_bot = (58, 34, 118)

    grad = Image.new("RGB", (1, 2))
    grad.putpixel((0, 0), c_top)
    grad.putpixel((0, 1), c_bot)
    img = grad.resize((W, H), Image.Resampling.BILINEAR).convert("RGBA")

    # Decorative translucent orbs for depth
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.ellipse((820, -180, 1300, 300), fill=(124, 58, 237, 60))
    od.ellipse((-160, 380, 260, 800), fill=(59, 130, 246, 50))
    od.ellipse((900, 420, 1260, 700), fill=(139, 92, 246, 45))
    img = Image.alpha_composite(img, overlay)

    d = ImageDraw.Draw(img)

    # Profile photo as a circle on the right
    photo = Image.open(os.path.join(PUB, "profile-img.jpg")).convert("RGB")
    size = 400
    photo = ImageOps.fit(photo, (size, size), Image.Resampling.LANCZOS)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size, size), fill=255)
    ring = Image.new("RGBA", (size + 24, size + 24), (0, 0, 0, 0))
    ImageDraw.Draw(ring).ellipse(
        (0, 0, size + 24, size + 24), outline=(139, 92, 246, 230), width=4
    )
    cx = 900
    cy = H // 2
    img.paste(ring, (cx - (size + 24) // 2, cy - (size + 24) // 2), ring)
    img.paste(photo, (cx - size // 2, cy - size // 2), mask)

    x = 70
    y = 120

    # Brand eyebrow
    eyebrow = font("calibrib.ttf", 26)
    d.text((x, y), "AMOL SHUKLA", font=eyebrow, fill=(167, 139, 250))
    y += 62

    # Name
    name = font("arialbd.ttf", 92)
    d.text((x, y), "Amol Shukla", font=name, fill=(255, 255, 255))
    y += 118

    # Role line
    role = font("arialbd.ttf", 40)
    d.text((x, y), "AI Developer, Trainer & Agentic AI Expert", font=role, fill=(201, 215, 255))
    y += 64

    # Tagline
    tag = font("calibri.ttf", 30)
    d.text((x, y), "Agentic AI systems  \u00b7  LLM & Generative AI  \u00b7  Python", font=tag, fill=(178, 190, 221))
    y += 60

    # Accent underline
    d.rounded_rectangle((x, y, x + 320, y + 6), radius=3, fill=(139, 92, 246))

    # URL at bottom-left
    url = font("calibri.ttf", 28)
    d.text((x, H - 70), "www.amolshukla.online", font=url, fill=(226, 232, 240))

    img.convert("RGB").save(os.path.join(PUB, "og.png"), quality=88)
    print("og.png written")


def make_favicon():
    logo = Image.open(os.path.join(PUB, "logo.png")).convert("RGBA")
    # iOS/Apple icon: opaque background recommended
    apple = Image.new("RGBA", (180, 180), (10, 12, 26, 255))
    small = ImageOps.fit(logo, (150, 150), Image.Resampling.LANCZOS)
    apple.paste(small, (15, 15), small)
    apple.save(os.path.join(PUB, "apple-touch-icon.png"))
    print("apple-touch-icon.png written")

    logo.save(
        os.path.join(PUB, "favicon.ico"),
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )
    print("favicon.ico written")


def reencode_covers():
    covers = [
        "cover_ai.png",
        "cover_backend.png",
        "cover_datascience.png",
        "cover_devops.png",
        "cover_webdev.png",
        "tech-blog-cover.png",
    ]
    for name in covers:
        src = os.path.join(PUB, name)
        dst = os.path.join(PUB, name.replace(".png", ".webp"))
        if not os.path.exists(src):
            print(f"skip {name}: missing")
            continue
        im = Image.open(src).convert("RGB")
        im.save(dst, "WEBP", quality=80, method=6)
        before = os.path.getsize(src) / 1024
        after = os.path.getsize(dst) / 1024
        print(f"{name}: {before:.0f}KB -> {after:.0f}KB webp")
        if after < before:
            os.remove(src)
            print(f"  removed {name}")
        else:
            os.remove(dst)
            print(f"  kept {name} (webp not smaller)")


if __name__ == "__main__":
    make_og()
    make_favicon()
    reencode_covers()
