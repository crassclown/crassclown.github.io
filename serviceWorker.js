const staticAssets = [
    './',
    './css/style.css',
    './js/style.js',
    './index.html',
    './images/1-min.png',
    './images/2-min.png',
    './images/3-min.png',
    './fonts/Poppins-Black.otf',
    './fonts/Poppins-Bold.otf',
    './fonts/Poppins-Light.otf',
    './fonts/Poppins-Medium.otf',
    './fonts/Poppins-Regular.otf',
    './icons/icon-72x72.png',
    './icons/icon-96x96.png',
    './icons/icon-128x128.png',
    './icons/icon-144x144.png',
    './icons/icon-152x152.png',
    './icons/icon-192x192.png',
    './icons/icon-384x384.png',
    './icons/icon-512x512.png',
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
        return await caches.match(request);

    }

}