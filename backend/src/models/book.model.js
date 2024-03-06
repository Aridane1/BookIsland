export default function createBookModel(sequelize, Sequelize) {
    const Book = sequelize.define("book", {
        tittle: {
            type: Sequelize.STRING,
        },
        type: {
            type: Sequelize.STRING,
        },
        edition: {
            type: Sequelize.STRING,
        },
        date: {
            type: Sequelize.DATE,
        },
        author: {
            type: Sequelize.STRING,
        },
    });

    return Book;
}
