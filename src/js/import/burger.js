let burger = document.querySelector(".burger");
let burger__content = document.querySelector(".burger__content");
let open = document.querySelector(".header__burgerOpen");
let close = document.querySelector(".header__burgerClose");

open.addEventListener("click", () => {
    burger__content.classList.remove("close");
    burger__content.classList.add("open");
    burger.classList.toggle('burger__back');
    close.classList.remove("closeBtn");
    open.classList.add("closeBtn");
});

close.addEventListener("click", () => {
    burger__content.classList.remove("open");
    burger__content.classList.add("close");
    burger.classList.toggle('burger__back');
    open.classList.remove("closeBtn");
    close.classList.add("closeBtn");
});