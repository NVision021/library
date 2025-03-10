let BOOKSHELF = document.querySelector(".bookshelf");

//To store books
const myLibrary = [{name: "The Road", author: "Cormac McCarthy", pages: "304", readStatus: false, bookID: "no ID"}];

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

    let cardContentPages = document.createElement("p");
    cardContentPages.textContent = `Pages: ${book.pages}`;
    
    let cardContentRead = document.createElement("label");
    cardContentRead.setAttribute("for", "readStatus");
    cardContentRead.textContent = `Read?`;

    let readTickBox = document.createElement("input");
    readTickBox.setAttribute("id", "readStatus");
    readTickBox.setAttribute("type", "checkbox");
    if (book.readStatus === true) {
      readTickBox.setAttribute("checked", "");
    }

    bookCard.appendChild(cardHeading);
    bookCard.appendChild(cardContentPages);
    bookCard.appendChild(cardContentRead);
    bookCard.appendChild(readTickBox);
    BOOKSHELF.appendChild(bookCard);
  }
}

displayBooks();