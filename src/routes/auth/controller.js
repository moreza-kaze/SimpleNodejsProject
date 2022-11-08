import controller from "../controller.js";

export default new (class extends controller {
  constructor() {
    super();
  }
  async register(req, res) {
    res.json({ date: "Register" });
  }
  async login(req, res) {
    res.json({ date: "Login" });
  }
})();
