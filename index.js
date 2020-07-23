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
}

let submitBtn = document.querySelector('.btn-submit');
submitBtn.addEventListener('click', addBooks);


let formContainer = document.getElementById('form-container');
let addBookElement = document.getElementById('addBook');
addBookElement.addEventListener('click', openCloseForm);

let myLibrary = [];

