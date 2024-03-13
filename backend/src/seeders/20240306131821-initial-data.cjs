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
      id: i,
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
