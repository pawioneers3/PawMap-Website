# PawMap Website

Static advertisement and portfolio website for the existing PawMap app.

## Files

- `index.html` - landing page
- `styles.css` - responsive site styling
- `script.js` - APK URL and QR-code setup
- `assets/` - PawMap logo, icon, and background assets
- `assets/videos/pawmap-ad.mp4` - optional advertisement video used by the autoplay video section
- `downloads/PawMap.apk` - local Android APK used for preview; do not commit APK files to GitHub because the current APK is over GitHub's normal per-file size limit

## Usage

Open `index.html` in a browser for local preview.

For the QR code to work on phones, host the whole folder on the web so `downloads/PawMap.apk` is reachable from the same domain as the page.

For GitHub hosting, upload the APK as a GitHub Release asset or host it in external storage, then update `apkPath` in `script.js` and the APK links in `index.html` to that public URL.

For the advertisement section, put the final MP4 video at `assets/videos/pawmap-ad.mp4`. Browsers only allow reliable autoplay when the video is muted, so the page starts it muted and keeps controls visible for sound and replay.
