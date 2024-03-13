import * as url from "url";
import { db } from "../models/index.js";

const Book = db.Book;
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const createBook = async (req, res) => {
  try {
    let { title, type, edition, date, author, typeTransaction, ISBN } =
      req.body;
    if (!title || !date || !author) throw new Error("Missing fields");

    let book = {
      title: title,
      type: type,
      edition: edition,
      date: date,
      author: author,
      type_transaction: typeTransaction,
      ISBN: ISBN,
      description: description,
      filename: req.file ? req.file.filename : "",
    };

    let newBook = await Book.create(book);

    res.status(200).send(newBook);
  } catch (err) {
    res.status(500).send({
      message: "Error creating the book",
    });
  }
};

export const findAllBook = async (req, res) => {
  try {
    let books = await Book.findAll({ include: { model: db.User } });
    if (books == []) {
      return res.status(404).send({ message: "No data found" });
    }
    res.status(200).send(books);
  } catch (err) {
    res.status(500).send({
      message: "Error getting all the users",
    });
  }
};

export const findOneBook = async (req, res) => {
  try {
    let { bookId } = req.params;
    let book = await Book.findOne({
      where: { id: bookId },
      include: { model: db.User },
    });
    if (!book) {
      return res.status(404).send({ message: "Book Not Found!" });
    }
    res.status(200).send(book);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error finding the book" });
  }
};

export const updateBook = async (req, res) => {
  try {
    let {
      title,
      type,
      edition,
      date,
      author,
      typeTransaction,
      description,
      ISBN,
    } = req.body;
    const { bookId } = req.params;
    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).send({ message: "Book Not Found!" });
    }
    let newBook = {
      title: title,
      type: type,
      edition: edition,
      date: date,
      author: author,
      type_transaction: typeTransaction,
      ISBN: ISBN,
      description: description,
      filename: req.file ? req.file.filename : "",
    };

    if (book.filename) {
      const imagePath = path.join(__dirname, "../public/images", book.filename);
      await fs.unlink(imagePath);
      console.log("Image deleted");
    }

    const [num] = await Book.update(newBook, {
      where: { id: bookId },
    });

    if (num == 1) {
      res.send({
        message: "Book updated.",
      });
    } else {
      res.send({
        message: "Book cannot be updated.",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error updating book" });
  }
};

export const updateBookIfNotImage = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).send({ message: "Book Not Found!" });
    }
    console.log(req.body);
    const [num] = await Book.update(req.body, {
      where: { id: bookId },
    });

    if (num == 1) {
      res.send({
        message: "Book updated.",
      });
    } else {
      res.send({
        message: "Book cannot be updated.",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error updating book" });
  }
};

export const deleteOneBook = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).send({ message: "Book Not Found!" });
    }

    if (book.filename) {
      const imagePath = path.join(__dirname, "../public/images", book.filename);
      await fs.unlink(imagePath);
      console.log("Image deleted");
    }

    const num = await Book.destroy({
      where: { id: bookId },
    });

    if (num == 1) {
      res.send({
        message: "Book deleted.",
      });
    } else {
      res.send({
        message: "Book cannot be deleted.",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error deleting Book" });
  }
};
