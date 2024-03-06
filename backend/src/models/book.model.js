export default function createBookModel(sequelize, Sequelize) {
    const Book = sequelize.define("book", {
        title: {
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
        userId: {
            type: Sequelize.INTEGER,
        },
    });

    return Book;
}
