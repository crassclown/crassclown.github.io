const staticAssets = [
    './css/style.css',
    './js/style.js',
    './fonts/Poppins-Black.otf',
    './fonts/Poppins-Bold.otf',
    './fonts/Poppins-Light.otf',
    './fonts/Poppins-Medium.otf',
    './fonts/Poppins-Regular.otf',
    './images/1-min.png',
    './images/2-min.png',
    './images/3-min.png',
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
    const cache = await caches.open('dynamic-meme');

    try {
        const response = await fetch(request);
        cache.put(request, response.clone());
        return response;
    } catch (error) {
        return await cache.match(request);

    }

}