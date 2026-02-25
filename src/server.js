import app from "./app.js";
import http from "http";
import { Server } from "socket.io";

const server = http.createServer(app);
const io = new Server(server);

app.set("io", io);

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado");
});

server.listen(8080, () => {
  console.log("Servidor funcionando en puerto 8080");
});
