"""Regenerate the favicon + brand icons as an "A" monogram (for Amol Shukla).

Writes:
  app/favicon.ico            (16/32/48 multi-size ICO)
  public/favicon.ico         (same, for static references)
  public/apple-touch-icon.png (180x180)
  public/logo.png             (512x512, used by the PWA manifest)

Run: python scripts/gen-favicon-a.py
"""

import os

from PIL import Image, ImageDraw, ImageFont

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(BASE, "app")
PUB = os.path.join(BASE, "public")

FONT_CANDIDATES = [
    r"C:\Windows\Fonts\arialbd.ttf",
    r"C:\Windows\Fonts\segoeuib.ttf",
    r"C:\Windows\Fonts\calibrib.ttf",
    r"C:\Windows\Fonts\arial.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
]

TOP = (7, 9, 22)      # dark navy
BOTTOM = (88, 44, 168)  # violet
LETTER = (255, 255, 255)
SHADOW = (0, 0, 0, 90)


def load_font(size: int) -> ImageFont.FreeTypeFont:
    for path in FONT_CANDIDATES:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default(size)


def gradient(size: int) -> Image.Image:
    """Vertical brand gradient square."""
    grad = Image.new("RGB", (1, 2))
    grad.putpixel((0, 0), TOP)
    grad.putpixel((0, 1), BOTTOM)
    return grad.resize((size, size), Image.Resampling.BILINEAR).convert("RGBA")


def rounded(img: Image.Image, radius: int) -> Image.Image:
    mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, img.size[0] - 1, img.size[1] - 1), radius=radius, fill=255)
    out = Image.new("RGBA", img.size, (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    return out


def draw_a(draw: ImageDraw.ImageDraw, size: int, font: ImageFont.FreeTypeFont, fill, shadow_offset=0):
    letter = "A"
    bbox = draw.textbbox((0, 0), letter, font=font)
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (size - w) / 2 - bbox[0]
    y = (size - h) / 2 - bbox[1]
    if shadow_offset:
        draw.text((x + shadow_offset, y + shadow_offset), letter, font=font, fill=SHADOW)
    draw.text((x, y), letter, font=font, fill=fill)


def make_icon(size: int, radius_ratio: float = 0.22) -> Image.Image:
    img = gradient(size)
    radius = int(size * radius_ratio)
    img = rounded(img, radius)
    draw = ImageDraw.Draw(img)
    # Bold "A" fills ~62% of the canvas; soft shadow for depth.
    letter_size = int(size * 0.62)
    font = load_font(letter_size)
    draw_a(draw, size, font, LETTER, shadow_offset=max(1, int(size * 0.03)))
    return img


def main() -> None:
    os.makedirs(APP, exist_ok=True)

    # Multi-size favicon (16, 32, 48)
    favicon = make_icon(64, radius_ratio=0.18)
    ico_sizes = [(16, 16), (32, 32), (48, 48)]
    favicon.save(os.path.join(APP, "favicon.ico"), format="ICO", sizes=ico_sizes)
    favicon.save(os.path.join(PUB, "favicon.ico"), format="ICO", sizes=ico_sizes)
    print("favicon.ico (app + public) written — A monogram")

    # Apple touch icon
    apple = make_icon(180, radius_ratio=0.22)
    apple.save(os.path.join(PUB, "apple-touch-icon.png"))
    print("apple-touch-icon.png written")

    # PWA logo
    logo = make_icon(512, radius_ratio=0.22)
    logo.save(os.path.join(PUB, "logo.png"))
    print("logo.png written")


if __name__ == "__main__":
    main()
