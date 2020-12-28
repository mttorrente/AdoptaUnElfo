const mongoose = require("mongoose")
const Schema = mongoose.Schema

const homeSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    diet: {
      type: String,
      enum: ['Vegana','Vegetariana','Gluten-free','Mediterránea','Keto','Orgánica']
    },
    phone: {
      type: Number,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    user: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
     favourites: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
  },
  {
    timestamps: true,
  }
)

const Home = mongoose.model("Home", homeSchema)

module.exports = Home
