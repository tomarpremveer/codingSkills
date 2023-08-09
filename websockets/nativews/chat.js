const express = require('express')
const socketio = require('socket.io')

const app = express();

app.use(express.static(__dirname + '/public'))

const expressServer = app.listen(9000)
const io = socketio(expressServer)

io.on('connection', (socket) => {
    socket.emit('message',  'Message to clinet' )
    socket.on('messageToServer', (dataFromClient) => {
        console.log(dataFromClient)
    })
})