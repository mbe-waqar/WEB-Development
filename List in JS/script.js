const inputText = document.getElementById("input");
const listContainer = document.getElementById("list");

function addTask() {
    if (inputText.value === '') {
        alert("You must add a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputText.value ="";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);