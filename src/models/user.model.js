import mongoose from "mongoose";
import timestampsPlugin from "mongoose-timestamp";

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean },
});
userSchema.plugin(timestampsPlugin);

const userModel = mongoose.model("User", userSchema);

export default userModel;
