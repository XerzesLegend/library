let myLibrary = [];
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


}
function addBookToLibrary(){}



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
    });
    closePopUpButton.addEventListener('click', function(){
        popUpContainer.classList.toggle('hide');
    });
};

