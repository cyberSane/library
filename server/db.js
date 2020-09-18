const uuid = require('uuid');
const uuidv4 = uuid.v4

const store = {
    books: [],
    authors: []
}

module.exports = {
    getBook(id) {
        return store.books.find((book) => book.id === id)
    },
    getAuthor(id) {
        return store.authors.find((author) => author.id === id)
    },
    getBooks() {
        return store.books
    },
    getAuthors() {
        return store.authors
    },
    createAuthor(name) {
        const newAuthor = {
            id: uuidv4(),
            name
        };
        store.authors.push(newAuthor)
        return newAuthor;
    },
    createBook({title, authorIds}) {
        const newBook = {
            id: uuidv4(),
            title,
            authorIds
        };
        store.books.push(newBook)
        return newBook;
    },
    getBookAuthors(bookId) {
        const book = store.books.find((book) => book.id === bookId)
        if (book) {
            return store.authors.filter(({id}) => {
                return book.authorIds.indexOf(id) !== -1
            })
        } else {
            return []
        }
    },
    getAuthorBooks(authorId) {
        return store.books.filter(({authorIds}) => {
            return authorIds.indexOf(authorId) !== -1
        })
    }
};
