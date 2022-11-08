import Express from "express";
import controller from "./controller.js";
import validator from "./validator.js";

const Router = Express.Router();

Router.post("/register", validator.registerValidator(), controller.register);
Router.post("/login", validator.loginValidator(), controller.login);

export default Router;
