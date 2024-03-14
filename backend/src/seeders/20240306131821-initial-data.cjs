"use strict";

const bcrypt = require("bcryptjs");
const { fakerES } = require("@faker-js/faker");

function generateRandomISBN() {
  let isbn = "978";
  for (let i = 0; i < 9; i++) {
    isbn += Math.floor(Math.random() * 10);
  }

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(isbn[i]) * (i % 2 === 0 ? 1 : 3);
  }
  const checkDigit = (10 - (sum % 10)) % 10;

  isbn += checkDigit;

  return isbn;
}

function addTransfer(transfers) {
  const transferArray = transfers.map((transfer, index) => ({
    type_transaction: transfer.typeTransaction,
    date_transaction: transfer.date_transaction,
    userId: transfer.userId,
    bookId: transfer.bookId,
    createdAt: transfer.createdAt,
    updatedAt: transfer.updatedAt,
  }));
  return transferArray;
}
function addBooks(books) {
  const bookArray = books.map((book, index) => ({
    id: index + 1,
    title: book.title,
    type: book.type,
    edition: book.edition,
    date: book.date,
    author: book.author,
    userId: book.userId,
    type_transaction: book.typeTransaction,
    ISBN: book.ISBN,
    description: book.description,
    createdAt: book.createdAt,
    updatedAt: book.updatedAt,
  }));
  return bookArray;
}
function replacePunctuationMarks(str) {
  const punctuationWords = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
  };

  return str.replace(/[áéíóúÁÉÍÓÚ]/g, (match) => punctuationWords[match]);
}
function setAllUsers() {
  const allUsers = [];
  for (let i = 1; i < 7; i++) {
    const firstName = fakerES.person.firstName();
    const lastName = fakerES.person.lastName();
    const email = replacePunctuationMarks(firstName + lastName + "@gmail.com")
      .replace(/\s/g, "")
      .toLowerCase();
    allUsers.push({
      email: email,
      password: bcrypt.hashSync("test"),
      username: firstName,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return allUsers;
}

function setupData() {
  const books = addBooks([
    {
      title: "El señor de los anillos",
      type: "Fantasía",
      edition: "Primera",
      author: "J.R.R. Tolkien",
      userId: 1,
      typeTransaction: "swap",
      ISBN: generateRandomISBN(),
      createdAt: new Date(),
      updatedAt: new Date(),
      date: new Date("1954-07-29"),
      description:
        "Un épico relato de aventuras que sigue a un pequeño hobbit llamado Frodo Bolsón en su búsqueda para destruir un anillo maligno y salvar a la Tierra Media del malvado Señor Oscuro Sauron.",
    },
    {
      title: "Cien años de soledad",
      type: "Realismo mágico",
      edition: "Segunda",
      author: "Gabriel García Márquez",
      userId: 2,
      typeTransaction: "donate",
      ISBN: generateRandomISBN(),
      createdAt: new Date(),
      updatedAt: new Date(),
      date: new Date("1967-05-30"),
      description:
        "Una saga familiar que sigue la historia de varias generaciones de la familia Buendía en el ficticio pueblo de Macondo, donde ocurren eventos surrealistas y mágicos.",
    },
    {
      title: "Harry Potter y la piedra filosofal",
      type: "Fantasía",
      edition: "Primera",
      author: "J.K. Rowling",
      userId: 3,
      typeTransaction: "swap",
      ISBN: generateRandomISBN(),
      createdAt: new Date(),
      updatedAt: new Date(),
      date: new Date("1997-06-26"),
      description:
        "La primera entrega de la serie de libros de Harry Potter, que sigue las aventuras de un joven mago, Harry Potter, y sus amigos Hermione Granger y Ron Weasley, mientras asisten a la escuela de magia y hechicería de Hogwarts.",
    },
    {
      title: "1984",
      type: "Ciencia ficción",
      edition: "Primera",
      author: "George Orwell",
      userId: 4,
      typeTransaction: "donate",
      ISBN: generateRandomISBN(),
      createdAt: new Date(),
      updatedAt: new Date(),
      date: new Date("1949-06-08"),
      description:
        "Una distopía clásica que sigue la historia de Winston Smith, un hombre que vive en un mundo totalitario gobernado por el omnipresente Gran Hermano.",
    },
    {
      title: "Orgullo y prejuicio",
      type: "Romance",
      edition: "Segunda",
      author: "Jane Austen",
      userId: 5,
      typeTransaction: "swap",
      ISBN: generateRandomISBN(),
      createdAt: new Date(),
      updatedAt: new Date(),
      date: new Date("1813-01-28"),
      description:
        "Una historia de amor clásica que sigue las vidas de las hermanas Bennet y su relación con varios caballeros de la sociedad británica del siglo XIX.",
    },
    {
      title: "Don Quijote de la Mancha",
      type: "Clásico",
      edition: "Primera",
      author: "Miguel de Cervantes",
      userId: 6,
      typeTransaction: "swap",
      ISBN: generateRandomISBN(),
      createdAt: new Date(),
      updatedAt: new Date(),
      date: new Date("1605-01-16"),
      description:
        "Una obra maestra de la literatura española que sigue las aventuras de un caballero llamado Don Quijote que se embarca en una serie de extravagantes y cómicas aventuras con su fiel escudero Sancho Panza.",
    },
    {
      title: "Matar un ruiseñor",
      type: "Ficción",
      edition: "Segunda",
      author: "Harper Lee",
      userId: 6,
      typeTransaction: "swap",
      ISBN: generateRandomISBN(),
      createdAt: new Date(),
      updatedAt: new Date(),
      date: new Date("1960-07-11"),
      description:
        "Una novela que aborda temas de raza e injusticia en el sur de Estados Unidos durante la Gran Depresión, contada a través de los ojos de una niña llamada Scout Finch.",
    },
    {
      title: "Crónica de una muerte anunciada",
      type: "Realismo mágico",
      edition: "Tercera",
      author: "Gabriel García Márquez",
      userId: 6,
      typeTransaction: "donate",
      ISBN: generateRandomISBN(),
      createdAt: new Date(),
      updatedAt: new Date(),
      date: new Date("1981-01-07"),
      description:
        "Una novela que explora los eventos que rodean el asesinato de un hombre en un pequeño pueblo latinoamericano, narrada desde diferentes perspectivas y con un sentido de inevitabilidad.",
    },
  ]);

  const transfers = addTransfer([
    {
      typeTransaction: "swap",
      date_transaction: new Date(),
      userId: 1,
      bookId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      typeTransaction: "swap",
      date_transaction: new Date(),
      userId: 2,
      bookId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      typeTransaction: "swap",
      date_transaction: new Date(),
      userId: 3,
      bookId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      typeTransaction: "swap",
      date_transaction: new Date(),
      userId: 4,
      bookId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  const users = setAllUsers();
  return { books, users, transfers };
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { users, books, transfers } = setupData();
    await queryInterface.bulkInsert("users", users);
    await queryInterface.bulkInsert("books", books);
    await queryInterface.bulkInsert("transfers", transfers);
  },

  async down(queryInterface, Sequelize) {},
};
