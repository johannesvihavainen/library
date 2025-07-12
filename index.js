const library = document.querySelector('.library');
const newBookBtn = document.querySelector('.new-book-btn')
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');

const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
    // take params, create a book then store it in the array
    const book = new Book(title, author, pages)
    myLibrary.push(book)
}

addBookToLibrary('Rich dad, Poor dad', 'Robert Kyosake', 400)
addBookToLibrary('Atomic Habits', 'James Clear', 330)
addBookToLibrary('Psycho-Cybernetics', 'Maxwell Maltz', 380)

console.log(myLibrary);

function updateBooks() {
    library.innerText = ''
    for (let i = 0; i < myLibrary.length; i++) {
        const book = document.createElement('div')
        book.classList.add('book')
        book.innerText = `
        ${myLibrary[i].title}
        ${myLibrary[i].author}
        ${myLibrary[i].pages} pages
        `
        library.appendChild(book)
    }
}

function displayForm() {
    const form = document.querySelector('.new-book-form')
    form.style.display = 'flex'
}

const addBookBtn = document.querySelector('.add-book-btn')
addBookBtn.addEventListener('click', () => {
    event.preventDefault()
    const newTitle = title.value;
    const newAuthor = author.value;
    const newPages = pages.value;

    addBookToLibrary(newTitle, newAuthor, newPages)
    console.log(myLibrary);
    updateBooks()

})

updateBooks()