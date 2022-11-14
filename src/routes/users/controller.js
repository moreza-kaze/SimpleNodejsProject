import controller from "../controller.js";

export default new (class extends controller {
  constructor() {
    super();
  }
  async getAllUser(req, res) {
    res.send("all");
  }
  async getMyUSer(req, res) {
    res.send("my");
  }
})();
