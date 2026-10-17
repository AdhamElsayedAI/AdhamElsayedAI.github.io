#!/usr/bin/env python3
"""Render a shareable 1200x630 PNG from the portfolio's real portrait and identity.
No generative assets or external images are used.
"""
from pathlib import Path
import math
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "og-image.png"
PORTRAIT = ROOT / "images/adham-portrait-cutout.png"
W, H = 1200, 630

def font(size, weight="bold"):
    paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if weight=="bold" else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf" if weight=="bold" else "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
    ]
    for p in paths:
        if Path(p).exists():
            return ImageFont.truetype(p, size)
    raise RuntimeError("A bundled sans-serif font must be available on the runner")

def glow(base, box, color, blur=40, alpha=85):
    layer = Image.new("RGBA", (W,H))
    d=ImageDraw.Draw(layer)
    d.ellipse(box,fill=(*color,alpha))
    layer=layer.filter(ImageFilter.GaussianBlur(blur))
    return Image.alpha_composite(base,layer)

def main():
    # Near-black editorial background, warm burgundy left, cyan-teal right.
    yy,xx=np.mgrid[0:H,0:W]
    base=np.array([7,10,16],dtype=np.float32)
    red=np.exp(-(((xx-100)/450.0)**2 + ((yy-110)/470.0)**2)*1.1)
    teal=np.exp(-(((xx-1110)/470.0)**2 + ((yy-450)/410.0)**2)*1.1)
    arr=np.clip(base[None,None,:]+red[:,:,None]*np.array([29,5,13])+
                teal[:,:,None]*np.array([0,25,25]),0,255).astype("uint8")
    im=Image.fromarray(arr,"RGB").convert("RGBA")
    im=glow(im,(-50,100,670,790),(134,28,56),70,33)
    im=glow(im,(710,-150,1410,580),(5,167,157),90,25)

    # Glass hero panel framed like the current homepage, while respecting the social safe zone.
    panel=Image.new("RGBA",(W,H))
    d=ImageDraw.Draw(panel)
    d.rounded_rectangle((46,52,1154,578),radius=32,fill=(8,15,21,215),
                        outline=(71,115,120,105),width=2)
    d.line((47,91,47,543),fill=(194,58,74,118),width=3)
    d.line((1152,88,1152,540),fill=(14,210,205,130),width=3)
    d.line((70,550,320,550),fill=(242,100,85,145),width=3)
    d.line((320,550,554,550),fill=(19,219,210,165),width=3)
    im=Image.alpha_composite(im,panel)

    # The user's existing, genuine cut-out portrait, not AI imagery.
    photo=Image.open(PORTRAIT).convert("RGBA")
    alpha=photo.getchannel("A")
    bounds=alpha.getbbox()
    if bounds: photo=photo.crop(bounds)
    max_w,max_h=430,480
    factor=min(max_w/photo.width,max_h/photo.height)
    photo=photo.resize((max(1,round(photo.width*factor)),max(1,round(photo.height*factor))),Image.Resampling.LANCZOS)
    px=1110-photo.width
    py=548-photo.height
    # Studio-style backdrop matching the hero framing.
    frame=Image.new("RGBA",(W,H))
    f=ImageDraw.Draw(frame)
    f.rounded_rectangle((715,96,1116,552),radius=29,
                        fill=(13,34,35,130),outline=(52,114,111,115),width=2)
    f.arc((711,92,1120,557),200,275,fill=(239,182,84,100),width=2)
    f.arc((711,92,1120,557),295,380,fill=(32,235,227,145),width=2)
    im=Image.alpha_composite(im,frame)
    im.alpha_composite(photo,(px,py))
    bottom=Image.new("RGBA",(W,H))
    bd=ImageDraw.Draw(bottom)
    bd.rectangle((700,542,1125,566),fill=(6,16,20,175))
    im=Image.alpha_composite(im,bottom)

    draw=ImageDraw.Draw(im)
    draw.rounded_rectangle((78,91,125,138),radius=13,fill=(8,41,40,250),outline=(25,225,218,145),width=2)
    draw.text((89,99),"AE",font=font(22),fill="#22E7DC",stroke_width=0)
    draw.text((145,105),"ADHAM ELSEYED / PORTFOLIO",font=font(15),fill="#A8BBC1")
    draw.text((78,188),"AI ENGINEER  /  GENERATIVE AI",font=font(19),fill="#F2B15D")
    draw.text((75,248),"Adham Elsayed",font=font(63),fill="#F6FAF8",
              stroke_width=0)
    draw.rounded_rectangle((77,352,608,354),radius=1,fill=(35,216,205,240))
    draw.text((78,388),"Generative AI  •  RAG",font=font(24,"regular"),fill="#BEF4E7")
    draw.text((78,426),"Machine Learning  •  Computer Vision",font=font(22,"regular"),fill="#C9DADF")
    draw.text((79,501),"adhamelsayedai.github.io",font=font(19,"regular"),fill="#F4B18E")

    out=im.convert("RGB")
    out.save(OUT,format="PNG",optimize=True,compress_level=9)
    check=Image.open(OUT)
    assert check.size==(1200,630) and check.mode=="RGB"
    assert OUT.stat().st_size < 5_000_000
    print(f"Verified {OUT.name} {check.width}x{check.height} RGB {OUT.stat().st_size} bytes")

if __name__=="__main__":
    main()
