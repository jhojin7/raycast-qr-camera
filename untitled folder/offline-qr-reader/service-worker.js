const CACHE_NAME = 'offline-qr-cache-v1';
const ASSETS = [
  '/',              // your index.html
  '/qr-worker.js',
  'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js'
];

self.addEventListener('install', (event) =>
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  )
);

self.addEventListener('fetch', (event) =>
  event.respondWith(
    caches.match(event.request)
      .then(res => res || fetch(event.request))
  )
);
