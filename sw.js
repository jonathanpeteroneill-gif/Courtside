// Bump VERSION on every release so phones pick up the update.
const VERSION = "atw-courtside-v5";
const CORE = ["./","index.html","drills.js","drills_adv.js","plays.js","diagrams.js","videos.js","manifest.webmanifest","icons/atw-icon-192.png","icons/atw-icon-512.png","icons/atw-apple-touch-icon.png","assets/wordmark-white.webp"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// Network first for the app itself (so updates land), cache fallback when offline. Fonts: cache first.
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET") return;
  const url = new URL(r.url);
  if (url.host.includes("fonts.g")) {
    e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(res => { const c = res.clone(); caches.open(VERSION).then(x => x.put(r, c)); return res; })));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(fetch(r).then(res => { const c = res.clone(); caches.open(VERSION).then(x => x.put(r, c)); return res; })
    .catch(() => caches.match(r, {ignoreSearch: true}).then(hit => hit || caches.match("index.html"))));
});
