import { db } from "../models/index.js";
const Book = db.Book;

export const createBook = async (req, res) => {
    try {
        let { tittle, type, edition, date, author } = req.body;
        if (!tittle || !date || !author) throw new Error("Missing fields");

        let book = {
            tittle: tittle,
            type: type,
            edition: edition,
            date: date,
            author: author,
            filename: req.file ? req.file.filename : ""
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
        let books = await Book.findAll();
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
        let book = await user.findOne({ where: { id: bookId } });
        if (!book) {
            return res.status(404).send({ message: "Book Not Found!" });
        }
        res.status(200).send(book);
    } catch (err) {
        res.status(500).send({ message: "Error finding the book" });
    }
};

export const updateBook = (req, res) => {
    const id = req.params.id;
    Book.findByPk(id)
        .then(book => {
            if (book.filename) {
                const imagePath = path.join(__dirname, '../public/images/book', book.filename);
                fs.unlink(imagePath, (err) => {
                    if (err) console.error('Error deleting img');
                    else { console.log('image deleted') };
                })
            }
        }).catch(error => {
            res.status(500).send({ message: 'Error finding book' });
        });


    Book.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Book updated."
            });
        } else {
            res.send({
                message: "Book cannot be updated."
            });
        }
    }).catch(error => {
        res.status(500).send({ message: 'Error updating book' });
    });
};

export const deleteOneBook = (req, res) => {
    const id = req.params.id;
    Book.findByPk(id)
        .then(article => {
            if (article.filename) {
                const imagePath = path.join(__dirname, '../public/images/book', book.filename);
                fs.unlink(imagePath, (err) => {
                    if (err) console.error('Error deleting img');
                    else { console.log('image deleted') };
                })
            }
        }).catch(error => {
            res.status(500).send({ message: 'Error finding book' });
        });

    Book.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Book deleted."
            });
        } else {
            res.send({
                message: "Book cannot be deleted."
            });
        }
    }).catch(error => {
        res.status(500).send({ message: 'Error deleting Book' });
    });
}; 