//accessing elements
const heading = document.getElementById("main-heading");
const para = document.querySelector(".para");
const button = document.querySelector("button");

//changing contents
heading.textContent = "DOM Manipulation";
para.innerHTML = "<strong>My journey to JS DOM</strong>"

//changing styles
heading.style.color = "red"
heading.style.fontSize = "12px"

//class and attribute manipulation
heading.classList.add("highlight");
heading.classList.remove("highlight");
heading.classList.toggle("highlight");//add class if absent or remove if present

para.setAttribute("title","hover me")

//event listeners (the real power)
button.addEventListener('click', ()=>{
    alert("button was clicked")
})

//creating, appending and removing new elements
const newDiv = document.createElement("div")
newDiv.textContent = "I'm new here";
// document.body.appendChild(newDiv)
//or insert before or after a specific node
document.body.insertBefore(newDiv,para);
//remove the newly created element 
newDiv.remove();