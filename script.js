alert("Site under construction. Launches on 22 March. Stay Safe and Healthy")
const menuBar = document.querySelector(".menu-bar");
const menuClose = document.querySelector(".menu-close");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu ul li a");
console.log(menuItems);

menuBar.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBar.classList.toggle("active");
    menuClose.classList.toggle("active");
});

menuClose.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBar.classList.toggle("active");
    menuClose.classList.toggle("active");
});

menuItems.forEach((item) =>
    item.addEventListener("click", () => {
        menu.classList.toggle("active");
        menuBar.classList.toggle("active");
        menuClose.classList.toggle("active");
    })
);
