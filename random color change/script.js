const div = document.getElementById("container");
const btn = document.getElementById("btn");

function colorChange() {
    const color = Math.floor(Math.random() * 1000000);
    return color;
    
}

btn.addEventListener("click", () => {
    div.style.backgroundColor = `#${colorChange()}`;
});
