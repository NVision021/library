//To store books
const myLibrary = [{name: "The Road", author: "Cormac McCarthy", pages: "304", readStatus: false, bookId: "no ID"}];

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
  let bookshelf = document.querySelector(".bookshelf");
  let booksOnShelf = document.querySelectorAll(".bookshelf > *");
  for (let book of booksOnShelf) {
    bookshelf.removeChild(book);
  }
  //add what is in array
  for (let book of myLibrary) {
    let bookCard = document.createElement("div");

    let cardHeading = document.createElement("h3");
    cardHeading.textContent = `${book.name} by ${book.author}`;

    let cardContentPages = document.createElement("p");
    cardContentPages.textContent = `Pages: ${book.pages}`;
    
    let cardContentRead = document.createElement("label");
    cardContentRead.setAttribute("for", book.bookId);
    cardContentRead.textContent = `Read?`;

    let readTickBox = document.createElement("input");
    readTickBox.setAttribute("type", "checkbox");
    readTickBox.setAttribute("id", book.bookId);


    if (book.readStatus === true) {
      readTickBox.setAttribute("checked", "");
    }

    bookCard.appendChild(cardHeading);
    bookCard.appendChild(cardContentPages);
    bookCard.appendChild(cardContentRead);
    bookCard.appendChild(readTickBox);
    bookshelf.appendChild(bookCard);
  }
}

const newBookButton = document.querySelector(".new-book");
const dialog = document.querySelector("dialog");
//Make button open modal
newBookButton.addEventListener("click", () => {
  dialog.showModal();
})

//Add functionality to okay and cancel buttons in modal
const cancelButton = document.querySelector("#modalCancel");
cancelButton.addEventListener("click", (event) => {
  bookForm.reset();
  dialog.close();
})

const bookForm = document.querySelector("#book-form");
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const bookName = document.querySelector("#title").value;
  const bookAuthor = document.querySelector("#author").value;
  const bookPages = document.querySelector("#pages").value;
  let bookReadStatus = "";
  if (document.querySelector("#yes-reading").checked) {
    bookReadStatus = true;
  } else {
    bookReadStatus = false;
  }
  addBookToLibrary(bookName, bookAuthor, bookPages, bookReadStatus);
  displayBooks();

  bookForm.reset();

  dialog.close();
})

displayBooks();