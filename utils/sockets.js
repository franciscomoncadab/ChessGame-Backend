class Sockets {
     constructor(io) {
          this.io = io;

          this.socketEvents();
     }

     socketEvents() {
          this.io.on('connect', (socket) => {
               console.log('Connecting client 1', socket.id);
               
               socket.on('conectando', () => {
                    console.log('Connecting client 2')})

               socket.emit('result');
               
               socket.on('movingPiece', (x, y) => {
                    console.log({x, y})
               })
               
          })
     };
};

module.exports =  Sockets; 