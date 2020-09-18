const db = require('./db');

const Query = {
  book: (root, {id}) => db.getBook(id),
  author: (root, {id}) => db.getAuthor(id),
  books: () => db.getBooks(),
  authors: () => db.getAuthors(),
};

const Mutation = {
  addAuthor: (root, {name}) => {
    return db.createAuthor(name);
  },
  addBook: (root, {input}) => {
    return db.createBook(input);
  }
};

const Book = {
  authors: (book) => db.getBookAuthors(book.id)
};

const Author = {
  books: (author) => db.getAuthorBooks(author.id)
};

module.exports = { Query, Mutation, Book, Author };
