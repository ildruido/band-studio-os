import random, math
from PIL import Image, ImageDraw, ImageFilter, ImageFont
random.seed(7)
W,H=1200,2133   # oversize poster art for zoom headroom
img=Image.new("RGB",(W,H),(18,14,14))
d=ImageDraw.Draw(img)
# fake "AI art" background: gritty torn shapes and halftone
for i in range(70):
    x=random.randint(-200,W);y=random.randint(-200,H)
    s=random.randint(150,700);c=random.choice([(190,30,30),(30,30,30),(220,200,160),(90,20,20)])
    d.polygon([(x,y),(x+s,y+random.randint(-80,80)),(x+s//2,y+s)],fill=c)
img=img.filter(ImageFilter.GaussianBlur(3))
px=img.load()
for _ in range(250000):
    x=random.randrange(W);y=random.randrange(H);r,g,b=px[x,y];n=random.randint(-40,40)
    px[x,y]=(max(0,min(255,r+n)),max(0,min(255,g+n)),max(0,min(255,b+n)))
img.save("art.png")
