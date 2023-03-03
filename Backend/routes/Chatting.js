const express = require("express");
const router = express.Router();

const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer(router);

const io = new Server(server, {
  // cors: {
  //   origin: `https://localhost:${process.env.PORT}`,
  //   methods: ["GET", "POST"],
  // },
});

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("joinRoom", (room) => socket.join(room));

  socket.on("newMessage", ({ newMessage, room }) => {
    console.log(room, newMessage);
    io.in(room).emit("getLatestMessage", newMessage);
  });
});

module.exports = router;
