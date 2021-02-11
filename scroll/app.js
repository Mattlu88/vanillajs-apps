const menuBtn = document.querySelector(".menu-btn");
const menuLists = document.querySelectorAll(".menu-list");
const goTopBtn = document.getElementById("go-to-top");

const toggleMenu = () => {
  const nav = document.querySelector(".menu");
  nav.classList.toggle("show-menu");

  const menuIcon = menuBtn.querySelector(".fas");
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
};

const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const toggleGoTopBtn = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
};

menuBtn.addEventListener("click", toggleMenu);
//menuLists.forEach((li) => li.addEventListener("click", toggleMenu));
goTopBtn.addEventListener("click", scrollToTop);

window.onscroll = () => {
  toggleGoTopBtn();
};
