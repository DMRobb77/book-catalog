import Book from "./book";
import initDOMSetup from "./initial-layout";
import "normalize.css";
import "./style.css";

initDOMSetup();

const catalog = document.querySelector("#catalog");
const modal = document.getElementById("modal");
const modalOpener = document.getElementById("modal-opener");
const cancelBtn = document.getElementById("cancel-btn");
const addBtn = document.getElementById("add-btn");

// Set up data structure

class Library {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook);
    }
  }

  getBook(title) {
    return this.books.find((book) => book.title === title);
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  isInLibrary(newBook) {
    return this.books.some((book) => book.title === newBook.title);
  }
}

const library = new Library();

// UI manipulation

const removeBookFromLibrary = (e) => {
  e.target.closest(".book-card").remove();
  const cards = document.getElementsByClassName("book-card");

  for (let i = 0; i < cards.length; i += 1) {
    cards[i].setAttribute("index", i);
  }
};

const checkboxAlert = (e) => {
  const checkedIndex = e.target.closest(".book-card").getAttribute("index");
  const isCheckedRead = library.books[checkedIndex].isRead;

  if (isCheckedRead === true) {
    library.books[checkedIndex].isRead = false;
  } else {
    library.books[checkedIndex].isRead = true;
  }
};

const addBookToDisplay = (book) => {
  const bookCard = document.createElement("div");
  bookCard.className = "book-card";
  catalog.appendChild(bookCard);

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";
  bookCard.appendChild(cardHeader);

  const title = document.createElement("h4");
  title.className = "book-title";
  title.innerHTML = book.title;

  const author = document.createElement("h4");
  author.className = "author-name";
  author.innerHTML = `By: ${book.author}`;

  const pages = document.createElement("h4");
  pages.className = "page-count";
  pages.innerHTML = `Length: ${book.pages} pages`;

  const date = document.createElement("h4");
  date.className = "published";
  date.innerHTML = `Published: ${book.date}`;

  const isReadDiv = document.createElement("div");
  isReadDiv.className = "has-read";

  const isReadText = document.createElement("h4");
  isReadText.innerHTML = "Finished reading?";
  isReadDiv.appendChild(isReadText);

  const isReadBox = document.createElement("label");
  const isReadSwitch = document.createElement("input");
  const isReadSlider = document.createElement("span");
  isReadBox.className = "switch";
  isReadSlider.className = "slider";
  isReadSwitch.setAttribute("type", "checkbox");
  isReadSwitch.addEventListener("click", checkboxAlert);
  isReadBox.appendChild(isReadSwitch);
  isReadBox.appendChild(isReadSlider);
  isReadDiv.appendChild(isReadBox);

  const deleteButton = document.createElement("div");
  deleteButton.className = "delete";
  const deleteText = document.createElement("span");
  deleteText.innerHTML = "Remove";
  deleteButton.appendChild(deleteText);
  deleteButton.addEventListener("click", removeBookFromLibrary);

  bookCard.setAttribute("index", library.books.indexOf(book));

  cardHeader.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(date);
  bookCard.appendChild(isReadDiv);
  bookCard.appendChild(deleteButton);

  closeModal();
  clearBookInputFields();
};

const clearBookInputFields = () => {
  document.getElementById("input-title").value = "";
  document.getElementById("input-author").value = "";
  document.getElementById("input-pages").value = "";
  document.getElementById("input-date").value = "";
  document.getElementById("input-finished").value = false;
};

// Adding book data

const getBookFromInput = () => {
  const title = document.getElementById("input-title").value;
  const author = document.getElementById("input-author").value;
  const pages = document.getElementById("input-pages").value;
  const date = document.getElementById("input-date").value;
  const hasRead = document.getElementById("input-finished").value;

  return new Book(title, author, pages, date, hasRead);
};

const errorMessage = document.getElementById("error-msg");
const inputs = document.getElementsByTagName("input");

const handleInputFocus = () => {
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].classList.remove("needs-completed");
  }
};

for (let i = 0; i < inputs.length; i += 1) {
  inputs[i].addEventListener("focus", handleInputFocus);
}

const addBookToLibrary = (e) => {
  const newBook = getBookFromInput();
  let isValid = true;

  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].hasAttribute("required") && inputs[i].value === "") {
      isValid = false;
      inputs[i].classList.toggle("needs-completed");
    }
  }
  if (!isValid) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    library.addBook(newBook);
    addBookToDisplay(newBook);
  }
};

const openModal = () => {
  modal.style.display = "block";
};

const closeModal = () => {
  errorMessage.style.display = "none";
  modal.style.display = "none";
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].value = "";
  }
  handleInputFocus();
};

modalOpener.addEventListener("click", openModal);
addBtn.addEventListener("click", addBookToLibrary);
cancelBtn.addEventListener("click", closeModal);

// Automatically adding test book

const hobbit = new Book(
  "The Hobbit",
  "JRR Tolkien",
  433,
  "June 14 2004",
  "not read yet"
);
library.addBook(hobbit);
addBookToDisplay(hobbit);
