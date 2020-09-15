const express = require("express");
const resize = require("./resize")
const server = express();


server.get("/", (req, res) => {

	// Extract the query-parameter 
	const widthString = req.query.width
	const heightString = req.query.height
	const format = req.query.format

	// Parse to integer if possible
	let width, height;
	if(widthString) {
		width = parseInt(widthString)
	}
	if(heightString) {
		height = parseInt(heightString)
	}

	//  set the content-type of the response
 res.type(`image/${format} || "jpg"}`)

  //http://localhost:5000/?format=jpg&width=200&height=200
 
 	// Get the resized image
 resize("image1.jpg",format, width,height).pipe(res);
}) 

server.listen(5000, () => {
	console.log("Server started")
})