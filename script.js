// Color settings functions
function blackBackground(e) {
  e.target.style.backgroundColor = "black";
}

function randomBackground(e) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.backgroundColor = `#${randomColor}`;
}

function shadeBackground(e) {
  const { target } = e;
  switch (target.style.backgroundColor) {
    case "":
      e.target.style.backgroundColor = "#cccccc";
      break;
    case "rgb(204, 204, 204)":
      e.target.style.backgroundColor = "#999999";
      break;
    case "rgb(153, 153, 153)":
      e.target.style.backgroundColor = "#666666";
      break;
    case "rgb(102, 102, 102)":
      e.target.style.backgroundColor = "#323232";
      break;
    case "rgb(50, 50, 50)":
      e.target.style.backgroundColor = "#000000";
      break;
    default:
  }
}

function updateEventListener(e) {
  const eventHandlerName = e.target.value;
  const gridDivs = document.querySelectorAll(".grid-item");
  switch (eventHandlerName) {
    case "black":
      gridDivs.forEach((div) => {
        div.removeEventListener("mouseover", randomBackground);
        div.removeEventListener("mouseover", shadeBackground);
        div.addEventListener("mouseover", blackBackground);
      });
      break;
    case "random":
      gridDivs.forEach((div) => {
        div.removeEventListener("mouseover", blackBackground);
        div.removeEventListener("mouseover", shadeBackground);
        div.addEventListener("mouseover", randomBackground);
      });
      break;
    case "shade":
      gridDivs.forEach((div) => {
        div.removeEventListener("mouseover", blackBackground);
        div.removeEventListener("mouseover", randomBackground);
        div.addEventListener("mouseover", shadeBackground);
      });
      break;
    default:
  }
}

// Grid functions
function renderInitialGridDivs() {
  for (let i = 0; i < 256; i += 1) {
    const div = document.createElement("div");
    div.setAttribute("class", "grid-item");
    document.getElementById("grid-container").appendChild(div);
    const initialDivs = document.querySelectorAll(".grid-item");
    initialDivs.forEach((element) => {
      element.addEventListener("mouseover", blackBackground);
    });
  }
}

function clearGrid() {
  const gridDivs = document.querySelectorAll(".grid-item");
  gridDivs.forEach((div) => {
    div.style.backgroundColor = "";
  });
}

function setNewGrid(input) {
  if (input === null) return;
  input = parseInt(input);
  const userSquares = input * input;
  document.querySelectorAll(".grid-item").forEach((el) => el.remove());
  for (let i = 0; i < userSquares; i += 1) {
    const div = document.createElement("div");
    div.setAttribute("class", "grid-item");
    document.getElementById("grid-container").appendChild(div);
  }
  document.getElementById(
    "grid-container"
  ).style.gridTemplateColumns = `repeat(${input}, auto)`;
  document.getElementById(
    "grid-container"
  ).style.gridTemplateRows = `repeat(${input}, auto`;
  const divs = document.querySelectorAll(".grid-item");
  divs.forEach((element) => {
    element.addEventListener("mouseover", blackBackground);
  });
}

function recieveUserInput() {
  const userInput = prompt("Number of Squares: ");
  setNewGrid(userInput);
}

function toggleButtonActiveStyle(e) {
  const { target } = e;
  const colorSettingsButtons = document.querySelectorAll(
    ".color-settings-button"
  );
  colorSettingsButtons.forEach((button) => {
    button.classList.remove("button-active-style");
  });
  target.classList.add("button-active-style");
}
// DOM methods
const newGridButton = document.getElementById("new-grid");
newGridButton.addEventListener("click", recieveUserInput);

const clearGridButton = document.getElementById("clear-grid");
clearGridButton.addEventListener("click", clearGrid);

const randomColorButton = document.getElementById("random-color-button");
randomColorButton.addEventListener("click", updateEventListener);
randomColorButton.addEventListener("click", toggleButtonActiveStyle);

const blackColorButton = document.getElementById("black-color-button");
blackColorButton.addEventListener("click", updateEventListener);
blackColorButton.addEventListener("click", toggleButtonActiveStyle);

const shadeInButton = document.getElementById("shade-in-button");
shadeInButton.addEventListener("click", updateEventListener);
shadeInButton.addEventListener("click", toggleButtonActiveStyle);

// Render initial grid
renderInitialGridDivs();
