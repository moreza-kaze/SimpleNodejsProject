import controller from "../controller.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default new (class extends controller {
  constructor() {
    super();
  }
  async register(req, res) {
    let user = await this.User.findOne({
      username: req.body.username,
      email: req.body.email,
    });
    if (user) {
      console.log(user);
      return this.response({
        res,
        code: 400,
        messege: "user is exist",
        data: {},
      });
    }
    const { username, email, password } = req.body;
    user = new this.User({ username, email, password });
    user.password = await bcrypt.hash(user.password, await bcrypt.genSalt(10));
    await user.save();

    return this.response({
      res,
      code: 201,
      messege: "user created",
      data: user,
    });
  }
  async login(req, res) {
    const user = await this.User.findOne({ username: req.body.username });
    if (!user) {
      return this.response({
        res,
        code: 400,
        messege: "username or password invalid",
      });
    }
    const isValid = bcrypt.compare(req.body.password, user.password);
    if (!isValid) {
      return this.response({
        res,
        code: 400,
        messege: "username or password invalid",
      });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, {
      expiresIn: "1m",
    });
    return this.response({
      res,
      code: 200,
      messege: "user is login",
      data: {
        accessToken: token,
      },
    });
  }
})();
