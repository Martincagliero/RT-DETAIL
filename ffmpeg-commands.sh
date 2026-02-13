# Comando rápido para comprimir videos con FFmpeg

# HERO VIDEOS (Full HD, alta calidad, ~5-8MB)
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -vf scale=1920:1080 -c:a aac -b:a 96k -movflags +faststart -pix_fmt yuv420p hero-output.mp4

# GALLERY VIDEOS (Comprimido ligero, ~3-5MB)
ffmpeg -i input.mp4 -c:v libx264 -crf 25 -preset fast -vf scale=1920:1080 -c:a aac -b:a 96k -movflags +faststart -pix_fmt yuv420p gallery-output.mp4

# VIDEO VERTICAL (Stories/Portrait)
ffmpeg -i input.mp4 -c:v libx264 -crf 25 -preset fast -vf scale=1080:1920 -c:a aac -b:a 96k -movflags +faststart -pix_fmt yuv420p vertical-output.mp4

# REMOVER AUDIO (ahorrar espacio)
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -an -movflags +faststart -pix_fmt yuv420p silent-output.mp4

# CREAR THUMBNAIL
ffmpeg -i input.mp4 -ss 00:00:02 -vframes 1 -q:v 2 thumbnail.jpg

# COMPRIMIR AGRESIVAMENTE (muy ligero, ~2-3MB)
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset faster -vf scale=1280:720 -c:a aac -b:a 64k -movflags +faststart -pix_fmt yuv420p compressed-output.mp4

# BATCH: Procesar múltiples archivos
# Windows PowerShell:
Get-ChildItem *.mp4 | ForEach-Object { ffmpeg -i $_.Name -c:v libx264 -crf 23 -preset medium -movflags +faststart -pix_fmt yuv420p "optimized-$($_.Name)" }
