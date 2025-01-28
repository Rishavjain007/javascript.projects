const peraEl = document.getElementById("joke");
const btnEl = document.getElementById("btn");

function getJoke() {
  const jokes = [
    "What does a storm cloud wear under his raincoat? Thunderwear.",
    "What do kids play when their mom is using the phone? Bored games.",
    "What do you call an ant who fights crime? A vigilANTe!",
    "Why are snails slow? Because they're carrying a house on their back.",
    "What's the smartest insect? A spelling bee!",
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      const randomJoke = jokes[randomIndex];

      if (randomJoke) {
        resolve(randomJoke);
      } else {
        reject("failed to fetch joke......");
      }
    }, 2000);
  });
}

btnEl.addEventListener("click", () => {
  peraEl.textContent = "fetching a new and latest joke for only you.......😁😁";
  getJoke()
    .then((joke) => {
      peraEl.textContent = joke;
      localStorage.setItem("latestJoke", joke);
    })
    .catch((error) => {
      peraEl.textContent = error;
    });
});