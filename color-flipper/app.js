import view from "./view.js";
import lib from "./lib.js";

const colors = [
  "green",
  "red",
  "yellow",
  "gold",
  "silver",
  "violet",
  "maroon",
  "black",
  "white",
  "orange",
];

let currentColor;

const handleBtnClick = () => {
  let color = lib.getRandomColor(colors);
  while (color === currentColor) {
    color = lib.getRandomColor(colors);
  }
  currentColor = color;
  view.setBackgroundColor(currentColor);
  view.setColorText(currentColor);
};

let btn = document.getElementById("btn");
btn.addEventListener("click", handleBtnClick);
