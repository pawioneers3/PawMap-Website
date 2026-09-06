# PawMap Website

Static advertisement and portfolio website for the existing PawMap app.

## Files

- `index.html` - landing page
- `styles.css` - responsive site styling
- `script.js` - APK URL and QR-code setup
- `assets/` - PawMap logo, icon, and background assets
- `assets/videos/pawmap-ad.mp4` - optional advertisement video used by the autoplay video section
- GitHub Release asset - Android APK download:
  `https://github.com/pawioneers3/PawMap-Website/releases/download/v1.1.24/PawMapApkV1.1.24.apk`

## Usage

Open `index.html` in a browser for local preview.

On each page load, the website checks GitHub's latest release and updates all version labels, APK buttons, and the QR code together. The published release must have an uploaded `.apk` asset; if multiple APKs are attached, the first is used. Drafts and prereleases are excluded.

To publish an app update, create a release with the version as its tag (for example, `v1.1.25`), attach the APK, and mark the release as Latest. No website edits are needed after this website code is deployed. Visitors see the update on their next page load; editing only the release description does not change the displayed version.

If GitHub is unavailable, rate-limited, or the latest release has no APK, the page keeps the bundled `v1.1.24` download as a fallback. The public API requires no token.

For the advertisement section, put the final MP4 video at `assets/videos/pawmap-ad.mp4`. Browsers only allow reliable autoplay when the video is muted, so the page starts it muted and keeps controls visible for sound and replay.
