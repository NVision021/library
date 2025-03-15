//To store books
let myLibrary = [];

//Book constructor
function Book (name, author, pages, readStatus, bookId){
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.bookId = bookId;
}

//Prototype function to toggle read status
Book.prototype.toggleRead = function() {
  this.readStatus = this.readStatus ?false :true;
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
    if (book.readStatus) {
      bookCard.classList.toggle("read");
    } else {
      bookCard.classList.toggle("unread");
    }

    let removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.setAttribute("data-bookid", book.bookId);
    removeButton.addEventListener ("click", (event) => {
      //Find books with matching id to this button
      myLibrary = myLibrary.filter((book) => book.bookId !== event.target.dataset.bookid);
      displayBooks();
    })

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
    readTickBox.addEventListener("change", () => {
      book.toggleRead();
      displayBooks();
    });

    bookCard.appendChild(removeButton);
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

addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 5, true);
addBookToLibrary("The Road", "Cormac McCarthy", 10, true);
addBookToLibrary("The Road", "Cormac McCarthy", 100, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 5, true);
addBookToLibrary("The Road", "Cormac McCarthy", 10, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
addBookToLibrary("The Road", "Cormac McCarthy", 1000, true);
displayBooks();