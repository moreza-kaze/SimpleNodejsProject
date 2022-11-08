import { check } from "express-validator";

export default new (class {
  registerValidator() {
    return [
      check("email").isEmail().withMessage("email is wrong"),
      check("password").not().isEmail().withMessage("password is wrong"),
    ];
  }
  loginValidator() {
    return [
      check("email").isEmail().withMessage("email is wrong"),
      check("password").not().isEmail().withMessage("password is wrong"),
    ];
  }
})();
