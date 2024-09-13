const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  age: Number,
}, {timestamps: true});


module.exports = mongoose.model('user', userSchema)