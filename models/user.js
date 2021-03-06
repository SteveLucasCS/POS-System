const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  restaurantID: { type: String, default: "" },
  email: { type: String, unique: true },
  password: { type: String },
  manager: { type: Boolean, default: false },
  waiter: { type: Boolean, default: false },
  host: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
  roles: {
    type: [Number],
    required: false,
    default: []
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
