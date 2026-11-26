#!/usr/bin/env bash
# Throwaway spike for R-009: 12 s, 1080x1920, 30 fps story from a still + code-placed text + audio.
# Usage: python3 make_art.py && ./render.sh   (needs ffmpeg with libx264, libfreetype; DejaVu font)
set -euo pipefail
F=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf
fade(){ echo "alpha='min(1,max(0,(t-$1)/0.4))'"; }
# NOTE: in drawtext a colon must be escaped (\\:), or the text is cut off (found in the spike).
ffmpeg -y -v error -threads 1 -loop 1 -framerate 30 -t 12 -i art.png \
 -f lavfi -t 12 -i "aevalsrc='0.35*sin(2*PI*55*t)*(0.5+0.5*sin(2*PI*2*t))+0.12*sin(2*PI*110*t*(1+0.5*floor(mod(t*2,4))))':s=44100" \
 -filter_complex "[0:v]scale=1620:-1,zoompan=z='1.0+0.0012*on':x='iw/2-(iw/zoom/2)+14*sin(on/20)':y='ih/2-(ih/zoom/2)':d=1:s=1080x1920:fps=30,noise=alls=10:allf=t,eq=contrast=1.1:saturation=0.9,vignette=PI/4,\
drawbox=x=40:y=1130:w=1000:h=700:color=black@0.8:t=fill:enable='gte(t,1)',\
drawtext=fontfile=$F:text='THE RUSTED NAILS':fontsize=84:fontcolor=0xF0E6C8:x=70:y=1160:$(fade 1.2),\
drawtext=fontfile=$F:text='+ Mala Sera':fontsize=56:fontcolor=0xC82828:x=70:y=1290:$(fade 2.5),\
drawtext=fontfile=$F:text='SAT 12 DEC - 21\\:00':fontsize=60:fontcolor=0xF0E6C8:x=70:y=1420:$(fade 4),\
drawtext=fontfile=$F:text='Circolo Magnolia, Milano':fontsize=48:fontcolor=0xF0E6C8:x=70:y=1520:$(fade 5.5),\
drawtext=fontfile=$F:text='Tickets 10 EUR - link in bio':fontsize=40:fontcolor=0xC82828:x=70:y=1640:$(fade 7.5),\
fade=t=in:d=0.5,fade=t=out:st=11.5:d=0.5[v]" \
 -map "[v]" -map 1:a -c:v libx264 -preset veryfast -crf 26 -maxrate 8M -bufsize 16M -pix_fmt yuv420p -profile:v high -r 30 -c:a aac -b:a 128k -ar 44100 -movflags +faststart -shortest sample.mp4
