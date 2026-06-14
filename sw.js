const CACHE_NAME = 'mv-angelwelt-v2';
const ASSETS = [
  '/mvangelwelt/',
  '/mvangelwelt/index.html',
  '/mvangelwelt/produkte.html',
  '/mvangelwelt/style.css',
  '/mvangelwelt/hero-bg.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});