
const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("Item-list");
const div = document.querySelector(".container");
div.style.display = "none";
addBtn.addEventListener("click", () => {
  div.style.display = "block";
  const inputValue = input.value.trim();
  if (inputValue === "") {
    alert("Enter your work");
    return;
  }
  const Item = document.createElement("li");
  Item.textContent = inputValue;
  itemList.appendChild(Item);
  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  Item.appendChild(deletebtn);
  deletebtn.addEventListener("click", () => {
    itemList.removeChild(Item);
  });
  input.value = "";
});