let burger = document.querySelector(".burger");
let open = document.querySelector(".header__burgerOpen");
let close = document.querySelector(".header__burgerClose");

open.addEventListener("click", () => {
    burger.classList.remove("close");
    burger.classList.add("open");
    close.classList.remove("closeBtn");
    open.classList.add("closeBtn");
});

close.addEventListener("click", () => {
    burger.classList.remove("open");
    burger.classList.add("close");
    open.classList.remove("closeBtn");
    close.classList.add("closeBtn");
});