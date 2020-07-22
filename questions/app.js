
const qaContainers = document.querySelectorAll(".qa-container");

qaContainers.forEach((question) => {
  const answerBtn = question.querySelector(".answer-btn");
  answerBtn.addEventListener("click", () => handleClickAnswerBtn(question));

})

const handleClickAnswerBtn = (question) => {
  qaContainers.forEach((item) => {
    if (item !== question) {
      item.classList.remove("show-answer");
    }
  })
  
  question.classList.toggle("show-answer");
}