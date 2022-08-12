class Sockets {
     constructor(io) {
          this.io = io;

          this.socketEvents();
     }

     socketEvents() {
          this.io.on('connect', (socket) => {
               console.log('Conectado', socket.id);
               
               socket.on('conectando desde frontend', () => {
                    console.log('Conectando desde front')
                    socket.emit('result');
               })
               
               socket.on('updateGrabPieces', () => {
                    console.log('grabPieces desde frontend');
                    socket.emit('grabPiecesBackend');
               });

               /*socket.on('updateMovePieces', () => {
                    console.log('movePieces desde frontend');
                    socket.emit('movePiecesBackend')
               });*/

               socket.on('updateDropPieces', (pieces) => {
                    console.log('dropPieces desde frontend', pieces);
                    socket.emit('dropPiecesBackend', pieces)
               });
               
          })
     };
};

module.exports =  Sockets; 