class Sockets {
     constructor(io) {
          this.io = io;

          this.socketEvents();
     }

     socketEvents() {
          this.io.on('connect', (socket) => {
               console.log('Conectado a socketio', socket.id);
                             
               socket.on('updateGrabPieces', () => {
                    console.log('grabPieces desde frontend');
                    socket.emit('grabPiecesBackend');
               });

               /*socket.on('updateMovePieces', () => {
                    console.log('movePieces desde frontend');
                    socket.emit('movePiecesBackend')
               });*/

               socket.on('updateDropPieces', (updatePieces) => {
                    console.log('dropPieces desde frontend');
                    this.io.emit('dropPiecesBackend', updatePieces)
               });
               
          })
     };
};

module.exports =  Sockets; 