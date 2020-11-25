const staticCacheName = "mbc-live";
const assets = [
  "/",
  "/index.html",
  "/assets/js/nav.js",
  "/assets/css/var.css",
  "/assets/css/app.js",
  "/assets/img/logos/mbc1-min.png",
  "/assets/img/logos/mbc2-min.png",
  "/assets/img/logos/mbc3-min.png",
  "/assets/img/logos/logo-min.png",
  "/assets/img/logo-min.png",
  "/assets/XdM5b87YRGo7LDa5DM42Cqc7BPp4BVBLCUtbrkQyd4fmyoRuhm9N4BEgTAuEsQMTzQ2PVBmWSyAaNkFbqLwtGrNPZLUmg5sDtfhbHDiwrMcA7DRUWouhktKcHwJ3parv/mbc1.html",
  "/assets/XdM5b87YRGo7LDa5DM42Cqc7BPp4BVBLCUtbrkQyd4fmyoRuhm9N4BEgTAuEsQMTzQ2PVBmWSyAaNkFbqLwtGrNPZLUmg5sDtfhbHDiwrMcA7DRUWouhktKcHwJ3parv/mbc2.html",
  "/assets/XdM5b87YRGo7LDa5DM42Cqc7BPp4BVBLCUtbrkQyd4fmyoRuhm9N4BEgTAuEsQMTzQ2PVBmWSyAaNkFbqLwtGrNPZLUmg5sDtfhbHDiwrMcA7DRUWouhktKcHwJ3parv/mbc3.html",
  "https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700",
];
// install event
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});
// When we change the name we could have multiple cache, to avoid that we need to delet the old cache, so with this function we check the key that is our cache naming, if it is different from the actual naming we delete it, in this way we will always have only the last updated cache.
// fetch event
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    })
  );
});
