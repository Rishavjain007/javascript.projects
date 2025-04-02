// let data;

// const fetchData = async () => {
//   try {
//     const response = await fetch("data.json");
//     data = await response.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
// const searchData = () => {
//   const searchValue = document.getElementById("searchBox").value.toLowerCase();
//   const filteredData = data.students.filter((student) =>
//     student.name.toLowerCase().includes(searchValue)
//   );
//   displayData(filteredData);
// };
// const displayData = (filteredData) => {
//   const resultContainer = document.getElementById("resultContainer");
//   resultContainer.innerHTML = "";
//   filteredData.forEach((element) => {
//     const studentDiv = document.createElement("div");
//     studentDiv.innerHTML = `
//        <h1>${element.id}</h1>
//        <h1>${element.name}</h1>
//        <h1>${element.age}</h1>
//        <h1>${element.course}</h1>
//         <p>Skills: ${element.skills.join(", ")}</p>
//       <p>Projects: ${element.projects.join(", ")}</p>
//        `;
//     resultContainer.appendChild(studentDiv);
//   });
// };

// document.getElementById("getDataBtn").addEventListener("click", async () => {
//   await fetchData();
//   searchData();
// });

let data;
const fetchData = async () => {
  try {
    const response = await fetch("data.json");
    data = await response.json();
  } catch (error) {
    console.log("failed to fetch data");
  }
};

const searchData = () => {
  const searchValue = document.getElementById("searchBox").value.toLowerCase();

  const filteredData = data.students.filter((element) =>
    element.name.toLowerCase().includes(searchValue)
  );
  displayData(filteredData);
};

function displayData(filteredData) {
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = "";

  if (filteredData.length === 0) {
    resultContainer.innerHTML = `<p class="no-match">No match found</p>`;
    return;
  }

  const table = document.createElement("table");
  table.className = "student-table";

  // Create table header
  const thead = document.createElement("thead");
  thead.innerHTML = `
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Course</th>
        <th>Skills</th>
        <th>Projects</th>
      </tr>
    `;
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement("tbody");
  filteredData.forEach((element) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.course}</td>
        <td>${element.skills}</td>
        <td>${element.projects}</td>
      `;
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  resultContainer.appendChild(table);
}

document.getElementById("getDataBtn").addEventListener("click", async () => {
  await fetchData();
  searchData();
});
