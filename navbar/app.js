const addEventListeners = () => {
  const toggleBtn = document.querySelector("#toggle-btn");
  toggleBtn.addEventListener("click", handleToggleBtnClick);
}

const toggleNavList = () => {
  const navList = document.querySelector("#nav-list");
  const showLinks = navList.classList.contains("show-links");
  if (!showLinks) {
    navList.classList.add("show-links");
  } else {
    navList.classList.remove("show-links");
  }
}

const handleToggleBtnClick = () => {
  toggleNavList();
}

window.onload = () => {
  addEventListeners();
}