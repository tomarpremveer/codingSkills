self.onconnect = (event) => {
    
    const port = event.ports[0]
    port.start();
    
    port.onmessage = (e) => {
        port.postMessage(`we have received a message ${e.data}`)
    }
}