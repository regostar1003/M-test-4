history.scrollRestoration = "manual";

window.addEventListener("pageshow", () => {
    window.scrollTo(0, 0);
});

const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
    menuBtn.classList.toggle("active");
});