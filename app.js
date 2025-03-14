const bookList = document.querySelector("#book-list")
const list = document.querySelector("#book-list ul")
const hide = document.querySelector("#hide");
const form = document.querySelector("#add-book");
const search = document.querySelector("#search-books")
const result = document.querySelector(".no-result")

//delete a book
list.addEventListener('click',(e)=>{
    if(e.target.className === "delete"){
        const li = e.target.parentElement;
        // li.remove()
        //or
        if(confirm("Are you sure you want to delete this book?")){
            li.parentNode.removeChild(li);
        }
    }
})

//add book
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name = form.querySelector('input[type="text"]').value

    const li = document.createElement("li")
    const bookName = document.createElement("span")
    const deleteBtn = document.createElement("span")

    bookName.textContent = name;
    deleteBtn.textContent = "delete";
    bookName.classList.add("name")
    deleteBtn.classList.add("delete");

    li.appendChild(bookName)
    li.appendChild(deleteBtn)
    list.appendChild(li)

})

//hide existing books
hide.addEventListener('change',()=>{
    if(hide.checked){
        bookList.style.display = "none"
    }else{
        bookList.style.display = "block"
    }
}) //hide the booklist

//search for books
search.addEventListener('keyup',(e)=>{
    const q = e.target.value.toLowerCase()
    const books = list.getElementsByTagName("li")
    Array.from(books).forEach((book)=>{
        const title = book.firstElementChild.textContent
        if(title.toLowerCase().indexOf(q) != -1){
            book.style.display = "block";
        }else{
            book.style.display = "none"
            result.style.display = "block"

        }
    })
})