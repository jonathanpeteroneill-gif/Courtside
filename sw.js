// Bump VERSION on every release (keep it in sync with APP_VERSION in index.html).
const VERSION = "atw-courtside-v38";
const CORE = ["./","index.html","drills.js","drills_adv.js","plays.js","playbook.js","diagrams.js","videos.js","moves.js","manifest.webmanifest","icons/atw-icon-192.png","icons/atw-icon-512.png","icons/atw-apple-touch-icon.png","assets/wordmark-white.webp"];
// Always fetch fresh copies from the server (skip the browser's HTTP cache) when installing.
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE.map(u => new Request(u, {cache: "reload"})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// App files: network first (bypassing the HTTP cache) so updates land right away; saved copy when offline.
// Fonts: cache first.
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET") return;
  const url = new URL(r.url);
  if (url.host.includes("fonts.g")) {
    e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(res => { const c = res.clone(); caches.open(VERSION).then(x => x.put(r, c)); return res; })));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(fetch(r, {cache: "no-store"}).then(res => { if (res.ok) { const c = res.clone(); caches.open(VERSION).then(x => x.put(r, c)); } return res; })
    .catch(() => caches.match(r, {ignoreSearch: true}).then(hit => hit || caches.match("index.html"))));
});
