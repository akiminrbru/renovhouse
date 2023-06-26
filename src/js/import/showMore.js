window.onload = function () {
    let box = document.querySelectorAll('.projects__card');
    let btn = document.querySelector('.projects__button');
    
    for (let i = 6; i < box.length ; i++) {
        box[i].classList.add('projects__hide')
    }

    let countD = 6;

    if (btn) {
        btn.addEventListener("click", function() {
            countD += 2;
            if (countD <= box.length){
                for (let i = 0; i < countD; i++){
                    box[i].classList.remove('projects__hide')
                }
            }
    
            if (countD >= box.length) {
                btn.classList.add("projects__hide")
            }
        })
    }
}