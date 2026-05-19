const apkPath = "https://github.com/pawioneers3/PawMap-Website/releases/download/v1.0.0/PawMap.apk";
const apkUrl = new URL(apkPath, window.location.href).toString();
const qrImage = document.getElementById("qr-code");
const apkUrlText = document.getElementById("apk-url");
const adVideo = document.getElementById("ad-video");
const scrollTopButton = document.getElementById("scroll-top-button");
const menuButton = document.getElementById("menu-button");
const mobileDrawer = document.getElementById("mobile-drawer");
const drawerBackdrop = document.getElementById("drawer-backdrop");
const drawerClose = document.getElementById("drawer-close");

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

if (scrollTopButton) {
  const updateScrollTopButton = () => {
    scrollTopButton.classList.toggle("is-visible", window.scrollY > 480);
  };

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  updateScrollTopButton();
  window.addEventListener("scroll", updateScrollTopButton, { passive: true });
}

if (menuButton && mobileDrawer && drawerBackdrop) {
  const drawerLinks = mobileDrawer.querySelectorAll("a");

  const setDrawerOpen = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    mobileDrawer.classList.toggle("is-open", open);
    mobileDrawer.setAttribute("aria-hidden", String(!open));
    drawerBackdrop.classList.toggle("is-open", open);
    drawerBackdrop.hidden = !open;
    document.body.classList.toggle("drawer-open", open);
  };

  menuButton.addEventListener("click", () => setDrawerOpen(true));
  drawerBackdrop.addEventListener("click", () => setDrawerOpen(false));
  drawerClose?.addEventListener("click", () => setDrawerOpen(false));

  drawerLinks.forEach((link) => {
    link.addEventListener("click", () => setDrawerOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setDrawerOpen(false);
  });
}
