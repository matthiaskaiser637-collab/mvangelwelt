const CACHE_NAME = 'mv-angelwelt-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/produkte.html',
  '/style.css',
  '/logo.png',
  '/hero-bg.jpg',
  '/cat-ruten.jpg',
  '/cat-rollen.jpg',
  '/cat-schnuere.jpg',
  '/cat-tackleboxen.jpg',
  '/cat-haken.jpg',
  '/rod-rack.jpg'
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
