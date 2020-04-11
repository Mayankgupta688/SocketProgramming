const express = require('express');
const socketIO = require('socket.io'); 
const http = require('http');
const port = process.env.PORT||4000;
let app = express(); 
let server = http.createServer(app);
let io = socketIO(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

io.on('connection', (socket) => { 
    console.log('New user connected'); 

    socket.on('createMessage', (newMessage) => { 
        socket.broadcast.emit("broadcast", newMessage)
    });

}); 
  
server.listen(port); 