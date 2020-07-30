 // Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "AIzaSyCMVN4rM89ayGc0xI6NBPD_BgXxYMpaNlg",
     authDomain: "library-fe5ca.firebaseapp.com",
     databaseURL: "https://library-fe5ca.firebaseio.com",
     projectId: "library-fe5ca",
     storageBucket: "library-fe5ca.appspot.com",
     messagingSenderId: "656439959932",
     appId: "1:656439959932:web:85d645a903c35c5c4d04f9",
     measurementId: "G-J2330PC40J"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.database()


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
    let key = firebase.database().ref().child("newBook").push().key;

    let book = {
        titleInput: document.getElementById('book-title').value,
        authorInput: document.getElementById('book-author').value,
        pagesInput: document.getElementById('book-pages').value,
        key: key,
    };

    let updates = {};

    updates["/newBook/" + key] = book;
    firebase.database().ref().update(updates);
    render();
 }

 function render() {
    let libraryContainer = document.getElementById("library");
    let bookArray = [];
    firebase.database().ref('newBook').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            let childKey = childSnapshot.key;
            let childData = childSnapshot.val();
            bookArray.push(Object.values(childData));
        })

        for(let i = 0; i < bookArray.length; i++) {
            let author = bookArray[i][0];
            let keyData = bookArray[i][1];
            let pages = bookArray[i][2];
            let title = bookArray[i][3];

            let libraryDiv = document.createElement('div');
            libraryDiv.setAttribute("class", "library-books");
            libraryDiv.setAttribute("data-key", keyData);

            let titleDiv = document.createElement('div');
            titleDiv.setAttribute("class", "library-books__prop book-title");
            titleDiv.innerHTML = title;

            let authorDiv = document.createElement('div');
            authorDiv.setAttribute("class", "library-books__prop book-author");
            authorDiv.innerHTML = author;

            let pagesDiv = document.createElement('div');
            pagesDiv.setAttribute("class", "library-books__prop book-pages");
            pagesDiv.innerHTML = pages;

            let statusDiv = document.createElement('div');
            statusDiv.setAttribute("class", "library-books__prop book-status");
            statusDiv.innerHTML =  `<input type="checkbox" class="book-status__input">
                                    <span class="book-status__input-span">Yes</span>
                                    <span class="book-status__input-span">No</span>`;

            let removeDiv = document.createElement('div');
            removeDiv.setAttribute("class", "library-books__prop book-remove");
            removeDiv.innerHTML = `<button class="book-delete">
                                        <svg id="deleteBook-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                            <title>cancel-circle</title>
                                            <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
                                            <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
                                        </svg>
                                    </button>`;



            libraryContainer.append(libraryDiv);
            libraryDiv.append(titleDiv);
            libraryDiv.append(authorDiv);
            libraryDiv.append(pagesDiv);
            libraryDiv.append(statusDiv);
            libraryDiv.append(removeDiv);
        }
    });
 }


 document.querySelector('.library').addEventListener('click', function (e) {
     if (!e.target) {
         return;
     }
     if (e.target.classList.contains('book-delete')) {
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