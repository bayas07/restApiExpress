const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  email: String,
  password: String,
  address: {
    street: String,
    pincode: String,
  },
  interests: {
    type: [String],
    required: true,
    validate: {
      validator: function (value) {
        // Ensure that the array is not empty and contains at least one element
        return value.length > 0;
      },
      message: "At least one interest is required",
    },
  },
});

module.exports = mongoose.model("users", usersSchema);
