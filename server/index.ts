const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIo(server, {cors: {origin: '*'}})

const PORT = 3040

let activeSessions = 0

io.on('connection', (socket: any) => {
    activeSessions++
    io.emit('activeSessions', activeSessions)
    socket.on('disconnect', () => {
        activeSessions--
        io.emit('activeSessions', activeSessions)
    })
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})