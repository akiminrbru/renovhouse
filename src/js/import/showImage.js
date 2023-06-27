const plan1 = document.querySelector(".modal-photo1");
const plan2 = document.querySelector(".modal-photo2");

const btnPlan1 = document.querySelector(".projectsDetailPlan__photo-btn1");
const btnPlan2 = document.querySelector(".projectsDetailPlan__photo-btn2");

const btnClose1 = document.querySelector(".modal-photo-close1");
const btnClose2 = document.querySelector(".modal-photo-close2");


if (btnPlan1) {
    btnPlan1.addEventListener('click', () => {
        plan1.classList.add('modal-photo-hide1');
        
    })
}

if (btnPlan2) {
    btnPlan2.addEventListener('click', () => {
        plan2.classList.add('modal-photo-hide2');
    })
}

if (btnClose1) {
    btnClose1.addEventListener('click', () => {
        plan1.classList.remove('modal-photo-hide1');
    })
}

if (btnClose2) {
    btnClose2.addEventListener('click', () => {
        plan2.classList.remove('modal-photo-hide2');
    })
}

