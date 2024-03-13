export default function createBookModel(sequelize, Sequelize) {
  const Book = sequelize.define("book", {
    title: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.BOOLEAN,
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
    filename: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
  });

  return Book;
}
