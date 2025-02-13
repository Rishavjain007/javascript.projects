const container = document.getElementById('container');
const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
    display()
})

document.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        display()
    }
})


function randomColor() {
    let color = '#'
    let letters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function display() {
    container.innerHTML = ""
    for (let index = 0; index < 10; index++) {
        let color = randomColor()
        let div = document.createElement('div')
        div.style.backgroundColor = color
        container.appendChild(div)   
        div.className = "div"   
        div.textContent = color  
    }
}