import express from "express";
import Routes from "./routes/index.js";

const App = express();
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
// use router in api
App.use("/api", Routes);

export default App;
