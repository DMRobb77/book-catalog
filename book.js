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

export { Book };