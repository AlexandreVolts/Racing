import express = require("express");
import socketio = require("socket.io");
import http = require("http");
import path = require("path");

class Server
{
	private static readonly APP_DIR:string = __dirname + "/../../../app/";
	private readonly port:number;
	private app:any = express();
	private server:http.Server;

	constructor(port:number)
	{
		this.port = port;
		this.server = this.app.listen(port, this.initialise);
	}

	private initialise = (err:string) =>
	{
		if (err) {
			console.log(err);
			return;
		}
		console.log(`Server is listening on port ${this.port}.`);
		this.app.use(express.static("views"));
		this.app.get("/", (req:any, res:any):void => {
			req;
			res.sendFile(path.resolve(Server.APP_DIR + "index.html"));
		});
	}
}

export default Server;
