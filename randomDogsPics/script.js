// ------------------------------------------------------------------------
// dog Image generatoe using promise
// ------------------------------------------------------------------------



// const container = document.querySelector(".container");
// const btn = document.getElementById("btn");
// const errorEl = document.getElementById("errmessage");
// const URL = "https://dog.ceo/apil/breeds/image/random";
// function fetchDogImage(num) {
//     return new Promise((resolve, reject) => {
//         const response = fetch(`${URL}/${num}`);
//         response
//         .then((response) => {
//             const data = response.json();
//             return data;
//         })
//         .then((data) => {
//             resolve(data);
//         })
//         .catch(() => {
//             reject("failed to load image");
//         });
//     });
// }
// btn.addEventListener("click", () => {
//     fetchDogImage(10)
//     .then((data) => {
//         data.message.forEach((el) => {
//             const img = document.createElement("img");
//             img.src = el;
//             container.appendChild(img);
//         });
//     })
//     .catch((error) => {
//         // errorEl.textContent = "failed to load image"
//         errorEl.style.color = "red";
//         errorEl.textContent = error;
//         console.log(error);
//     });
// });





// ------------------------------------------------------------------------
// dog Image generatoe using async await
// ------------------------------------------------------------------------
const container = document.querySelector(".container");
const btn = document.getElementById("btn");
const errorEl = document.getElementById("errmessage");
const URL = "https://dog.ceo/api/breeds/image/random";
async function fetchDogImage(num) {
    try {
        const response = await fetch(`${URL}/${num}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("failed to load image");
    }
}   
btn.addEventListener("click", async () => {
    try {
        const data = await fetchDogImage(10);
        data.message.forEach((el) => {
            const img = document.createElement("img");
            img.src = el;
            container.appendChild(img);
        });
    } catch (error) {
        errorEl.style.color = "red";
        errorEl.textContent = error;
        console.log(error);
    }
});