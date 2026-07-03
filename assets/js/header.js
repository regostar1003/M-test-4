async function loadComponent(id, file){

    const response = await fetch(file);
    const html = await response.text();

    document.getElementById(id).innerHTML = html;

    initMenu();
}

function initMenu(){

    const menuBtn = document.getElementById("menu-btn");
    const sideMenu = document.getElementById("side-menu");

    // side-menu が無いページでもエラーにならない
    if(!menuBtn || !sideMenu) return;

    menuBtn.addEventListener("click", () => {

        menuBtn.classList.toggle("active");
        sideMenu.classList.toggle("open");

    });
}

loadComponent("header", "./common/header.html");