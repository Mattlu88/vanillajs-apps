import view from "./view.js";
import lib from "./lib.js"

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let currentColor;

const handleBtnClick = () => {
  let hexArr = [];
  while (hexArr.length < 6) {
    hexArr.push(lib.getRandomColor(hex));
  }
  let color = '#' + hexArr.join("");
  while (color === currentColor) {
    color = lib.getRandomColor(colors);
  }
  currentColor = color; 
  view.setBackgroundColor(currentColor);
  view.setColorText(currentColor);
}

window.onload = () => {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", handleBtnClick);
}