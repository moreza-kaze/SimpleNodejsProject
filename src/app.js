import "express-async-errors";
import express from "express";
import Routes from "./routes/index.js";
import notFound from "./middlewares/notFound.middleware.js";

const App = express();
App.use(express.json());
App.use(express.urlencoded({ extended: true }));

// use router in api
App.use("/api", Routes);
App.use(notFound);

export default App;
