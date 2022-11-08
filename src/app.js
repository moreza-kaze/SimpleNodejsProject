import express from "express";
import Routes from "./routes/index.js";

const App = express();
// use router in api
App.use("/api", Routes);

export default App;
