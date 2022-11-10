import autoBind from "auto-bind";
import { validationResult } from "express-validator";
import userModel from "../models/user.model.js";

export default class {
  constructor() {
    autoBind(this);
    this.User = userModel;
  }
  validationBody(req, res) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = result.array();
      const messeges = [];
      errors.forEach((err) => messeges.push(err.msg));
      res.status(400).json({
        status: "error",
        data: messeges,
      });
      return false;
    }
    return true;
  }

  validate(req, res, next) {
    if (!this.validationBody(req, res)) {
      return;
    }
    next();
  }
  response({ res, messege, code = 200, data = {} }) {
    res.status(code).json({
      Messege: messege,
      Data: data,
    });
  }
}
