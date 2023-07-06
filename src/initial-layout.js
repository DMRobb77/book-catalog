
const initDOMSetup = () => {
    // Create the modal element
    const modalDiv = document.createElement("div");
    modalDiv.id = "modal";

    // Create the book-entry element
    const bookEntryDiv = document.createElement("div");
    bookEntryDiv.id = "book-entry";

    // Create the input-fields element
    const inputFieldsDiv = document.createElement("div");
    inputFieldsDiv.id = "input-fields";

    // Create the title input field
    const inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.id = "input-title";
    inputTitle.name = "input-title";
    inputTitle.placeholder = "Title";
    inputFieldsDiv.appendChild(inputTitle);
    inputFieldsDiv.appendChild(document.createElement("br"));

    // Create the author input field
    const inputAuthor = document.createElement("input");
    inputAuthor.type = "text";
    inputAuthor.id = "input-author";
    inputAuthor.name = "input-author";
    inputAuthor.placeholder = "Author";
    inputFieldsDiv.appendChild(inputAuthor);
    inputFieldsDiv.appendChild(document.createElement("br"));

    // Create the pages input field
    const inputPages = document.createElement("input");
    inputPages.type = "number";
    inputPages.id = "input-pages";
    inputPages.name = "input-pages";
    inputPages.placeholder = "Page count";
    inputPages.setAttribute("oninput", "this.value = this.value.replace(/[^0-9]/g, '').replace(/(\\..*)\\./g,'$1');");
    inputFieldsDiv.appendChild(inputPages);
    inputFieldsDiv.appendChild(document.createElement("br"));

    // Create the date published label
    const datePublishedLabel = document.createElement("label");
    datePublishedLabel.htmlFor = "input-date";
    datePublishedLabel.textContent = "Date published:";
    inputFieldsDiv.appendChild(datePublishedLabel);

    // Create the date published input field
    const inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.id = "input-date";
    inputDate.name = "input-date";
    inputDate.placeholder = "Date published";
    inputFieldsDiv.appendChild(inputDate);
    inputFieldsDiv.appendChild(document.createElement("br"));

    // Create the "Finished reading?" label
    const finishedReadingLabel = document.createElement("label");
    finishedReadingLabel.htmlFor = "input-finished";
    finishedReadingLabel.textContent = "Finished reading?";
    inputFieldsDiv.appendChild(finishedReadingLabel);

    // Create the "Finished reading?" checkbox
    const inputFinished = document.createElement("input");
    inputFinished.type = "checkbox";
    inputFinished.id = "input-finished";
    inputFinished.name = "input-finished";
    inputFieldsDiv.appendChild(inputFinished);

    // Append the input-fields element to the book-entry element
    bookEntryDiv.appendChild(inputFieldsDiv);

    // Create the modal-btn-holder element
    const modalBtnHolderDiv = document.createElement("div");
    modalBtnHolderDiv.id = "modal-btn-holder";

    // Create the "Add Book" button
    const addBtn = document.createElement("button");
    addBtn.name = "add-btn";
    addBtn.type = "button";
    addBtn.id = "add-btn";
    addBtn.className = "button";
    addBtn.textContent = "Add Book";
    modalBtnHolderDiv.appendChild(addBtn);

    // Create the "Cancel" button
    const cancelBtn = document.createElement("button");
    cancelBtn.name = "cancel-btn";
    cancelBtn.id = "cancel-btn";
    cancelBtn.type = "button";
    cancelBtn.className = "button";
    cancelBtn.textContent = "Cancel";
    modalBtnHolderDiv.appendChild(cancelBtn);

    // Append the modal-btn-holder element to the book-entry element
    bookEntryDiv.appendChild(modalBtnHolderDiv);

    // Append the book-entry element to the modal element
    modalDiv.appendChild(bookEntryDiv);

    // Get the catalog element
    const catalogDiv = document.createElement("div");
    catalogDiv.id = "catalog";
    document.body.appendChild(catalogDiv);

    // Create the "Add Book" button in the catalog
    const modalOpenerBtn = document.createElement("button");
    modalOpenerBtn.name = "modal-opener";
    modalOpenerBtn.type = "button";
    modalOpenerBtn.id = "modal-opener";
    modalOpenerBtn.textContent = "+";
    catalogDiv.appendChild(modalOpenerBtn);

    // Append the modal element to the document body
    document.body.appendChild(modalDiv);
}

export default initDOMSetup;