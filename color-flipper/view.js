
const setBackgroundColor = (color) => {
  let container = document.getElementsByTagName("main")[0];
  container.style.backgroundColor = color;
}

const setColorText = (color) => {
  let colorSpan = document.getElementsByClassName("color")[0];
  colorSpan.innerHTML = color; 
}


export default {
  setBackgroundColor,
  setColorText,
};
