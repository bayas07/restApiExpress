const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`DB connected - ${connect.connection.host}`);
  } catch (err) {
    console.log(`Error to connect DB -  ${err.message}`);
  }
};

module.exports = { connectToDB };
