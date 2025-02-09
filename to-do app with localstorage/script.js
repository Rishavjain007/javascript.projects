const input = document.getElementById("input");
const btn = document.getElementById("addBtn");
const list = document.getElementById("Item-list");
let arr = JSON.parse(localStorage.getItem("tasks"))||[]

document.addEventListener("keydown",(e)=>{
  console.log(e.key);
  if (e.key === "Enter") {
    arr.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(arr));
    display(); 
  }
})
btn.addEventListener("click", () => {
  arr.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(arr));
  display();
});
function display() {
    list.innerHTML = ""
    arr.forEach((el, index) => {
      const entry = document.createElement("li")
      entry.textContent = el;
      list.appendChild(entry);
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      entry.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", () => {
        list.removeChild(entry);
        arr.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(arr));
        display();
      });
    });
}

display();