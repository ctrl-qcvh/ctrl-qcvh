import asyncio
import os
import subprocess
from yt_dlp import YoutubeDL
from tqdm.asyncio import tqdm_asyncio

VIDEO_DIR = "videos"
GIF_DIR = "gifs"
os.makedirs(VIDEO_DIR, exist_ok=True)
os.makedirs(GIF_DIR, exist_ok=True)

# List of URLs (TikTok, Instagram, YouTube, etc.)
VIDEO_URLS = [
    "https://www.tiktok.com/@example/video/1234567890",
    "https://www.instagram.com/reel/ABCDEFGHIJK/",
]

async def download_video(url):
    ydl_opts = {
        'outtmpl': f'{VIDEO_DIR}/%(id)s.%(ext)s',
        'format': 'mp4/best',
        'quiet': True
    }
    try:
        with YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=True)
            return f"{VIDEO_DIR}/{info['id']}.mp4"
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return None

async def convert_to_gif(video_path):
    if not video_path:
        return
    gif_path = os.path.join(GIF_DIR, os.path.basename(video_path).replace('.mp4', '.gif'))
    cmd = [
        'ffmpeg', '-y', '-i', video_path,
        '-vf', 'fps=10,scale=320:-1:flags=lanczos,palettegen',
        'palette.png'
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    cmd = [
        'ffmpeg', '-y', '-i', video_path, '-i', 'palette.png',
        '-filter_complex', 'fps=10,scale=320:-1:flags=lanczos[x];[x][1:v]paletteuse',
        gif_path
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    print(f"✅ Converted to GIF: {gif_path}")

async def main():
    tasks = [download_video(url) for url in VIDEO_URLS]
    video_paths = await tqdm_asyncio.gather(*tasks)

    # Convert each video sequentially (can be parallelized if CPU allows)
    for video in video_paths:
        await convert_to_gif(video)

if __name__ == "__main__":
    asyncio.run(main())
    
    
    
    
    
    
    
//    sudo apt install ffmpeg python3 python3-pip
//pip install yt-dlp aiofiles tqdm