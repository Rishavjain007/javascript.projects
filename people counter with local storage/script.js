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
savebtn.addEventListener("click",()=>{
    
})