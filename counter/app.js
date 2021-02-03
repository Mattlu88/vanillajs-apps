let counter = {
  value: 0,
  increase: function () {
    this.value++;
  },
  decrease: function () {
    this.value--;
  },
  reset: function () {
    this.value = 0;
  },
};

let decreaseBtn = document.querySelector("#decrease");
let resetBtn = document.querySelector("#reset");
let increaseBtn = document.querySelector("#increase");
let span = document.querySelector("#value");

const handleClickDecreaseBtn = () => {
  console.log("decrease btn clicked");
  counter.decrease();
  showCounterValue();
};

const handleClickResetBtn = () => {
  counter.reset();
  showCounterValue();
};

const handleClickIncreaseBtn = () => {
  counter.increase();
  showCounterValue();
};

const showCounterValue = () => {
  span.innerHTML = counter.value;
  if (counter.value === 0) {
    span.style.color = "black";
  }
  if (counter.value < 0) {
    span.style.color = "red";
  }
  if (counter.value > 0) {
    span.style.color = "green";
  }
};

decreaseBtn.addEventListener("click", handleClickDecreaseBtn);
resetBtn.addEventListener("click", handleClickResetBtn);
increaseBtn.addEventListener("click", handleClickIncreaseBtn);
