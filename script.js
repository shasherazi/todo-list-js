const input = document.querySelector("input[type=text]");
const submitBtn = document.querySelector("#submit");
const todoListContainer = document.querySelector(".todo-list-container");
const form = document.querySelector("form");
const removeIcon = document.querySelector(".gg-remove");

form.onsubmit = function (e) {
    e.preventDefault();
    addTodoItem(input.value);
}

removeIcon.onclick = function () {
    this.parentNode.parentNode.removeChild(this.parentNode);
}

function createRemoveIcon() {
    const removeIcon = document.createElement("div");
    removeIcon.className = "gg-remove";
    removeIcon.addEventListener("click", e => {
        e.path[1].remove()
    })
    return removeIcon;
}

function createTodoText(item) {
    const todoText = document.createElement("p");
    todoText.className = "todo-text";
    todoText.innerHTML = item;
    return todoText;
}

function createTodoItem(item) {
    const div = document.createElement("div");
    div.className = "todo-list-item";
    div.appendChild(createRemoveIcon());
    div.appendChild(createTodoText(item));
    todoListContainer.appendChild(div);
}

function addTodoItem(item) {
    if (item) {
        createTodoItem(item);
        input.value = "";
    }
}

submitBtn.onclick = function (e) {
    e.preventDefault();
    addTodoItem(input.value);
}