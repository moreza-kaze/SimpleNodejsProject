import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const isLoggined = async (req, res, next) => {
  const fullToken = req.headers["authorization"];
  if (!fullToken) {
    console.log(fullToken);
    return res.status(401).json({
      messege: "token not found",
    });
  }
  const Auth = fullToken.split(" ")[0];
  const Token = fullToken.split(" ")[1];
  try {
    if (Auth === "Bearer") {
      const decoded = jwt.verify(Token, process.env.JWT_KEY);
      const user = await userModel.findOne({ id: decoded._id });
      req.user = user;
      console.log(user);
      next();
    }
  } catch (ex) {
    res.status(401).json({
      messege: "token expire",
    });
  }
};

export { isLoggined };
