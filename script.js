// alert("Site under construction. Launches on 22 March. Stay Safe and Healthy")
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


const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 1400,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
    //   on: {
    //     autoplayTimeLeft(s, time, progress) {
    //       progressCircle.style.setProperty("--progress", 1 - progress);
    //       progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    //     }
    //   }
    });
