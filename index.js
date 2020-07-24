function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages}, ${status}`
    }
}

function openCloseForm () {
    let formContainerStyle = window.getComputedStyle(formContainer).getPropertyValue("display");
    
    (formContainerStyle == 'none') ? formContainer.style.display = 'block': formContainer.style.display = 'none';
}

function addBooks() {
    let titleInput = document.getElementById('book-title').value;
    let authorInput = document.getElementById('book-author').value;
    let pagesInput = document.getElementById('book-pages').value;
    let statusInput = document.getElementById('book-status').value;
    myLibrary.push(new Book(titleInput, authorInput, pagesInput, statusInput));
    render(myLibrary[myLibrary.length - 1]);
}

function render(newBook) {
    let bookIndex = myLibrary.indexOf(newBook);
    bookSection.innerHTML +=`<div class="library-books book-index${bookIndex}">
                                <div class="library-books__prop book-title">${newBook.title}</div>
                                <div class="library-books__prop book-author">${newBook.author}</div>
                                <div class="library-books__prop book-pages">${newBook.pages}</div>
                                <div class="library-books__prop book-status">${newBook.status}</div>
                            </div>`;
}

let submitBtn = document.querySelector('.btn-submit');
submitBtn.addEventListener('click', addBooks);


let formContainer = document.getElementById('form-container');
let addBookElement = document.getElementById('addBook');
addBookElement.addEventListener('click', openCloseForm);

let bookSection = document.querySelector('.library');

// let template = `<h1>Hello World!</h1>`
// render(template, document.querySelector('.book'));

let myLibrary = [];

