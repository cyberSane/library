const uuid = require('uuid');
const fs = require('fs');
const uuidv4 = uuid.v4

function process() {
    const raw = [
        {
            "bookID": 1,
            "title": "Harry Potter and the Half-Blood Prince (Harry Potter  #6)",
            "authors": "J.K. Rowling/Mary GrandPré",
            "average_rating": 4.57,
            "isbn": "0439785960",
            "isbn13": 9780439785969,
            "language_code": "eng",
            "num_pages": 652,
            "ratings_count": 2095690,
            "text_reviews_count": 27591,
            "publication_date": "9/16/2006",
            "publisher": "Scholastic Inc."
        },
        {
            "bookID": 2,
            "title": "Harry Potter and the Order of the Phoenix (Harry Potter  #5)",
            "authors": "J.K. Rowling/Mary GrandPré",
            "average_rating": 4.49,
            "isbn": "0439358078",
            "isbn13": 9780439358071,
            "language_code": "eng",
            "num_pages": 870,
            "ratings_count": 2153167,
            "text_reviews_count": 29221,
            "publication_date": "9/1/2004",
            "publisher": "Scholastic Inc."
        },
        {
            "bookID": 4,
            "title": "Harry Potter and the Chamber of Secrets (Harry Potter  #2)",
            "authors": "J.K. Rowling",
            "average_rating": 4.42,
            "isbn": "0439554896",
            "isbn13": 9780439554893,
            "language_code": "eng",
            "num_pages": 352,
            "ratings_count": 6333,
            "text_reviews_count": 244,
            "publication_date": "11/1/2003",
            "publisher": "Scholastic"
        },
        {
            "bookID": 5,
            "title": "Harry Potter and the Prisoner of Azkaban (Harry Potter  #3)",
            "authors": "J.K. Rowling/Mary GrandPré",
            "average_rating": 4.56,
            "isbn": "043965548X",
            "isbn13": 9780439655484,
            "language_code": "eng",
            "num_pages": 435,
            "ratings_count": 2339585,
            "text_reviews_count": 36325,
            "publication_date": "5/1/2004",
            "publisher": "Scholastic Inc."
        },
        {
            "bookID": 8,
            "title": "Harry Potter Boxed Set  Books 1-5 (Harry Potter  #1-5)",
            "authors": "J.K. Rowling/Mary GrandPré",
            "average_rating": 4.78,
            "isbn": "0439682584",
            "isbn13": 9780439682589,
            "language_code": "eng",
            "num_pages": 2690,
            "ratings_count": 41428,
            "text_reviews_count": 164,
            "publication_date": "9/13/2004",
            "publisher": "Scholastic"
        },
        {
            "bookID": 9,
            "title": "Unauthorized Harry Potter Book Seven News: \"Half-Blood Prince\" Analysis and Speculation",
            "authors": "W. Frederick Zimmerman",
            "average_rating": 3.74,
            "isbn": "0976540606",
            "isbn13": 9780976540601,
            "language_code": "en-US",
            "num_pages": 152,
            "ratings_count": 19,
            "text_reviews_count": 1,
            "publication_date": "4/26/2005",
            "publisher": "Nimble Books"
        },
        {
            "bookID": 10,
            "title": "Harry Potter Collection (Harry Potter  #1-6)",
            "authors": "J.K. Rowling",
            "average_rating": 4.73,
            "isbn": "0439827604",
            "isbn13": 9780439827607,
            "language_code": "eng",
            "num_pages": 3342,
            "ratings_count": 28242,
            "text_reviews_count": 808,
            "publication_date": "9/12/2005",
            "publisher": "Scholastic"
        },
        {
            "bookID": 12,
            "title": "The Ultimate Hitchhiker's Guide: Five Complete Novels and One Story (Hitchhiker's Guide to the Galaxy  #1-5)",
            "authors": "Douglas Adams",
            "average_rating": 4.38,
            "isbn": "0517226952",
            "isbn13": 9780517226957,
            "language_code": "eng",
            "num_pages": 815,
            "ratings_count": 3628,
            "text_reviews_count": 254,
            "publication_date": "11/1/2005",
            "publisher": "Gramercy Books"
        },
        {
            "bookID": 13,
            "title": "The Ultimate Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy  #1-5)",
            "authors": "Douglas Adams",
            "average_rating": 4.38,
            "isbn": "0345453743",
            "isbn13": 9780345453747,
            "language_code": "eng",
            "num_pages": 815,
            "ratings_count": 249558,
            "text_reviews_count": 4080,
            "publication_date": "4/30/2002",
            "publisher": "Del Rey Books"
        },
        {
            "bookID": 14,
            "title": "The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy  #1)",
            "authors": "Douglas Adams",
            "average_rating": 4.22,
            "isbn": 1400052920,
            "isbn13": 9781400052929,
            "language_code": "eng",
            "num_pages": 215,
            "ratings_count": 4930,
            "text_reviews_count": 460,
            "publication_date": "8/3/2004",
            "publisher": "Crown"
        },
        {
            "bookID": 16,
            "title": "The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy  #1)",
            "authors": "Douglas Adams/Stephen Fry",
            "average_rating": 4.22,
            "isbn": "0739322206",
            "isbn13": 9780739322208,
            "language_code": "eng",
            "num_pages": 6,
            "ratings_count": 1266,
            "text_reviews_count": 253,
            "publication_date": "3/23/2005",
            "publisher": "Random House Audio"
        },
        {
            "bookID": 18,
            "title": "The Ultimate Hitchhiker's Guide (Hitchhiker's Guide to the Galaxy  #1-5)",
            "authors": "Douglas Adams",
            "average_rating": 4.38,
            "isbn": "0517149257",
            "isbn13": 9780517149256,
            "language_code": "eng",
            "num_pages": 815,
            "ratings_count": 2877,
            "text_reviews_count": 195,
            "publication_date": "1/17/1996",
            "publisher": "Wings Books"
        },
        {
            "bookID": 21,
            "title": "A Short History of Nearly Everything",
            "authors": "Bill Bryson",
            "average_rating": 4.21,
            "isbn": "076790818X",
            "isbn13": 9780767908184,
            "language_code": "eng",
            "num_pages": 544,
            "ratings_count": 248558,
            "text_reviews_count": 9396,
            "publication_date": "9/14/2004",
            "publisher": "Broadway Books"
        },
        {
            "bookID": 22,
            "title": "Bill Bryson's African Diary",
            "authors": "Bill Bryson",
            "average_rating": 3.44,
            "isbn": "0767915062",
            "isbn13": 9780767915069,
            "language_code": "eng",
            "num_pages": 55,
            "ratings_count": 7270,
            "text_reviews_count": 499,
            "publication_date": "12/3/2002",
            "publisher": "Broadway Books"
        },
        {
            "bookID": 23,
            "title": "Bryson's Dictionary of Troublesome Words: A Writer's Guide to Getting It Right",
            "authors": "Bill Bryson",
            "average_rating": 3.87,
            "isbn": "0767910435",
            "isbn13": 9780767910439,
            "language_code": "eng",
            "num_pages": 256,
            "ratings_count": 2088,
            "text_reviews_count": 131,
            "publication_date": "9/14/2004",
            "publisher": "Broadway Books"
        },
        {
            "bookID": 24,
            "title": "In a Sunburned Country",
            "authors": "Bill Bryson",
            "average_rating": 4.07,
            "isbn": "0767903862",
            "isbn13": 9780767903868,
            "language_code": "eng",
            "num_pages": 335,
            "ratings_count": 72451,
            "text_reviews_count": 4245,
            "publication_date": "5/15/2001",
            "publisher": "Broadway Books"
        },
        {
            "bookID": 25,
            "title": "I'm a Stranger Here Myself: Notes on Returning to America After Twenty Years Away",
            "authors": "Bill Bryson",
            "average_rating": 3.9,
            "isbn": "076790382X",
            "isbn13": 9780767903820,
            "language_code": "eng",
            "num_pages": 304,
            "ratings_count": 49240,
            "text_reviews_count": 2211,
            "publication_date": "6/28/2000",
            "publisher": "Broadway Books"
        },
        {
            "bookID": 26,
            "title": "The Lost Continent: Travels in Small Town America",
            "authors": "Bill Bryson",
            "average_rating": 3.83,
            "isbn": "0060920084",
            "isbn13": 9780060920081,
            "language_code": "eng",
            "num_pages": 299,
            "ratings_count": 45712,
            "text_reviews_count": 2257,
            "publication_date": "8/28/1990",
            "publisher": "William Morrow Paperbacks"
        },
        {
            "bookID": 27,
            "title": "Neither Here nor There: Travels in Europe",
            "authors": "Bill Bryson",
            "average_rating": 3.86,
            "isbn": "0380713802",
            "isbn13": 9780380713806,
            "language_code": "eng",
            "num_pages": 254,
            "ratings_count": 48701,
            "text_reviews_count": 2238,
            "publication_date": "3/28/1993",
            "publisher": "William Morrow Paperbacks"
        },
        {
            "bookID": 28,
            "title": "Notes from a Small Island",
            "authors": "Bill Bryson",
            "average_rating": 3.91,
            "isbn": "0380727501",
            "isbn13": 9780380727506,
            "language_code": "eng",
            "num_pages": 324,
            "ratings_count": 80609,
            "text_reviews_count": 3301,
            "publication_date": "5/28/1997",
            "publisher": "William Morrow Paperbacks"
        },
        {
            "bookID": 29,
            "title": "The Mother Tongue: English and How It Got That Way",
            "authors": "Bill Bryson",
            "average_rating": 3.93,
            "isbn": "0380715430",
            "isbn13": 9780380715435,
            "language_code": "eng",
            "num_pages": 270,
            "ratings_count": 28489,
            "text_reviews_count": 2085,
            "publication_date": "9/28/1991",
            "publisher": "William Morrow Paperbacks"
        },
        {
            "bookID": 30,
            "title": "J.R.R. Tolkien 4-Book Boxed Set: The Hobbit and The Lord of the Rings",
            "authors": "J.R.R. Tolkien",
            "average_rating": 4.59,
            "isbn": "0345538374",
            "isbn13": 9780345538376,
            "language_code": "eng",
            "num_pages": 1728,
            "ratings_count": 101233,
            "text_reviews_count": 1550,
            "publication_date": "9/25/2012",
            "publisher": "Ballantine Books"
        },
        {
            "bookID": 31,
            "title": "The Lord of the Rings (The Lord of the Rings  #1-3)",
            "authors": "J.R.R. Tolkien",
            "average_rating": 4.5,
            "isbn": "0618517650",
            "isbn13": 9780618517657,
            "language_code": "eng",
            "num_pages": 1184,
            "ratings_count": 1710,
            "text_reviews_count": 91,
            "publication_date": "10/21/2004",
            "publisher": "Houghton Mifflin Harcourt"
        },
        {
            "bookID": 34,
            "title": "The Fellowship of the Ring (The Lord of the Rings  #1)",
            "authors": "J.R.R. Tolkien",
            "average_rating": 4.36,
            "isbn": "0618346252",
            "isbn13": 9780618346257,
            "language_code": "eng",
            "num_pages": 398,
            "ratings_count": 2128944,
            "text_reviews_count": 13670,
            "publication_date": "9/5/2003",
            "publisher": "Houghton Mifflin Harcourt"
        },
        {
            "bookID": 35,
            "title": "The Lord of the Rings (The Lord of the Rings  #1-3)",
            "authors": "J.R.R. Tolkien/Alan  Lee",
            "average_rating": 4.5,
            "isbn": "0618260587",
            "isbn13": 9780618260584,
            "language_code": "en-US",
            "num_pages": 1216,
            "ratings_count": 1618,
            "text_reviews_count": 140,
            "publication_date": "10/1/2002",
            "publisher": "Houghton Mifflin Harcourt"
        },
        {
            "bookID": 36,
            "title": "The Lord of the Rings: Weapons and Warfare",
            "authors": "Chris   Smith/Christopher  Lee/Richard Taylor",
            "average_rating": 4.53,
            "isbn": "0618391002",
            "isbn13": 9780618391004,
            "language_code": "eng",
            "num_pages": 218,
            "ratings_count": 19822,
            "text_reviews_count": 46,
            "publication_date": "11/5/2003",
            "publisher": "Houghton Mifflin Harcourt"
        },
        {
            "bookID": 37,
            "title": "The Lord of the Rings: Complete Visual Companion",
            "authors": "Jude Fisher",
            "average_rating": 4.5,
            "isbn": "0618510826",
            "isbn13": 9780618510825,
            "language_code": "eng",
            "num_pages": 224,
            "ratings_count": 359,
            "text_reviews_count": 6,
            "publication_date": "11/15/2004",
            "publisher": "Houghton Mifflin Harcourt"
        },
        {
            "bookID": 45,
            "title": "Agile Web Development with Rails: A Pragmatic Guide",
            "authors": "Dave Thomas/David Heinemeier Hansson/Leon Breedt/Mike Clark/Thomas  Fuchs/Andreas  Schwarz",
            "average_rating": 3.84,
            "isbn": "097669400X",
            "isbn13": 9780976694007,
            "language_code": "eng",
            "num_pages": 558,
            "ratings_count": 1430,
            "text_reviews_count": 59,
            "publication_date": "7/28/2005",
            "publisher": "Pragmatic Bookshelf"
        },
        {
            "bookID": 50,
            "title": "Hatchet (Brian's Saga  #1)",
            "authors": "Gary Paulsen",
            "average_rating": 3.72,
            "isbn": "0689840926",
            "isbn13": 9780689840920,
            "language_code": "eng",
            "num_pages": 208,
            "ratings_count": 270244,
            "text_reviews_count": 12017,
            "publication_date": "4/1/2000",
            "publisher": "Atheneum Books for Young Readers: Richard Jackson Books"
        },
        {
            "bookID": 51,
            "title": "Hatchet: A Guide for Using \"Hatchet\" in the Classroom",
            "authors": "Donna Ickes/Edward Sciranko/Keith Vasconcelles",
            "average_rating": 4,
            "isbn": 1557344493,
            "isbn13": 9781557344496,
            "language_code": "eng",
            "num_pages": 48,
            "ratings_count": 36,
            "text_reviews_count": 2,
            "publication_date": "8/28/1994",
            "publisher": "Teacher Created Resources"
        }
    ]

    const authors = {}

    a = {
        books: [],
        authors: {}
    }

    const books = raw.map((book, index) => {
        const authorIds = book.authors.split('/').map((author) => {
            if(!authors[author]) {
                const id = uuidv4();
                authors[author] = {
                    id,
                    name: author
                }
                return id
            } else {
                return authors[author].id
            }
        });

        if (raw.length - 1 === index) {
            fs.writeFileSync('./authors.json', JSON.stringify(authors))
        }

        return {
            id: uuidv4(),
            title: book.title,
            authorIds
        }
    })

    fs.writeFileSync('./books.json', JSON.stringify(books))
}

module.exports = { process }