const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("sec");
const millisecondEl = document.getElementById("millisec");
const saveitemEl = document.getElementById("list");

let timer;
let isRunning = false;
let intervel;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

document.getElementById("Start").addEventListener("click", () => {
  if (!isRunning) {
    intervel = setInterval(timeCheck, 10);
    isRunning = true;
  }
});
document.getElementById("Stop").addEventListener("click", () => {
  clearInterval(intervel);
  isRunning = false;
});
document.getElementById("Reset").addEventListener("click", () => {
  minutes = seconds = milliseconds = 0;
  clearInterval(intervel);
  displayTimer();
  isRunning = false;
});
document.getElementById("Save").addEventListener("click", () => {
  let saveitem = JSON.parse(localStorage.getItem("saveitem")) || [];
  //    console.log(saveitem);
  saveitem.push(
    `${formateTime(minutes)}:${formateTime(seconds)}:${formateTime(
      milliseconds
    )}`
  );
  localStorage.setItem("saveitem", JSON.stringify(saveitem));
  listItem();
});
function timeCheck(params) {
  milliseconds++;
  // console.log(milliseconds);
  if (milliseconds >= 100) {
    seconds++;
    milliseconds = 0;
  }
  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }
  displayTimer();
}

function displayTimer() {
  minuteEl.textContent = formateTime(minutes);
  secondEl.textContent = formateTime(seconds);
  millisecondEl.textContent = formateTime(milliseconds);
}
function formateTime(time) {
  return time < 10 ? `0${time}` : time;
}
function listItem() {
  let saveitem = JSON.parse(localStorage.getItem("saveitem")) || [];
  saveitemEl.innerHTML = "";
  saveitem.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = item;
    saveitemEl.appendChild(li);
    let deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    li.appendChild(deletebtn);
    deletebtn.addEventListener("click", () => {
      deleteItem(index);
    });
  });
}

function deleteItem(index) {
  let saveitem = JSON.parse(localStorage.getItem("saveitem")) || [];
  saveitem.splice(index, 1);
  console.log(saveitem);
  localStorage.setItem("saveitem", JSON.stringify(saveitem));
  listItem();
}

listItem();
