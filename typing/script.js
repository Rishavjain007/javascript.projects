const pera = document.getElementById('pera');
const arr = ["Hello, world!", "Welcome to the typing animation.", "Enjoy your stay!"];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < arr[textIndex].length) {
        pera.textContent += arr[textIndex][charIndex];
        charIndex++;
        setTimeout(type, 100);
    } else {
        charIndex = 0;
        textIndex++;
        if (textIndex < arr.length) {
            setTimeout(() => {
                pera.textContent = '';
                // textIndex = 0
                // charIndex = 0;
                type();
            }, 1000);
        }
    }
}

type();


// setInterval(()=>{
//     type();
// },1000)
// document.addEventListener("DOMContentLoaded" , type);
