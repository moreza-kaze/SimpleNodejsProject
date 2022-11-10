import { check } from "express-validator";

export default new (class {
  registerValidator() {
    return [
      check("username").not().isEmpty().withMessage("username is empty"),
      check("email").isEmail().withMessage("email is wrong"),
      check("password").not().isEmail().withMessage("password is wrong"),
    ];
  }
  loginValidator() {
    return [
      check("username").not().isEmpty().withMessage("username is wrong"),
      check("password").not().isEmail().withMessage("password is wrong"),
    ];
  }
})();
