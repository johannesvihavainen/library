const library = document.querySelector('.library');
const newBookBtn = document.querySelector('.new-book-btn')
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.read = false;
}

Book.prototype.toggleStatus = function () {
    return this.read = !this.read
}

function addBookToLibrary(title, author, pages) {
    // take params, create a book then store it in the array
    const book = new Book(title, author, pages)
    myLibrary.push(book)
}

addBookToLibrary('Rich dad, Poor dad', 'Robert Kyosake', 400)
addBookToLibrary('Atomic Habits', 'James Clear', 330)
addBookToLibrary('Psycho-Cybernetics', 'Maxwell Maltz', 380)

function updateBooks() {
    library.innerText = ''
    for (let i = 0; i < myLibrary.length; i++) {
        const book = document.createElement('div')
        book.classList.add('book')

        book.dataset.id = myLibrary[i].id

        book.innerText = `
        ${myLibrary[i].title}
        ${myLibrary[i].author}
        ${myLibrary[i].pages} pages
        Read: ${myLibrary[i].read ? "Yes" : "No"}
        `
        library.appendChild(book)
    }

    const book = document.querySelectorAll('.book')

    book.forEach(item => {
        const removeBtn = document.createElement('button')
        removeBtn.textContent = 'Remove'
        removeBtn.classList.add('remove-btn')
        item.appendChild(removeBtn)

        const toggleStatusBtn = document.createElement('button')
        toggleStatusBtn.textContent = 'toggle read'
        toggleStatusBtn.classList.add('toggle-status-btn')
        item.appendChild(toggleStatusBtn)

        removeBtn.addEventListener('click', () => {
            const bookId = item.dataset.id

            myLibrary = myLibrary.filter(function (obj) {
                return obj.id !== bookId
            })
            updateBooks()
        })

        toggleStatusBtn.addEventListener('click', () => {
            const bookId = item.dataset.id
            const bookToToggle = myLibrary.find(book => book.id === bookId)
            bookToToggle.toggleStatus()
            updateBooks()
        })
    });
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

    if (newTitle === '' || newAuthor === '' || newPages === '') {
        const errorMessage = document.querySelector('.error-message')

        setTimeout(() => {
            errorMessage.style.display = 'flex'
        }, 200);
        setTimeout(() => {
            errorMessage.style.display = 'none'
        }, 5000);
    }
    else {
        addBookToLibrary(newTitle, newAuthor, newPages)
        updateBooks()
    }



})

updateBooks()




