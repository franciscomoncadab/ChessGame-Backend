class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
    this.game = [];
    this.turn = 0;
  }

  socketEvents() {
    this.io.on("connect", (socket) => {
      console.log("Conectado a socketio", socket.id);

      socket.on("updateGrabPieces", () => {
        socket.emit("grabPiecesBackend");
      });

      socket.on("updateDropPieces", (updatePieces) => {
        this.turn = this.turn === 0 ? 1 : 0;
        this.io.emit("dropPiecesBackend", updatePieces);
      });

      socket.on("joinGame", () => {
        if (this.game.includes(socket.id)) {
          return;
        } else if (this.game.length < 2){
          this.game.push(socket.id);
          console.log(this.game);
        }
        this.io.emit("currentPlayers", this.game.length)
      });

      socket.on("resetGame", () => {
        this.game = [];
      });

      socket.on("getTurn", () => {
        console.log(this.turn);
        this.io.emit("currentTurn", this.turn === 0 ? "w" : "b");
      });

      socket.on("getTeamType", () => {
        let index = this.game.findIndex((player) => player === socket.id);
        console.log(index);
        socket.emit("currentTeamType", index === 0 ? "w" : "b");
      });

      socket.on("getCurrentPlayers", () => {
        socket.emit("currentPlayers", this.game.length);
      });
    });
  }
}

module.exports = Sockets;
