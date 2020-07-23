function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages}, ${status}`
    }
}

let myLibrary = [];

let addBookElement = document.getElementById('addBook');
let formContainer = document.getElementById('form-container');

addBookElement.addEventListener('click', openForm);

function openForm () {
    let formContainerStyle = window.getComputedStyle(formContainer).getPropertyValue("display");
    
    (formContainerStyle == 'none') ? formContainer.style.display = 'block': formContainer.style.display = 'none';
}