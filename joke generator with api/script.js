const peraEl = document.getElementById("joke");
const btnEl = document.getElementById("btn");
const URL = "https://api.chucknorris.io/jokes/random"; 

async function getJoke() {
  try{
    const response = await fetch(URL)
    const data = await response.json();
    return data.value;
  } catch (error) {
    throw new Error("failed to fetch joke......");
  }
}
btnEl.addEventListener("click", async() => {
  peraEl.textContent = "fetching a new and latest joke for only you.......";
  try {
    const joke = await getJoke();
    peraEl.textContent = joke;
  } catch (error) {
    peraEl.textContent = error;
  }
});