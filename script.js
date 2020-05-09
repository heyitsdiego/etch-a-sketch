//generateInitialGrid() creates an initial 16x16 div grid
function generateDivGrid () {
  let i;
  for (i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "grid-item");
    document.getElementById("grid-container").appendChild(div);
  let initialDivs =  document.querySelectorAll(".grid-item")
  initialDivs.forEach(function(element) {
    element.addEventListener("mouseover", function() {
    element.style.backgroundColor = "black";
      }); 
    });
  }
}
generateDivGrid();

let button = document.getElementById("button");
button.addEventListener("click", function(){
  let input = prompt("Number of Squares: ");
  resetGrid(input);
});
function resetGrid (input) {
  let userInput = input;
  usertInput = parseInt(userInput);
  height = 80/userInput;
  var i;
  let userSquares = input*input;
  document.querySelectorAll('.grid-item').forEach(el => el.remove());
  for (i = 0; i < userSquares; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "grid-item");
    document.getElementById("grid-container").appendChild(div);
  }
  document.getElementById("grid-container").style.gridTemplateColumns = `repeat(${userInput}, auto)`;
  document.getElementById("grid-container").style.gridTemplateRows = `repeat(${userInput}, ${height}vh)`;
  let divs =  document.querySelectorAll(".grid-item")
divs.forEach(function(element) {
  element.addEventListener("mouseover", function() {
    element.style.backgroundColor = "black";
  }); 
});
}