class Sockets {
     constructor(io) {
          this.io = io;

          this.socketEvents();
     }

     socketEvents() {
          this.io.on('connect', (socket) => {
               console.log('Connecting client 1');
               socket.on('conectando', (socket) => {
                    console.log('Connecting client 2')
               })
               })
     }
}

module.exports =  Sockets; 