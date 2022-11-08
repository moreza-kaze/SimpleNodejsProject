import Express from "express";
import AuthRouter from "./auth/index.js";

const Router = Express.Router();

Router.use("/auth", AuthRouter);

export default Router;
