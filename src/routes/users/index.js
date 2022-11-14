import Express from "express";
import controller from "./controller.js";

const Router = Express.Router();

Router.get("/", controller.getAllUser);
Router.get("/getmyuser", controller.getMyUSer);

export default Router;
