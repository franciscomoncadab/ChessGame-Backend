require('dotenv').config();

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
/*
const server = http.createServer(app);
const io = new Server(server, { 
     cors: {
          origin: '*',
          method: ['GET', 'POST']
     },
});

app.get('/', (req, res) => {
     res.sendFile(`${__dirname}/index.html`);
});*/

io.on('connection', (socket) => {
     console.log('conneting socket: ' + socket);
});