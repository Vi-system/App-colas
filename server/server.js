const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socketIO = require('socket.io');
const path = require('path');

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//socket
const IO = socketIO(server);

require('./sockets/socket')(IO);

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});