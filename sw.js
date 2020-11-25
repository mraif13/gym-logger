const staticCacheName = "Gym Logger";
const assets = [
  "/",
  "/index.html",
  "/manifest.json",
  "/assets/js/nav.js",
  "/assets/css/var.css",
  "/assets/css/app.js",
  "/assets/css/chgt.js",
  "/assets/css/nav.js",
  "/assets/img/logo-min.png",
  "/assets/logos/arm.png",
  "/assets/logos/back.png",
  "/assets/logos/chest.png",
  "/assets/logos/forearm.png",
  "/assets/logos/leg.png",
  "/assets/logos/shoulders.png",
  "/assets/logos/torso.png",
  "/assets/icons",
  "/assets/icons/android",
  "/assets/icons/chrome",
  "/assets/icons/firefox",
  "/assets/icons/mstreams",
  "/assets/icons/windows",
  "/assets/icons/windows10",
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
