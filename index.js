const heading = document.getElementById("main-heading");
heading.textContent = "DOM Manipulation";

const para = document.querySelector(".para");
para.innerHTML = "<strong>My journey to JS DOM</strong>"

//changing styles
heading.style.color = "red"
heading.style.fontSize = "12px"

//class and attribute manipulation
heading.classList.add("highlight");
heading.classList.remove("highlight");
heading.classList.toggle("highlight");//add class if absent or remove if present

para.setAttribute("title","hover me")