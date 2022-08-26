const express = require('express');
const http = require('http');
const { Server: ServerIO } = require('socket.io');
const cors = require('cors');

const Sockets = require('./sockets');

class Server {
     constructor() {
          this.app = express();
          this.PORT = process.env.PORT || 8080;

          this.server = http.createServer(this.app);

          this.io = new ServerIO(this.server, {
               transports: ["websocket"],
               cors: {
                    origin: '*',
                    method: ['GET, POST']
               }});

          this.sockets = new Sockets(this.io)
     };

     middleware() {
          
          this.app.use(cors());
          this.app.use(express.json());
          this.app.use((req, res, next) => {
               res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
               res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PACH, DELETE');
               res.setHeader('Access-Control-Allow-Headers', '*');

               next();
          })
     };

     execute() {
          this.middleware();

          this.server.listen(this.PORT, () => {
               console.log('listening on port ' + this.PORT)
          })
     };
}

module.exports = Server;