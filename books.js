// Set up data structures

class Book {
    constructor(
        title = 'Empty',
        author = 'Empty',
        pages = '0',
        date = 'Empty',
        isRead = false
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.date = date;
        this.isRead = isRead;
    }
}

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

//UI manipulation

const removeBookFromLibrary = (e) => {
    console.log(e.target.closest('.book-card').getAttribute('index'));
    let removedIndex = e.target.closest('.book-card').getAttribute('index');
    let removedBook = library.books.splice(removedIndex, 1);
    e.target.closest('.book-card').remove();
    console.log(library.books);

    let cards = document.getElementsByClassName('book-card');

    for (var i = 0; i < cards.length; i++) {
        cards[i].setAttribute('index', i);
    }

}

const checkboxAlert = (e) => {

    let checkedIndex = e.target.closest('.book-card').getAttribute('index');
    let isCheckedRead = library.books[checkedIndex].isRead;

    if (isCheckedRead == true){
        library.books[checkedIndex].isRead = false;
    }
    else {
        library.books[checkedIndex].isRead = true;
    }
    
    console.log(library.books[checkedIndex].isRead);

}

const addBookToDisplay = (book) => {

    let bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    catalog.appendChild(bookCard);

    let cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    bookCard.appendChild(cardHeader);

    let title = document.createElement('h4');
    title.className = 'book-title';
    title.innerHTML = book.title;

    let author = document.createElement('h4');
    author.className = 'author-name';
    author.innerHTML = `By: ${book.author}`;

    let pages = document.createElement('h4');
    pages.className = 'page-count';
    pages.innerHTML = `Length: ${book.pages} pages`;

    let date = document.createElement('h4');
    date.className = 'published';
    date.innerHTML = `Published: ${book.date}`;

    let isReadDiv = document.createElement('div');
    isReadDiv.className = 'has-read';

    let isReadText = document.createElement('h4');
    isReadText.innerHTML = 'Finished reading?';
    isReadDiv.appendChild(isReadText);

    let isReadBox = document.createElement('label');
    let isReadSwitch = document.createElement('input');
    let isReadSlider = document.createElement('span');
    isReadBox.className = 'switch';
    isReadSlider.className = 'slider';
    isReadSwitch.setAttribute('type', 'checkbox');
    isReadSwitch.addEventListener('click', checkboxAlert);
    isReadBox.appendChild(isReadSwitch);
    isReadBox.appendChild(isReadSlider);
    isReadDiv.appendChild(isReadBox);

    let deleteButton = document.createElement('div');
    deleteButton.className = 'delete';
    let deleteText = document.createElement('span');
    deleteText.innerHTML = "Remove";
    deleteButton.appendChild(deleteText);
    deleteButton.addEventListener('click', removeBookFromLibrary);



    bookCard.setAttribute('index', library.books.indexOf(book));    
    
    cardHeader.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(date);
    bookCard.appendChild(isReadDiv);
    bookCard.appendChild(deleteButton);

    closeModal();
    clearBookInputFields();
}

const clearBookInputFields = () => {
    document.getElementById('input-title').value = "";
    document.getElementById('input-author').value = "";
    document.getElementById('input-pages').value = "";
    document.getElementById('input-date').value = "";
    document.getElementById('input-finished').value = false;

}

//Adding book data

const getBookFromInput = () => {
    const title = document.getElementById('input-title').value;
    const author = document.getElementById('input-author').value;
    const pages = document.getElementById('input-pages').value;
    const date = document.getElementById('input-date').value;
    const hasRead = document.getElementById('input-finished').value;
    return new Book(title, author, pages, date, hasRead);

}

const addBookToLibrary = (e) => {
    const newBook = getBookFromInput();
    library.addBook(newBook);
    addBookToDisplay(newBook);

}

const catalog = document.querySelector('#catalog');


var modal = document.getElementById('modal');
var modalOpener = document.getElementById('modal-opener');
var cancel = document.getElementById('cancel-btn');

const openModal = () => {
    modal.style.display = "block";
}

const closeModal = () => {
    modal.style.display = "none";
}


//Automatically adding test book

const hobbit = new Book('The Hobbit', 'JRR Tolkien', 433, 'June 14 2004', 'not read yet');
library.addBook(hobbit);
addBookToDisplay(hobbit);
