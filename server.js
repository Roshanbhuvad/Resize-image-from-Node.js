const express = require("express");
const server = express();
const resize = require("./resize")

server.get("/", (req, res) => {
 res.type("image/jpg");
 resize("image1.jpg").pipe(res);
}) 
server.listen(5000, () => {
	console.log("Server started")
})