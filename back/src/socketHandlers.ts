import type { Server, Socket } from "socket.io";
import type SocketEvents from "../../shared/SocketEvents";

export default (io: Server, socket: Socket<SocketEvents>) => {
  console.log("a user connected", socket.id);

  socket.on("disconnect", () => {
    console.log(socket.id, "disconnected");
  });

  socket.on('userPrompt', (userInput, callback) => {
    console.log('received', userInput)
    callback('server response here')
  })
};