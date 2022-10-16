import http from "http";
import dotenv from "dotenv";
import App from "./src/app.js";
import dataBase from "./src/database/index.js";

//import .env
const envirment = dotenv.config();
// crate server
const server = http.createServer(App.app);

// conect mongoDB to project
const mongoDB = new dataBase(process.env.DB_HOST);
mongoDB.mongooseConnect("/learn1");
//--

//any port free on your sever
const port = 8000;
server.listen(port, () => {
  console.log(`server run on port ${port}`);
});
