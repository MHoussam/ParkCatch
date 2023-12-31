const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

    socket.on('chat message', (message) => {
        console.log(`Received message: ${message}`);
        io.emit('chat message', message);
    });
});

server.listen(3000, () => {
    console.log('Socket.io server listening on *:3000');
});
