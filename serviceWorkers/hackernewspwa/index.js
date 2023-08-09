function onLoad() {
    initSw();
}

function initSw() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/public/sw.js').then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function (err) {
            console.log('ServiceWorker registration failed: ', err)
        })
    }
}

window.addEventListener('load', onLoad);
function addImage() {
    var imageContainer = document.querySelector('#image-container');
    var img = document.createElement('img');
    img.setAttribute('src', './src/wasa-cry-3.jpg');
    img.setAttribute('height', '400')
    imageContainer.appendChild(img);
}