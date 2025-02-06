const input = document.getElementById("age");
const btn = document.getElementById("button");
const message = document.getElementById("result");

function calculateAge(birthDate) {
  const currentDate = new Date();
  const birthYear = new Date(birthDate);
  let age = currentDate.getFullYear() - birthYear.getFullYear();
  const month = currentDate.getMonth() - birthYear.getMonth();
  console.log(age);

  console.log(month);
  if (month < 0 || currentDate.getDate() < birthYear.getDate()) {
    age--;
    return age;
  }
  return age;
}

btn.addEventListener("click", () => {
  const birthDate = input.value.trim();

  if (birthDate == "") {
    alert("Please Enter your Birth Date");
    return;
  }
  const age = calculateAge(birthDate);
  message.textContent = `You are ${age}`;

  input.value = "";
});