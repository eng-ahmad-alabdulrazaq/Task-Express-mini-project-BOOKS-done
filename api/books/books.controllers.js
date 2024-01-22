//\\ بسم الله الرحمن الرحيم //\\
//
//books.js data file
const Book = require("../../models/Book_");
//books.js data file
//
//getAllBooks
const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.json(books);
  } catch (error) {
    next(error);
  }
};
//getAllBooks
//
//getBookById
const getBookById = async (req, res, next) => {
  try {
    return res.status(200).json(req.book);
  } catch (error) {
    next(error);
  }
};
//getbookById
//
//new book
const bookCreate = async (req, res, next) => {
  //
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const book = await Book.create(req.body);
    return res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};
//new book
//
//Delete book
const deleteBook = async (req, res, next) => {
  try {
    await req.book.deleteOne();
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};
//Delete book
//
//Update book
const updateBook = async (req, res, next) => {
  try {
    await req.book.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};
//Update book
//
module.exports = {
  bookCreate,
  deleteBook,
  updateBook,
  getBookById,
  getAllBooks,
};
