import http from "http";
import App from "./src/app.js";
import dataBase from "./src/database/index.js";
import dotenv from "dotenv";

//setup .env
dotenv.config();

// crate server
const server = http.createServer(App);
// conect mongoDB to project
const mongoDB = new dataBase(process.env.DB_HOST);

mongoDB.mongooseConnect("/learn1");
//any port free on your sever
const port = 3000;
server.listen(port, () => {
  console.log(`server run on port ${port}`);
});
