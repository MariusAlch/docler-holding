import socketIO from "socket.io";
import http from "http";

const server = http.createServer();
const io = socketIO(server);

io.on("connection", (socket) => {
  socket.on("message", (message: string) => {
    io.sockets.send(message);
  });
});

server.listen(3000, () => {
  console.log("server listening on port 3000");
});
