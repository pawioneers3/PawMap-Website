const apkPath = "https://github.com/pawioneers3/PawMap-Website/releases/download/v1.0.0/PawMap.apk";
const apkUrl = new URL(apkPath, window.location.href).toString();
const qrImage = document.getElementById("qr-code");
const apkUrlText = document.getElementById("apk-url");
const adVideo = document.getElementById("ad-video");

if (qrImage) {
  const encoded = encodeURIComponent(apkUrl);
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=560x560&margin=16&data=${encoded}`;
}

if (apkUrlText) {
  apkUrlText.textContent = `APK URL: ${apkUrl}`;
}

if (adVideo) {
  adVideo.muted = true;
  const playAttempt = adVideo.play();

  if (playAttempt && typeof playAttempt.catch === "function") {
    playAttempt.catch(() => {
      adVideo.setAttribute("data-autoplay-blocked", "true");
    });
  }
}
