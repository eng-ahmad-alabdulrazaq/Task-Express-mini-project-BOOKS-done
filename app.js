//\\ بسم الله الرحمن الرحيم //\\
//express application instance, this is considered an import
const express = require("express");
let books = require("./books");
//
// new routes file imports.
let booksRoute = require("./api/books/books.routes");
const connectDB = require("./database");
const morgan = require("morgan"); //after npm i morgan
const cors = require("cors");
const app = express(); //express application instance, this is considered an import
app.use(cors());
app.use(express.json()); // Use your new routes with app.use
app.use(morgan("dev")); //after npm i morgan
app.use("/api/books", booksRoute);
// new routes file imports.
//
// notfound error
app.use((req, res, next) => {
  return res.status(404).json({ message: "PATH NOT FOUND!" });
});
// notfound error
//
// error handler
app.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || "SERVER ERROR!");
});
// error handler
//
//routes: binding application to port 8000
connectDB(); //connecting to DB
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`this is port ${PORT}`);
});
//routes: binding application to port 8000
