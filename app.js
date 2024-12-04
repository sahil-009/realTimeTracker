const express = require('express');
const app = express();
const path = require('path');

const http = require('http');

const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);



app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));

app.get("/", (req,res) => {
    res.render("index");

})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})

