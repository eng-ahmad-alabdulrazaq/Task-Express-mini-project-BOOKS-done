//\\ بسم الله الرحمن الرحيم //\\
//
// mini express app in books.routes.js initialization.
const express = require("express"); // after npm i express
let books = require("../../books");
const {
  bookCreate,
  deleteBook,
  updateBook,
  getAllBooks,
  getBookById,
} = require("./books.controllers");
const Book_ = require("../../models/Book_");
const upload = require("../../middlewares/multer");
const router = express.Router();
//
//middleware check
router.param("_id", async (req, res, next, _id) => {
  const book = await Book_.findById(_id);
  if (!book) {
    return res.status(404).json({ message: "THIS ID IS INVALID!" });
  }
  req.book = book;
  next();
});
//middleware check
//
//routes
router.get("/", getAllBooks);
router.post("/", upload.single("bookImage"), bookCreate);
router.delete("/:_id", deleteBook);
router.put("/:_id", updateBook);
router.get("/:_id", getBookById);
//routes
//
module.exports = router; //Export the router.
