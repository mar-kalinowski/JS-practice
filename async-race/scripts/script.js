const body = document.querySelector("body");

const header = document.createElement("header");
header.classList.add("header");

const headerTitle = document.createElement("h1");
headerTitle.classList.add("header-title");
headerTitle.textContent = "Async-race";
header.appendChild(headerTitle);

const garageSection = document.createElement("div");
garageSection.classList.add("garage");

const garageHeading = document.createElement("h2");
garageHeading.classList.add("heading");
garageHeading.textContent = "Garage";

const garagePage = document.createElement("p");
garagePage.classList.add("garage_page");

const garagePageNo = document.createElement("span");
garagePageNo.classList.add("garage_page-no");
garagePageNo.textContent = "1";

const carListElement = document.createElement("ul");
carListElement.classList.add("car-list");

const carElement = document.createElement("li");
carElement.classList.add("car-element");

const carElementInfo = document.createElement("div");
carElementInfo.classList.add("car-element__info");

const carImg = document.createElement("img");
carImg.classList.add("car-element__img");
carImg.src = "./assets/img/sports-car.png";

const carName = document.createElement("p");
carName.classList.add("car-element__name");

const winnersList = document.createElement("ul");
winnersList.classList.add("winners-list");

const winnerElement = document.createElement("li");
winnerElement.classList.add("winner-element");

const startRaceBtn = document.createElement("button");
startRaceBtn.classList.add("start-race-btn");
startRaceBtn.textContent = "Race";
const resetRaceBtn = document.createElement("button");
resetRaceBtn.classList.add("reset-race-btn");
resetRaceBtn.textContent = "Stop";

body.appendChild(header);
body.appendChild(garageView);
body.appendChild(winnersView);
garageView.appendChild(carListElement);
winnersView.appendChild(winnersList);
// garageView.appendChild(createCarBtn);

/* carListElement.appendChild(carElement);
carElementInfo.appendChild(carBrand, carModel);
carElement.append(carElementInfo, deleteCarBtn, changeCarColorBtn); */

const getWinnersList = async () => {
  const response = await fetch(`${URL}/winners`);
  const data = await response.json();
  console.log(data);
  return data;
};

const renderWinnersList = async () => {
  const winnersList = await getWinnersList();
  const winnersListElement = document.querySelector(".winners-list");
  winnersList.forEach((winner) => {
    console.log(winner);
    const winnerElement = document.createElement("li");
    winnerElement.classList.add("winner-element");
    winnerElement.innerHTML = `
      <div class="winner-element__info">
        <div class="winner-element__name">${winner.id}</div>
        <div class="winner-element__wins">${winner.wins}</div>
        <div class="winner-element__time">${winner.time}</div>
      </div>
    `;
    winnersListElement.appendChild(winnerElement);
  });
};

// renderWinnersList();

const startEngine = async (id, status) => {
  fetch(`${URL}/engine?id=${id}&status=${status}`, {
    method: "PATCH",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

startEngine(2, "started");
startEngine(3, "started");
startEngine(4, "started");
startEngine(1, "started");

const stopEngine = async (id, status) => {
  fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
    method: "PATCH",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const switchEngineToDriveMode = async (id, status) => {
  fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
    method: "PATCH",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
