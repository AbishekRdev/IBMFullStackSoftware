const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const axios = require('axios'); // Importing Axios for HTTP requests
const public_users = express.Router();

const doesExist = (username) => {
  let usersWithSameName = users.filter((user) => {
    return user.username === username;
  });
  if (usersWithSameName.length > 0) {
    return true;
  } else {
    return false;
  }
};

public_users.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (!doesExist(username)) {
      users.push({ "username": username, "password": password });
      return res.status(200).json({ message: "User successfully registered. Now you can login" });
    } else {
      return res.status(404).json({ message: "User already exists!" });
    }
  }
  return res.status(404).json({ message: "Unable to register user." });
});

// Task 10: Fetch all books using a promise-based function
function getBookList() {
  return new Promise((resolve, reject) => {
    resolve(books);
  });
}

// Get all books available in the shop
public_users.get('/', function (req, res) {
  getBookList().then(
    (bk) => res.send(JSON.stringify(bk, null, 4)),
    (error) => res.send("denied")
  );
});

// Task 11: Get book details based on ISBN using Axios and async/await
async function getBookFromISBN(isbn) {
  try {
    const response = await axios.get(`https://example.com/api/books/${isbn}`); // Replace with the actual API URL
    return response.data; // Return book data
  } catch (error) {
    throw new Error("Unable to find book with ISBN: " + isbn);
  }
}

// Get book details based on ISBN
public_users.get('/isbn/:isbn', async (req, res) => {
  const isbn = req.params.isbn;
  try {
    const book = await getBookFromISBN(isbn);
    res.send(JSON.stringify(book, null, 4));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Task 12: Get book details based on Author using Axios and async/await
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`https://example.com/api/books?author=${author}`); // Replace with the actual API URL
    return response.data; // Return books by author
  } catch (error) {
    throw new Error("Unable to find books by author: " + author);
  }
}

// Get book details based on author
public_users.get('/author/:author', async (req, res) => {
  const author = req.params.author;
  try {
    const booksByAuthor = await getBooksByAuthor(author);
    if (booksByAuthor.length === 0) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.send(JSON.stringify(booksByAuthor, null, 4));
  } catch (error) {
    res.status(500).send(error.message);
  }
}); 

// Task 13: Get book details based on Title using Axios and async/await
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`https://example.com/api/books?title=${title}`); // Replace with the actual API URL
    return response.data; // Return books by title
  } catch (error) {
    throw new Error("Unable to find books with title: " + title);
  }
}

// Get all books based on title
public_users.get('/title/:title', async (req, res) => {
  const title = req.params.title;
  try {
    const booksByTitle = await getBooksByTitle(title);
    if (booksByTitle.length === 0) {
      return res.status(404).json({ message: "Title not found" });
    }
    res.send(JSON.stringify(booksByTitle, null, 4));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports.general = public_users;
