const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");
const savebtn = document.getElementById("save");
const result = document.getElementById("result");
const history = document.getElementById("history");
let lapno = 0;
let i = 0;
incBtn.addEventListener("click", () => {
  i++;
  result.textContent = i;
  // console.log(i);
});
decBtn.addEventListener("click", () => {
  if (i > 0) {
    i--;
    result.textContent = i;
  }
});
resetBtn.addEventListener("click", () => {
  i = 0;
  result.textContent = i;
});
// savebtn.addEventListener("click", () => {
    
//     const save = document.createElement("li");
//     save.textContent = `Lap ${++lapno} : ${i}`;
//     history.appendChild(save);
//     deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     // save.appendChild(deleteBtn);
//     // deleteBtn.addEventListener("click", () => {
//         //     history.removeChild(save);
//         // });
//         let child = history.lastElementChild
// console.log(child);
// child.appendChild(deleteBtn)
// // child.appendChild(deleteBtn)
//     // let delete = false


// });

// savebtn.addEventListener("click", () => {
//     const save = document.createElement("li")
//     history.appendChild(save)
//     save.setAttribute("id","lastchild")
//     let child = history.lastElementChild
//     // console.log(child)
//     let previous = save.previousElementSibling
//     console.log(previous)
//     previous.removeAttribute("id")
//     const lastchild = document.getElementById("lastchild")
//     // console.log(lastchild)
//     const deleteBtn = document.createElement("button")
//     deleteBtn.textContent = "Delete"
//     lastchild.appendChild(deleteBtn)
//     previous.removeChild(deleteBtn)
// })
savebtn.addEventListener("click",()=>{
  
})