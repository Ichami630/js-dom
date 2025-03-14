const heading = document.getElementById("main-heading");
heading.textContent = "DOM Manipulation";

const para = document.querySelector(".para");
para.innerHTML = "<strong>My journey to JS DOM</strong>"

//changing styles
heading.style.color = "red"
heading.style.fontSize = "12px"