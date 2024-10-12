var i = 0;

const myLibrary = [

];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = document.getElementById('nameOfBook').value;
    const author = document.getElementById('nameOfAuthor').value;
    const pages = document.getElementById('numberOfPages').value;
    const checkbox = document.getElementById('checkbox').checked;
    let read;
    if (checkbox === true) {
        read = "Yes, I've read it.";
    }
    else {
        read = "No, I haven't read it yet.";
    }
    let book = new Book(title, author, pages, read);
    myLibrary.push(book)
    renderBooks();
}

function renderBooks() {
    let libraryEl = document.getElementById('library');
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML =
            `<div class=book-info-wrapper>
        <p class="title">Name Of The Book: ${book.title}</p>
        <p class="author">Name Of The Author: ${book.author}</p>
        <p class="pages">Number of Pages: ${book.pages}</p>
        <div class="wrapper">
        <p>Have You Read this Book?</p>
        <input id="checkbox-2" type="checkbox">
        </div>
        <button type="button" id="removeBook" onclick="removeBook(${i})">Remove</button>
        </div>`
        libraryEl.appendChild(bookEl);
    }
}


function removeBook(index) {
    myLibrary.splice(index, 1);
    renderBooks();
}

const button = document.getElementById('addBook');
button.addEventListener('click', function () {
    document.getElementById('addBook').style.visibility = 'hidden';
    document.getElementById('bookForm').style.visibility = 'visible';
})

const exitButton = document.getElementById('exitFormButton');
exitButton.addEventListener('click', function () {
    document.getElementById('addBook').style.visibility = 'visible';
    document.getElementById('bookForm').style.visibility = 'hidden';

})

const formAddBookButton = document.getElementById('addBookToLibrary');

formAddBookButton.addEventListener('click', function () {
    addBookToLibrary();
})

