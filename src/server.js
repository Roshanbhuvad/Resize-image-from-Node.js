const express = require("express");
const resize = require("./resize")
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {


	const widthString = req.query.width
	const heightString = req.query.height
	const format = req.query.format


	let width, height;
	if(widthString) {
		width = parseInt(widthString)
	}
	if(heightString) {
		height = parseInt(heightString)
	}

 res.type(`image/${format} || "jpg"}`)

 
 resize("image1.jpg",format, width,height).pipe(res);
}) 



app.use(`/.netlify/functions/server`,router);


module.exports.handler = serverless(app);