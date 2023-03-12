const winnersView = document.getElementById("winners-container");
const garageView = document.getElementById("garage-container");

const toggleView = () => {
  winnersView.classList.toggle("hidden");
  garageView.classList.toggle("hidden");
};

const winnersBtn = document.getElementById("winnersBtn");
winnersBtn.addEventListener("click", () => {
  toggleView();
});

const garageBtn = document.getElementById("garageBtn");
garageBtn.addEventListener("click", () => {
  toggleView();
});

const main = async () => {};

main();
