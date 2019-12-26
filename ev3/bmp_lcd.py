import ev3.dev.auto as ev3
from PIL import Image, ImageDraw, ImageFont, ImageOps

screen = ev3.Screen()
logo = Image.open('EV3_BMPs/Awake.bmp')
screen.draw.bitmap((0,0), ImageOps.invert(logo.convert("L")))

screen.update()