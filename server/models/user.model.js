const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
    },
    password: String,
    role: {
      type: String,
      enum: ["ADMIN", "USER", "GUEST"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model("User", userSchema)

module.exports = User
