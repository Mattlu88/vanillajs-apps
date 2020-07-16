
const toggleSidebar = () => {
  const sidebar = document.querySelector("#sidebar-nav");
  sidebar.classList.toggle("hide-sidebar");
}

const closeSidebar = () => {
  const sidebar = document.querySelector("#sidebar-nav");
  sidebar.classList.add("hide-sidebar");
}

const bindEvent = () => {
  const toggleBtn = document.querySelector(".sidebar-toggle");
  toggleBtn.addEventListener("click", toggleSidebar);

  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", closeSidebar);
}

window.onload = () => {
  bindEvent();
}