const imgEl = document.getElementById("dogImage");
const btnEl = document.getElementById("btn");

function randomImg() {
  return new Promise((resolve, reject) => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
        console.log("response recevide:", response)
        // if (!response.ok) {
        //     reject("Failed to fetch the dog image. Status: " + response.status)
        // }
        return response.json()
    })
    .then((data)=>{
        resolve(data)
    })
    .catch((error)=>{
        reject(error)
    })
  });
}

btnEl.addEventListener("click", () => {
  randomImg()
  .then((data)=>{
    console.log("data fetching from API:" , data)
    imgEl.src = data.message
  })
});
