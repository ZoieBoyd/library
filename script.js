const container = document.querySelector(".books-container");

const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createBookCard(book) {
    const card = document.createElement("div");
    card.classList.add("book-card");
    const content = document.createElement("div");
    content.classList.add("book-card-content");
    const title = document.createElement("h1");
    const author = document.createElement("h2");
    const pages = document.createElement("p");
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    content.appendChild(title);
    content.appendChild(author);
    content.appendChild(pages);
    card.appendChild(content);
    container.appendChild(card);
}

function displayAllBooks() {
    for(const book of myLibrary) {
        createBookCard(book);
    }
}

addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 310, false));
addBookToLibrary(new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, true));
addBookToLibrary(new Book("Pride and Prejudice", "Jane Austen", 376, true))
addBookToLibrary(new Book("To Kill a Mockingbird", "Harper Lee", 281, false));
console.log(myLibrary);
displayAllBooks();