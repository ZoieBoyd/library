const container = document.querySelector(".books-container");
const newBookBtn = document.querySelector("#new-book-btn");
const dialog = document.querySelector("dialog");
const closeDialogBtn = document.querySelector("#close-btn");
const submitBtn = document.querySelector("#submit-btn");
const form = document.querySelector("form");

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

const myLibrary = [
    new Book("The Hobbit", "J.R.R. Tolkien", 310, false),
    new Book("Pride and Prejudice", "Jane Austen", 376, true),
    new Book("To Kill a Mockingbird", "Harper Lee", 281, false),
];

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function deleteBook(book) {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    displayAllBooks();
}

function createBookCard(book) {
    const card = document.createElement("div");
    const content = document.createElement("div");
    const titleContainer = document.createElement("div");
    const title = document.createElement("h1");
    const author = document.createElement("h2");
    const pages = document.createElement("p");
    const readCheckbox = document.createElement("input");
    const deleteBtn = document.createElement("button");

    readCheckbox.type = "checkbox";
    card.classList.add("book-card");
    content.classList.add("book-card-content");
    titleContainer.classList.add("title-container");
    readCheckbox.classList.add("read-checkbox");
    deleteBtn.classList.add("delete-btn");
    
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    readCheckbox.checked = book.hasRead;

    titleContainer.appendChild(title);
    titleContainer.appendChild(author);
    content.appendChild(titleContainer);
    content.appendChild(pages);
    content.appendChild(readCheckbox);
    content.appendChild(deleteBtn);
    card.appendChild(content);
    container.appendChild(card);

    readCheckbox.addEventListener("click", () => {
        book.hasRead = !book.hasRead;
    });

    deleteBtn.addEventListener("click", () => {
        deleteBook(book);
    });
}

function displayAllBooks() {
    container.innerHTML = "";
    for(const book of myLibrary) {
        createBookCard(book);
    }
}

newBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

submitBtn.addEventListener("click", (event) => {
    const titleInput = document.getElementById("title-input").value;
    const authorInput = document.getElementById("author-input").value;
    const pagesInput = document.getElementById("pages-input").value;
    const readInput = document.getElementById("read-input").checked;
    
    if (!titleInput || !authorInput || !pagesInput) {
        alert("Please enter information for all of the fields.");
        return;
    }
    
    addBookToLibrary(new Book(titleInput, authorInput, pagesInput, readInput));
    dialog.close();
    form.reset();
    displayAllBooks();
})

closeDialogBtn.addEventListener("click", () => {
    dialog.close();
    form.reset();
});

displayAllBooks();