const btnDown = document.querySelector(".projectsDetailComplect__btnDown");
const btnUp = document.querySelector(".projectsDetailComplect__btnUp");
const complectBlock = document.querySelector(".projectsDetailComplect__tableComplect");


if (btnDown) {
    btnDown.addEventListener('click', () => {
        complectBlock.classList.add('projectsDetailComplect__tableComplect__full');
        btnDown.classList.add('projectsDetailComplect__btnHide')
        btnUp.classList.remove('projectsDetailComplect__btnHide')
    })
}

if (btnUp) {
    btnUp.addEventListener('click', () => {
        complectBlock.classList.remove('projectsDetailComplect__tableComplect__full');
        btnDown.classList.remove('projectsDetailComplect__btnHide')
        btnUp.classList.add('projectsDetailComplect__btnHide')
    })
}
