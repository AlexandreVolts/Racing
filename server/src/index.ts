import Server from "./Server"

const PORT:number = parseInt(process.env.PORT || "8888");
let server:Server = new Server(PORT);