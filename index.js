const express = require('express'); // using express 
const socketIO = require('socket.io'); 
const http = require('http')  
const port = process.env.PORT||4000 // setting the port  
let app = express(); 
let server = http.createServer(app) 
let io = socketIO(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

io.on('connection', (socket) => { 
    console.log('New user connected'); 

    socket.on('createMessage', (newMessage) => { 
        console.log('Message: '+ newMessage); 
        socket.emit("broadcast", "Broadcast Message")
    });

}); 
  
server.listen(port); 