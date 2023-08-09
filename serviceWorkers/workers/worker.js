self.onmessage = function (event) {
    console.log(event.data);
    self.postMessage("hi i received your message" + event.data);
}