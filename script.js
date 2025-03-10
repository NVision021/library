let BOOKSHELF = document.querySelector(".bookshelf");

//To store books
const myLibrary = [{name: "name", author: "author", pages: "pages", readStatus: "read", bookID: "555"}];

//Book constructor
function Book (name, author, pages, readStatus, bookId){
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.bookId = bookId;
}

//Function to create book
function addBookToLibrary(name, author, pages, readStatus) {
  myLibrary.push(new Book(name, author, pages, readStatus, crypto.randomUUID()));
}

//Function to loop through array and display each book on the page
function displayBooks() {
  //remove what is already in there
  let booksOnShelf = document.querySelectorAll(".bookshelf > *");
  for (let book of booksOnShelf) {
    BOOKSHELF.removeChild(book);
  }
  //add what is in array
  for (let book of myLibrary) {
    let bookCard = document.createElement("div");
    let cardHeading = document.createElement("h3");
    cardHeading.textContent = `${book.name} by ${book.author}`;
    let cardContent = document.createElement("div");
    cardContent.textContent = `pages: ${book.pages}`;

    bookCard.appendChild(cardHeading);
    bookCard.appendChild(cardContent);
    BOOKSHELF.appendChild(bookCard);
  }
}

displayBooks();