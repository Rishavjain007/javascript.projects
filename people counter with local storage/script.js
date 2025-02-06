const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");
const savebtn = document.getElementById("save");
const result = document.getElementById("result");
const history = document.getElementById("history");
let lapno = 0;
let counter = 0;

let arr = JSON.parse(localStorage.getItem("laps")) || [];
incBtn.addEventListener("click", () => {
  counter++;
  result.textContent = counter;
});
decBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    result.textContent = counter;
  }
});
resetBtn.addEventListener("click", () => {
  counter = 0;
  result.textContent = counter;
});
savebtn.addEventListener("click", () => {
  arr.push(counter);
  localStorage.setItem("laps", JSON.stringify(arr));
    display();
  });
  function display() {
      history.innerHTML = "";
      arr.forEach((el, index) => {
        const entry = document.createElement("li");
        entry.textContent = `laps ${index + 1}: ${el}`;
        history.appendChild(entry);
        const deletebtn = document.createElement("button");
        deletebtn.textContent = "delete";
        entry.appendChild(deletebtn);
        deletebtn.addEventListener("click", () => {
          history.removeChild(entry);
          arr.splice(index, 1);
          localStorage.setItem("laps", JSON.stringify(arr));
          displayData();
        });
      });
    }
  display();