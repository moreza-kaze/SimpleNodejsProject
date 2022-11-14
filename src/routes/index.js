import Express from "express";
import errorsMiddleware from "../middlewares/errors.middleware.js";
import { isLoggined } from "../middlewares/isloggined.middleware.js";
import AuthRouter from "./auth/index.js";
import UserRouter from "./users/index.js";

const Router = Express.Router();
Router.use("/auth", AuthRouter);
Router.use("/users", isLoggined, UserRouter);

Router.use(errorsMiddleware);
export default Router;
