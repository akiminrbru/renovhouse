// Смотреть еще для проектов 

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

    // Смотреть еще для портфолио

    let portfolioCard = document.querySelectorAll('.portfolioPageMain__card');
    let portfiolBtn = document.querySelector('.portfolioPageMain__button');
    
    for (let i = 5; i < portfolioCard.length ; i++) {
        portfolioCard[i].classList.add('portfolioPageMain__hide')
    }

    let countDPortfolio = 5;

    if (portfiolBtn) {
        portfiolBtn.addEventListener("click", function() {
            countDPortfolio += 2;
            if (countDPortfolio <= portfolioCard.length){
                for (let i = 0; i < countDPortfolio; i++){
                    portfolioCard[i].classList.remove('portfolioPageMain__hide')
                }
            }
    
            if (countDPortfolio >= portfolioCard.length) {
                portfiolBtn.classList.add("portfolioPageMain__hide")
            }
        })
    }
}


// Добавление класса к последнему элементу карточки на странице портфолио


let portfolioCards = document.querySelectorAll(".portfolioPageMain__card");
let indexCard = portfolioCards.length - 1;

for (let i = 0; i < portfolioCards.length ; i++) {
    if (portfolioCards[indexCard].style !== 'none') {
        portfolioCards[indexCard].classList.add('portfolioPageMain__card-last')
    } else {
        indexCard -= 1;
    }
}
