function initSW() {
    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('registered'))
            .catch(console.error)
    }
}

window.addEventListener('load',  () => {
    initSW()
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
})
    

function updateOnlineStatus() {
    const isOnline = navigator.onLine;
    const statusElement = document.querySelector('#status');
    if (isOnline) {
        statusElement.classList.remove('show')
        statusElement.classList.add('hide')
    } else {
        statusElement.classList.add('show')
        statusElement.classList.remove('hide')
    }
    navigator.serviceWorker.controller.postMessage({state:isOnline  ,type:'INTERNET_STATE_CHANGED'})
}
