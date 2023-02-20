
function openForm() {
   document.getElementById("popupForm").style.display = "block";
    console.log("you opened the form")
}


function closeForm(){
    document.getElementById("popupForm").style.display = "none";
    console.log("the form is closed")
}
const books = []

let bookCards = document.getElementById("book-item");

let bookList = [
    {
        id: 1,
        title: "The Catcher and the Rye",
        author: "J.D. Salinger",
        pages: 232,
        category: "Classic",
    },
    {
        id:2, 
        title: "Pretty Things",
        author: "Janelle Brown",
        pages: 612,
        category: "Suspense"
    },
    {
        id:3,
        title: "Gone Girl",
        author: "Gillian Flynn",
        pages: 420,
        category:"Suspense"
    }
]


function markAsRead (){
    console.log('this book has been read')
    document.getElementById("book-item").classList.add('myClass');
};

function removeBook(){
    console.log("This book will no longer appear on your shelf")
    document.getElementById("book-item").style.display = "none";
    document.getElementById("bookMessage").innerHTML = "Hmm, this title has been removed."
    //document.getElementById("book-item").innerHTML = "hmm, this book seems to be missing";
};

const sectionCenter = document.querySelector('.bookshelf');

window.addEventListener('DOMContentLoaded', function(){
    displayBookItems(bookList);

    function displayBookItems (bookItems){
        let displayBooks = bookItems.map(function(item){
            return `<article class="book ${item.id}" id="book-item">
            <h2 id="book-title">${item.title}</h2>
            <h4 class= 'italic' id="author">${item.author}</h4>
            <h4 id="page-count">${item.pages}</h4>
            <h6 id="category">${item.category}</h6>
            <button class= 'btn read'id="read" onclick="markAsRead()">Have you read this book?</button>
       <br><br> <button class = 'btn remove' id="remove" onclick="removeBook()">Remove Book from Shelf</button>
            </article>`;
            
        });
        readBtn = document.createElement("button");
        readBtn.innerText = "I've read this book";
        document.body.appendChild(readBtn);
        readBtn.classList.add("btn");
        readBtn.type = "button";
        readBtn.addEventListener("click", () => {
            console.log('this book has been read')    
            document.getElementById("book-item").classList.add('myClass');}
            
        );

        displayBooks = displayBooks.join(" ")
        sectionCenter.innerHTML = displayBooks;
    }
})


