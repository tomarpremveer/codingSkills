const IMAGES = ['./images/artist.jpg', './images/food.jpg', './images/water.jpg']

function loadImage(imgSrc) {
    var imageElement = document.querySelector("#image");
    imageElement.src = imgSrc
}

function toCallOnLoad() {
    if (navigator.connection && !!navigator.connection.effectiveType) {
        if (navigator.connection.effectiveType == "4g") {
            loadImage(IMAGES[0])
        } else if (navigator.connection.effectiveType == "3g") {
            loadImage(IMAGES[1])
        } else {
            loadImage(IMAGES[2])
        }   
    }
}
window.onload = toCallOnLoad;

navigator.connection.addEventListener('change', toCallOnLoad)