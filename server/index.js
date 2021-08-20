const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;
// const PORT = 5000;

const router = require('./router');
const { Socket } = require("dgram");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
io.on('connection',(socket)=>{
    console.log(`we have a new connection`)
    Socket.on('disconnect',()=>{
        console.log(`User has logged off!!`)
    })
})

app.use(router)

server.listen(PORT, ()=> {
  console.log(`The server has started on ${PORT}`);
});
