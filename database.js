//\\ بسم الله الرحمن الرحيم //\\
const mongoose = require("mongoose"); //after npm i mongoose
const dotenv = require("dotenv"); //after npm i dotenv
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.M0NG0DB_LINK);
    console.log("connected to DB");
  } catch (error) {
    console.log("could not connect to DB", error);
  }
};

module.exports = connectDB;
