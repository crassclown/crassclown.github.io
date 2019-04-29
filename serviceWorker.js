const staticAssets = [
    './css/style.css',
    './js/style.js',
];

self.addEventListener('install', async event => {
    const cache = await caches.open('crassclown');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const {
        request
    } = event;
    const url = new URL(request.url);
    if (url.origin === location.origin) {
        event.respondWith(cacheData(request));
    } else {
        event.respondWith(networkFirst(request));
    }

});

async function cacheData(request) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || fetch(request);
}

async function networkFirst(request) {

    try {
        const response = await fetch(request);
        return response;
    } catch (error) {
        return await cache.match(request);

    }

}