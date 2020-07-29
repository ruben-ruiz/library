function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages}, ${status}`
    }
}

function openCloseForm() {
    let formContainerStyle = window.getComputedStyle(formContainer).getPropertyValue("display");

    (formContainerStyle == 'none') ? formContainer.style.display = 'block': formContainer.style.display = 'none';
}

function addBooks() {
    let titleInput = document.getElementById('book-title').value;
    let authorInput = document.getElementById('book-author').value;
    let pagesInput = document.getElementById('book-pages').value;
    // let statusInput = document.getElementById('book-status').value;
    // myLibrary.push(new Book(titleInput, authorInput, pagesInput, statusInput));
    myLibrary.push(new Book(titleInput, authorInput, pagesInput));

    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('book-pages').value = '';
    // document.getElementById('book-status').value = '';

    render(myLibrary[myLibrary.length - 1]);
}

function render(newBook) {
    let bookIndex = myLibrary.indexOf(newBook);
    let div = document.createElement('div');
    div.innerHTML = `<div class="library-books book-index${bookIndex}">
                        <div class="library-books__prop book-title">${newBook.title}</div>
                        <div class="library-books__prop book-author">${newBook.author}</div>
                        <div class="library-books__prop book-pages">${newBook.pages}</div>
                        <div class="library-books__prop book-status">
                            <input type="checkbox" class="book-status__input">
                                <span class="book-status__input-span">Yes</span>
                                <span class="book-status__input-span">No</span>
                        </div>
                        <div class="library-books__prop book-remove">
                            <button class="book-delete">
                                <svg id="deleteBook-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <title>cancel-circle</title>
                                    <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
                                    <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>`;
    document.querySelector('.library').append(div);
}


document.querySelector('.library').addEventListener('click', function(e) {
    if(!e.target) { return; }
    if(e.target.classList.contains('book-delete')) {
        event.target.closest('.library-books').remove();
    };
});

let submitBtn = document.querySelector('.btn-submit');
submitBtn.addEventListener('click', addBooks);


let formContainer = document.getElementById('form-container');
let addBookElement = document.getElementById('addBook');
addBookElement.addEventListener('click', openCloseForm);

let bookSection = document.querySelector('.library');

let myLibrary = [];