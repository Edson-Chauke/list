const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
  firstname: {
    type: String,
    unique: true,
    required: true,
  },
  lastname: {
    type: String,
    minlength: 6,
    required: true,
  },
  email: {
    type: String,
    default: "Basic",
    required: true,
  },
  password: {
    type: String,
    default: "Basic",
    required: true,
  },
})

const User = Mongoose.model("user", UserSchema)
module.exports = User