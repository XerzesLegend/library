let myLibrary = [];
addBookToLibrary(myLibrary);
showPopUp();




function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        if(read){
            return(title + " by " + author + ", " + pages + "pages, read");
        }
        else{
            return(title + " by " + author + ", " + pages + " pages, not read yet");
        }
    }


};
function addBookToLibrary(myLibrary){
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const Numpages = document.querySelector('#pages');
    const readOrNot = document.querySelector('#read');
    const addBookButton = document.querySelector(".addBookButton");
    addBookButton.addEventListener('click', function(){
        let book = new Book(title.value, author.value, Numpages.value, readOrNot.checked);
        myLibrary.push(book);
        displayBooksOnGrid(myLibrary);
    });
};
function clearInputs(){
    let inputs = document.querySelectorAll("input");
    inputs = Array.from(inputs);
    inputs.forEach(input => {
        if(input.type == "checkbox"){
            input.checked = false;
        }
        else{
            input.value = "";
        }
    });
};
function showPopUp(){
    const showPopUpButton = document.querySelector('#showPopUp');
    const popUpContainer = document.querySelector('.popUpContainer');
    const closePopUpButton = document.querySelector('.closePopUpContainer');
    showPopUpButton.addEventListener('click', function(){
        popUpContainer.classList.toggle('hide');
        clearInputs();
        showPopUpButton.classList.toggle('rotate');
    });
    closePopUpButton.addEventListener('click', function(){
        popUpContainer.classList.toggle('hide');
        clearInputs();
        showPopUpButton.classList.toggle('rotate');
    });
};
function addBookToDom(book){
    const gridContainer = document.querySelector('.gridContainer');
    let BookContainer = document.createElement('div');
    let title = document.createElement('div');
    let author = document.createElement('div');
    let Numpages = document.createElement('div');
    let read = document.createElement('div');
    if(book.read) read.textContent = "Read";
    else read.textContent = "Did not read";
    BookContainer.classList.add("book");
    title.textContent = book.title;
    author.textContent = book.author;
    Numpages.textContent = book.pages;
    BookContainer.append(title, author, Numpages, read);
    gridContainer.prepend(BookContainer);
};
function displayBooksOnGrid(myLibrary){
    removeAllChildNodes(document.querySelector('.gridContainer'));
    myLibrary.forEach(book => { addBookToDom(book);
        }
    );}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};
