const uuid = require('uuid');
const uuidv4 = uuid.v4

const store = {
    books: [
        {
            "id": "aa94a298-093f-4053-87cc-88bd8586b9d5",
            "title": "Harry Potter and the Half-Blood Prince (Harry Potter  #6)",
            "authorIds": [
                "98f2851a-3c25-444a-bb68-2c87883b410e",
                "e7ddf6ed-f165-44cc-a57d-3f54b912f78b"
            ]
        },
        {
            "id": "2d5383a0-30f6-4689-94ed-21138859dbe6",
            "title": "Harry Potter and the Order of the Phoenix (Harry Potter  #5)",
            "authorIds": [
                "98f2851a-3c25-444a-bb68-2c87883b410e",
                "e7ddf6ed-f165-44cc-a57d-3f54b912f78b"
            ]
        },
        {
            "id": "97d52716-a742-4c93-8e81-261c72b054a3",
            "title": "Harry Potter and the Chamber of Secrets (Harry Potter  #2)",
            "authorIds": [
                "98f2851a-3c25-444a-bb68-2c87883b410e"
            ]
        },
        {
            "id": "fcfe91fd-fd43-4337-ade1-e30f396878ae",
            "title": "Harry Potter and the Prisoner of Azkaban (Harry Potter  #3)",
            "authorIds": [
                "98f2851a-3c25-444a-bb68-2c87883b410e",
                "e7ddf6ed-f165-44cc-a57d-3f54b912f78b"
            ]
        },
        {
            "id": "e4f5a263-94d1-4c3f-8e08-1cdb7b3c1076",
            "title": "Harry Potter Boxed Set  Books 1-5 (Harry Potter  #1-5)",
            "authorIds": [
                "98f2851a-3c25-444a-bb68-2c87883b410e",
                "e7ddf6ed-f165-44cc-a57d-3f54b912f78b"
            ]
        },
        {
            "id": "c48ffd10-a102-46ed-bfed-3721854210b4",
            "title": "Unauthorized Harry Potter Book Seven News: \"Half-Blood Prince\" Analysis and Speculation",
            "authorIds": [
                "ecb0c655-bcf8-4169-8622-1e38fc5cee20"
            ]
        },
        {
            "id": "a0bc5b68-806c-45c9-8d9d-a11ed1577467",
            "title": "Harry Potter Collection (Harry Potter  #1-6)",
            "authorIds": [
                "98f2851a-3c25-444a-bb68-2c87883b410e"
            ]
        },
        {
            "id": "69182ac3-0889-4452-84ed-92ef76ccf599",
            "title": "The Ultimate Hitchhiker's Guide: Five Complete Novels and One Story (Hitchhiker's Guide to the Galaxy  #1-5)",
            "authorIds": [
                "97a8dbd4-6505-4af2-8efd-d4296ceedde3"
            ]
        },
        {
            "id": "acdb6cef-c799-47e2-a839-5989f3db004c",
            "title": "The Ultimate Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy  #1-5)",
            "authorIds": [
                "97a8dbd4-6505-4af2-8efd-d4296ceedde3"
            ]
        },
        {
            "id": "837dcee0-b7eb-4f6a-bed4-989433386c68",
            "title": "The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy  #1)",
            "authorIds": [
                "97a8dbd4-6505-4af2-8efd-d4296ceedde3"
            ]
        },
        {
            "id": "172e3e16-3dbe-4405-b1ec-87f8bfaa1a2e",
            "title": "The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy  #1)",
            "authorIds": [
                "97a8dbd4-6505-4af2-8efd-d4296ceedde3",
                "dfbb670a-cc17-4e3b-9001-3e727264dba2"
            ]
        },
        {
            "id": "644541ca-6154-46ab-ad48-8c42f611176d",
            "title": "The Ultimate Hitchhiker's Guide (Hitchhiker's Guide to the Galaxy  #1-5)",
            "authorIds": [
                "97a8dbd4-6505-4af2-8efd-d4296ceedde3"
            ]
        },
        {
            "id": "86b1b1a4-b7a5-4ba2-9756-bdaf3fa73ba2",
            "title": "A Short History of Nearly Everything",
            "authorIds": [
                "40dffa7c-2139-4d38-9263-a5878f364bfb"
            ]
        },
        {
            "id": "2abdff67-8bef-4d28-a7a2-e394a87a90ec",
            "title": "Bill Bryson's African Diary",
            "authorIds": [
                "40dffa7c-2139-4d38-9263-a5878f364bfb"
            ]
        },
        {
            "id": "5fad2e25-02b4-4971-a361-82c9343e2175",
            "title": "Bryson's Dictionary of Troublesome Words: A Writer's Guide to Getting It Right",
            "authorIds": [
                "40dffa7c-2139-4d38-9263-a5878f364bfb"
            ]
        },
        {
            "id": "7a31302c-ea26-46c8-a93f-29cb6a380a31",
            "title": "In a Sunburned Country",
            "authorIds": [
                "40dffa7c-2139-4d38-9263-a5878f364bfb"
            ]
        },
        {
            "id": "f3e07c2c-aa89-4250-9424-1eef6f815c3f",
            "title": "I'm a Stranger Here Myself: Notes on Returning to America After Twenty Years Away",
            "authorIds": [
                "40dffa7c-2139-4d38-9263-a5878f364bfb"
            ]
        },
        {
            "id": "164af36f-1e4a-4203-85cd-9573d35bbc24",
            "title": "The Lost Continent: Travels in Small Town America",
            "authorIds": [
                "40dffa7c-2139-4d38-9263-a5878f364bfb"
            ]
        },
        {
            "id": "26ba7c55-693a-4776-b69f-cc31799fd0f0",
            "title": "Neither Here nor There: Travels in Europe",
            "authorIds": [
                "40dffa7c-2139-4d38-9263-a5878f364bfb"
            ]
        },
        {
            "id": "b0ccb785-f2bd-4eff-ac35-e1d53a4372df",
            "title": "Notes from a Small Island",
            "authorIds": [
                "40dffa7c-2139-4d38-9263-a5878f364bfb"
            ]
        },
        {
            "id": "5e9ac9ca-a562-4fcd-8c27-553582ad25e4",
            "title": "The Mother Tongue: English and How It Got That Way",
            "authorIds": [
                "40dffa7c-2139-4d38-9263-a5878f364bfb"
            ]
        },
        {
            "id": "41372645-27b1-450a-bd55-a7b9f1fcb595",
            "title": "J.R.R. Tolkien 4-Book Boxed Set: The Hobbit and The Lord of the Rings",
            "authorIds": [
                "0603dce9-5d97-4d2a-8fa4-fcbaf1480031"
            ]
        },
        {
            "id": "451a9ca5-cf03-417e-b9b2-e76ef39a7076",
            "title": "The Lord of the Rings (The Lord of the Rings  #1-3)",
            "authorIds": [
                "0603dce9-5d97-4d2a-8fa4-fcbaf1480031"
            ]
        },
        {
            "id": "6fd38739-1a65-490c-b0a8-851c6d69c9e9",
            "title": "The Fellowship of the Ring (The Lord of the Rings  #1)",
            "authorIds": [
                "0603dce9-5d97-4d2a-8fa4-fcbaf1480031"
            ]
        },
        {
            "id": "c3487223-ed3e-45c9-b9fc-d829f3d1ba54",
            "title": "The Lord of the Rings (The Lord of the Rings  #1-3)",
            "authorIds": [
                "0603dce9-5d97-4d2a-8fa4-fcbaf1480031",
                "517ec5ef-8f9b-4ad4-95e1-324af359ffc9"
            ]
        },
        {
            "id": "cbf7f1e7-d5bf-4b61-8ff4-3bcc6fa93904",
            "title": "The Lord of the Rings: Weapons and Warfare",
            "authorIds": [
                "fe26a4c4-ecea-41d0-914d-e425342b8fad",
                "513cc028-bc64-420d-bcd5-42516fd990e9",
                "eb6ba429-6a88-4cfc-a08c-1702d8cfb456"
            ]
        },
        {
            "id": "b35d37fd-f907-487e-9dd3-a60336eee681",
            "title": "The Lord of the Rings: Complete Visual Companion",
            "authorIds": [
                "c996bf54-2ada-4c6f-8fa6-986d052190d2"
            ]
        },
        {
            "id": "fe9ebac4-1f72-47a7-818c-c36c373adb4c",
            "title": "Agile Web Development with Rails: A Pragmatic Guide",
            "authorIds": [
                "1c0dd001-dd46-48f8-b9a5-a06033f7daf7",
                "2f5c5f05-062b-4f7d-9bd5-7397914070cb",
                "18c9ee62-dd31-44a7-b8d5-2a093af46a31",
                "aaf5994b-a4d6-4777-91bf-eefce8562103",
                "6c4797c8-cf55-469f-ad6c-131a74462933",
                "618d4638-139b-4d59-92f2-5527a8dcdeaa"
            ]
        },
        {
            "id": "88a30315-cf74-4c56-99f6-3746bccd5b4f",
            "title": "Hatchet (Brian's Saga  #1)",
            "authorIds": [
                "f8459a20-3e59-42c5-be1b-f33fd195ed25"
            ]
        },
        {
            "id": "4e848f55-5da2-4e39-ba86-1c559cfcf86a",
            "title": "Hatchet: A Guide for Using \"Hatchet\" in the Classroom",
            "authorIds": [
                "1205ee5d-11f0-4c75-ba0f-9ad31b9bc09f",
                "8a9fdf40-9d55-43c2-8062-538fc08d7e16",
                "d8c66f34-cf09-4354-81a1-d093816f665e"
            ]
        }
    ],
    authors: [
        {id: '98f2851a-3c25-444a-bb68-2c87883b410e', name: 'J.K. Rowling'},
        {id: 'e7ddf6ed-f165-44cc-a57d-3f54b912f78b', name: 'Mary GrandPré'},
        {id: 'ecb0c655-bcf8-4169-8622-1e38fc5cee20', name: 'W. Frederick Zimmerman'},
        {id: '97a8dbd4-6505-4af2-8efd-d4296ceedde3', name: 'Douglas Adams'},
        {id: 'dfbb670a-cc17-4e3b-9001-3e727264dba2', name: 'Stephen Fry'},
        {id: '40dffa7c-2139-4d38-9263-a5878f364bfb', name: 'Bill Bryson'},
        {id: '0603dce9-5d97-4d2a-8fa4-fcbaf1480031', name: 'J.R.R. Tolkien'},
        {id: '517ec5ef-8f9b-4ad4-95e1-324af359ffc9', name: 'Alan Lee'},
        {id: 'fe26a4c4-ecea-41d0-914d-e425342b8fad', name: 'Chris Smith'},
        {id: '513cc028-bc64-420d-bcd5-42516fd990e9', name: 'Christopher Lee'},
        {id: 'eb6ba429-6a88-4cfc-a08c-1702d8cfb456', name: 'Richard Taylor'},
        {id: 'c996bf54-2ada-4c6f-8fa6-986d052190d2', name: 'Jude Fisher'},
        {id: '1c0dd001-dd46-48f8-b9a5-a06033f7daf7', name: 'Dave Thomas'},
        {id: '2f5c5f05-062b-4f7d-9bd5-7397914070cb', name: 'David Heinemeier Hansson'},
        {id: '18c9ee62-dd31-44a7-b8d5-2a093af46a31', name: 'Leon Breedt'},
        {id: 'aaf5994b-a4d6-4777-91bf-eefce8562103', name: 'Mike Clark'},
        {id: '6c4797c8-cf55-469f-ad6c-131a74462933', name: 'Thomas Fuchs'},
        {id: '618d4638-139b-4d59-92f2-5527a8dcdeaa', name: 'Andreas Schwarz'},
        {id: 'f8459a20-3e59-42c5-be1b-f33fd195ed25', name: 'Gary Paulsen'},
        {id: '1205ee5d-11f0-4c75-ba0f-9ad31b9bc09f', name: 'Donna Ickes'},
        {id: '8a9fdf40-9d55-43c2-8062-538fc08d7e16', name: 'Edward Sciranko'},
        {id: 'd8c66f34-cf09-4354-81a1-d093816f665e', name: 'Keith Vasconcelles'}
    ]
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
