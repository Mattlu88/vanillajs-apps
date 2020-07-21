const openModal = () => {
  const modal = document.querySelector(".modal-overlay");
  modal.classList.add("open-modal");
}

const closeModal = () => {
  const modal = document.querySelector(".modal-overlay");
  modal.classList.remove("open-modal");
}

const openBtn = document.querySelector(".open-btn");
openBtn.addEventListener("click", openModal);

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", closeModal);
