
const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("Item-list");

let saveTodo = JSON.parse(localStorage.getItem("ToDos")) || [];

function addItem(inputValue) {
  saveTodo.push(inputValue);
  localStorage.setItem("ToDos", JSON.stringify(saveTodo));
  display();
}

addBtn.addEventListener("click", () => {
  const inputValue = input.value.trim();
  if (inputValue === "") {
    alert("Enter your work");
    return;
  }
  addItem(inputValue);
  input.value = "";
});

function display() {
  itemList.innerHTML = "";

  saveTodo.forEach((item, index) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    li.textContent = item;
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      saveTodo.splice(index, 1);
      localStorage.setItem("ToDos", JSON.stringify(saveTodo));
      display();
    });

    li.appendChild(deleteBtn);
    itemList.appendChild(li);
  });
}

display();
