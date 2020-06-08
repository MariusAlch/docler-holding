import socketIO from "socket.io";
import http from "http";
import { Message } from "src/model";

const server = http.createServer();
const io = socketIO(server);

const messagesHistory: Message[] = [];

io.on("connection", (socket) => {
  socket.emit("history", messagesHistory);

  socket.on("message", (message: Message) => {
    messagesHistory.push(message);
    io.sockets.send(message);
  });
});

server.listen(3000, () => {
  console.log("server listening on port 3000");
});
