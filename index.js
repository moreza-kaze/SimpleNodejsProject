import http from "http";
import dotenv from "dotenv";
import App from "./src/app.js";

const envirment = dotenv.config();
const server = http.createServer(App);
const port = process.env.APP_PORT || 8000;

server.listen(port, () => {
    console.log(`server run on port ${port}`);
});
