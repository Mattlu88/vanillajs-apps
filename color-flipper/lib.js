
const randomNum = (min, max) => {
  return Math.floor(Math.random() * max + min);
}

const getRandomColor = (colors) => {
  return colors[randomNum(1, colors.length) - 1];
}

export default {
  getRandomColor,
}