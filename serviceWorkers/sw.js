const entriesToAdd = ['/wasa-cri-2.jpg', '/offline.html']
var isOnline = true;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static-v1').then(cache => {
            cache.addAll(entriesToAdd);
        })     
    )   
})

self.addEventListener('activate', event => {
  console.log('V1 now ready to handle fetches!');
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    if (url.pathname == "/wasa-cri-1.jpg") {
        event.respondWith(caches.match('/wasa-cri-2.jpg'));
    }
   
    if (!isOnline && url.pathname == "/") {
        event.respondWith(caches.match('/offline.html'));
    } else {
        return;
    }
})

self.onmessage = function (event) {
    console.log('event received', event)
    if (event.data.type === 'INTERNET_STATE_CHANGED') {
        isOnline = event.data.state; 
    }
}
