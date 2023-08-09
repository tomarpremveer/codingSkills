const Express = require('express');
const http = require('http');
const app = Express();
const httpServer = new http.createServer(app);
const { Server } = require('socket.io')
const io = new Server(httpServer);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    })
})

httpServer.listen(3000, () => { 
    console.log('listening on port', 3000);
})