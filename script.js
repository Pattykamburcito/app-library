//Array of books 

const myBooks = [
    {title:"Harry Potter", author: "J.K Rowling", numPages: 330, hasRead:false},
    {title:"Love Poems", author:"Pablo Neruda", numPages: 170, hasRead:true},
    {title:"The Hunger Games", author:"Suzanne Collins", numPages: 390, hasRead: false},
    {title:"Pride & Predijuce", author:"Jane Austin", numPages:401, hasRead:true}
];


function Book(title, author, numPages, hasRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.hasRead = hasRead;
}


//function to display books on the page

function displayBooks(){
    const bookContainer = document.getElementById("books-container");

    bookContainer.innerHTML = ""; //clear existing content

    myBooks.forEach(myBooks =>{
     const bookDiv = document.createElement("div");//loop through the array of books
     bookDiv.classList.add("card");   


//generate HTML content for the book
const bookInfo = `
<h2>${myBooks.title}</h2>
<p>Author: ${myBooks.author}</p>
<p>Pages: ${myBooks.numPages}</p>
<p>Read: ${myBooks.hasRead ?  'Read' : 'Not Read'}</p>
`;

bookDiv.innerHTML = bookInfo; //set the HTML content of the book

bookContainer.appendChild(bookDiv); // Append the book div to the book container

})
}

displayBooks();

//function to display action for adding new book

function displayAddBook(){
    const modal= document.getElementById("add-book");
    modal.style.display = "block";

    //close the modal when clicking on the close button
    const closeButton = document.getElementsByClassName("close")[0];
    closeButton.onclick = function(){
        modal.style.display - "none";
    }

    //close the modal when clicking outside the of it
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none"
        }
    }
}

//function to handle form submission for adding new book

function addNewBook(event){
    event.preventDefault();//prevent default from submission behavior

    //get form input values

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const numPages = document.getElementById("numPages").value;
    const hasRead = document.getElementById("hasRead").checked;

    //create new book object
    const newBook = {title, author, numPages, hasRead};

    //here you can add logic to handle adding the new book to your library (e.j "updating the UI, Saving to storage, etc")
   console.log("New Book Details:", newBook);
   
   //close modal

   const modal = document.getElementById("add-book");
   modal.style.display = "none";
}

//Event listener for New Book button

const newBookButton = document.getElementById("new-book-button");
newBookButton.addEventListener("click", displayAddBook);

//event listener for form submission

const newBookForm = document.getElementById("new-book-form");
newBookForm.addEventListener("submit", addNewBook);

