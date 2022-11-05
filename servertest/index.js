var express = require("express");
var cors = require("cors");
var app = express();
const http = require("http"); // agregar para el socket
const { Server } = require("socket.io"); // agregar para el socket


var corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("port", 8000);

//=============================== socket io  =================================

var os = require("os");
var hostname = os.hostname();
console.log(hostname);
const server = http.createServer(app);
const socketIO = new Server(server, {
    cors: {
        //origin: "http://" + hostname + ":3000",
        origin: "http://localhost:3000",
    },
});

app.post("/user", function (req, res) {
    console.log(req.body);
    socketIO.emit("logs",req.body);
    res.send(JSON.stringify({ status: "ok" }));
});

/*var server2 = app.listen(5000, function () {
    var port = server2.address().port;

    console.log("App listening at", port);
});*/

server.listen(8000); // agregar para el socket
console.log(`Server on port 8000`);