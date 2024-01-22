//\\ بسم الله الرحمن الرحيم //\\

const { model, Schema } = require("mongoose");

const BookSchema = new Schema(
  {
    title: String,
    author: String,
    price: { type: Number, default: 5 },
    // price2: {
    //   //needs checking
    //   amount: Number, //needs checking
    //   currency: String, //needs checking
    // }, //needs checking
    image: String, //needs checking
  },
  { timestamps: true }
);
module.exports = model("Book", BookSchema);
