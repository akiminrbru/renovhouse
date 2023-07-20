// burger
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

burger.addEventListener('click', () => {
    burger__content.classList.remove("open");
    burger__content.classList.add("close");
    burger.classList.toggle('burger__back');
    open.classList.remove("closeBtn");
    close.classList.add("closeBtn");
})

burger__content.addEventListener('click', (e) => {
    e.stopPropagation();
})

// dynamicAdapt
'use strict';

(function () {
    let originalPositions = [];
    let daElements = document.querySelectorAll('[data-da]');
    let daElementsArray = [];
    let daMatchMedia = [];
    //Заполняем массивы
    if (daElements.length > 0) {
        let number = 0;
        for (let index = 0; index < daElements.length; index++) {
            const daElement = daElements[index];
            const daMove = daElement.getAttribute('data-da');
            if (daMove != '') {
                const daArray = daMove.split(',');
                const daPlace = daArray[1] ? daArray[1].trim() : 'last';
                const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
                const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
                const daDestination = document.querySelector('.' + daArray[0].trim());
                if (daArray.length > 0 && daDestination) {
                    daElement.setAttribute('data-da-index', number);
                    //Заполняем массив первоначальных позиций
                    originalPositions[number] = {
                        parent: daElement.parentNode,
                        index: indexInParent(daElement)
                    };
                    //Заполняем массив элементов
                    daElementsArray[number] = {
                        element: daElement,
                        destination: document.querySelector('.' + daArray[0].trim()),
                        place: daPlace,
                        breakpoint: daBreakpoint,
                        type: daType
                    };
                    number++;
                }
            }
        }
        dynamicAdaptSort(daElementsArray);

        //Создаем события в точке брейкпоинта
        for (let index = 0; index < daElementsArray.length; index++) {
            const el = daElementsArray[index];
            const daBreakpoint = el.breakpoint;
            const daType = el.type;

            daMatchMedia.push(window.matchMedia('(' + daType + '-width: ' + daBreakpoint + 'px)'));
            daMatchMedia[index].addListener(dynamicAdapt);
        }
    }
    //Основная функция
    function dynamicAdapt(e) {
        for (let index = 0; index < daElementsArray.length; index++) {
            const el = daElementsArray[index];
            const daElement = el.element;
            const daDestination = el.destination;
            const daPlace = el.place;
            const daBreakpoint = el.breakpoint;
            const daClassname = '_dynamic_adapt_' + daBreakpoint;

            if (daMatchMedia[index].matches) {
                //Перебрасываем элементы
                if (!daElement.classList.contains(daClassname)) {
                    let actualIndex = indexOfElements(daDestination)[daPlace];
                    if (daPlace === 'first') {
                        actualIndex = indexOfElements(daDestination)[0];
                    } else if (daPlace === 'last') {
                        actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
                    }
                    daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
                    daElement.classList.add(daClassname);
                }
            } else {
                //Возвращаем на место
                if (daElement.classList.contains(daClassname)) {
                    dynamicAdaptBack(daElement);
                    daElement.classList.remove(daClassname);
                }
            }
        }
        customAdapt();
    }

    //Вызов основной функции
    dynamicAdapt();

    //Функция возврата на место
    function dynamicAdaptBack(el) {
        const daIndex = el.getAttribute('data-da-index');
        const originalPlace = originalPositions[daIndex];
        const parentPlace = originalPlace['parent'];
        const indexPlace = originalPlace['index'];
        const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
        parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
    }
    //Функция получения индекса внутри родителя
    function indexInParent(el) {
        var children = Array.prototype.slice.call(el.parentNode.children);
        return children.indexOf(el);
    }
    //Функция получения массива индексов элементов внутри родителя
    function indexOfElements(parent, back) {
        const children = parent.children;
        const childrenArray = [];
        for (let i = 0; i < children.length; i++) {
            const childrenElement = children[i];
            if (back) {
                childrenArray.push(i);
            } else {
                //Исключая перенесенный элемент
                if (childrenElement.getAttribute('data-da') == null) {
                    childrenArray.push(i);
                }
            }
        }
        return childrenArray;
    }
    //Сортировка объекта
    function dynamicAdaptSort(arr) {
        arr.sort(function (a, b) {
            if (a.breakpoint > b.breakpoint) {
                return -1;
            } else {
                return 1;
            }
        });
        arr.sort(function (a, b) {
            if (a.place > b.place) {
                return 1;
            } else {
                return -1;
            }
        });
    }
    //Дополнительные сценарии адаптации
    function customAdapt() {
        //const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
})();

// fullComplect
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

// input 
function getVals() {
    let slides = document.getElementsByClassName("rangeInput");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);

    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) {
        let tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
    }

    let displayElement = document.getElementsByClassName("projectsTop__rangeValues")[0];
    displayElement.innerHTML = "$ " + slide1 + "k - $" + slide2 + "k";
}

window.onload = function () {
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("projectsTop__range-slider");
    for (let x = 0; x < sliderSections.length; x++) {
        let sliders = sliderSections[x].getElementsByTagName("input");

        for (let y = 0; y < sliders.length; y++) {
            if (sliders[y].type === "range") {
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
            }
        }
    }
}

// input range

const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


// input range2

const rangeInput2 = document.querySelectorAll(".range-input2 input"),
    priceInput2 = document.querySelectorAll(".price-input2 input"),
    range2 = document.querySelector(".slider2 .progress2");
let priceGap2 = 0;

priceInput2.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice2 = parseInt(priceInput2[0].value),
            maxPrice2 = parseInt(priceInput2[1].value);

        if ((maxPrice2 - minPrice2 >= priceGap2) && maxPrice2 <= rangeInput2[1].max) {
            if (e.target.className === "input-min2") {
                rangeInput2[0].value = minPrice2;
                range2.style.left = ((minPrice2 / rangeInput2[0].max) * 100) + "%";
            } else {
                rangeInput2[1].value = maxPrice2;
                range2.style.right = 100 - (maxPrice2 / rangeInput2[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput2.forEach(input => {
    input.addEventListener("input", e => {
        let minVal2 = parseInt(rangeInput2[0].value),
            maxVal2 = parseInt(rangeInput2[1].value);

        if ((maxVal2 - minVal2) < priceGap2) {
            if (e.target.className === "range-min2") {
                rangeInput2[0].value = maxVal2 - priceGap2
            } else {
                rangeInput2[1].value = minVal2 + priceGap2;
            }
        } else {
            priceInput2[0].value = minVal2;
            priceInput2[1].value = maxVal2;
            range2.style.left = ((minVal2 / rangeInput2[0].max) * 100) + "%";
            range2.style.right = 100 - (maxVal2 / rangeInput2[1].max) * 100 + "%";
        }
    });
});


// Сброс

let checkList = document.getElementsByClassName('projectsTop__checkbox');
let resetBtn = document.querySelector('.projectsTop__reset-btn');


if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        rangeInput[0].value = 5000000;
        priceInput[0].value = 5000000;
        rangeInput[1].value = 100000000;
        priceInput[1].value = 100000000;

        rangeInput2[0].value = 110;
        priceInput2[0].value = 110;
        rangeInput2[1].value = 800;
        priceInput2[1].value = 800;

        for (let i = 0; i < checkList.length; i++) {
            if (i === 0) {
                checkList[i].checked = true;
            } else {
                checkList[i].checked = false
            }

        }
    })

}

if (priceInput[0]) {
    priceInput[0].addEventListener('input', () => {
        if (priceInput[0].value < 0) {
            priceInput[0].value = 0
        }
        if (priceInput[0].value > 100000000) {
            priceInput[0].value = 100000000
        }
    })
}

if (priceInput[1]) {
    priceInput[1].addEventListener('input', () => {
        if (priceInput[1].value < 0) {
            priceInput[1].value = 0
        }
        if (priceInput[1].value > 100000000) {
            priceInput[1].value = 100000000
        }
    })
}
if (priceInput2[0]) {
    priceInput2[0].addEventListener('input', () => {
        if (priceInput2[0].value < 0) {
            priceInput2[0].value = 0
        }
        if (priceInput2[0].value > 800) {
            priceInput2[0].value = 800
        }
    })
}

if (priceInput2[1]) {
    priceInput2[1].addEventListener('input', () => {
        if (priceInput2[1].value < 0) {
            priceInput2[1].value = 0
        }
        if (priceInput2[1].value > 800) {
            priceInput2[1].value = 800
        }
    })
}

// showFeedback
const feedback = document.querySelector('.feedback');
const feedbackForm = document.querySelector('.feedback__form');

const mainBtn = document.querySelector('.main__btn');
const advantageBtn = document.querySelector('.advantage__btn');

if (mainBtn) {
    mainBtn.addEventListener('click', () => {
        feedback.classList.add('feedback__open')
    })
}

if (advantageBtn) {
    advantageBtn.addEventListener('click', () => {
        feedback.classList.add('feedback__open')
    })
}

if (feedback) {
    feedback.addEventListener('click', () => {
        feedback.classList.remove('feedback__open')
    })
}

if (feedbackForm) {
    feedbackForm.addEventListener('click', (e) => {
        e.stopPropagation();
    })
}
// showImage 
const galleryItem = document.getElementsByClassName("projectsDetailPlan__photo");
const lightBoxContainer = document.createElement("div");
const lightBoxContainerFlex = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContainerFlex.classList.add("lightboxFlex")
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContainerFlex);
lightBoxContainerFlex.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    console.log(1)
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}

for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}

function prevImage() {
    slideImage(-1);
}

function nextImage() {
    slideImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}

lightBoxContainerFlex.addEventListener("click", closeLightBox);

// showMore
window.onload = function () {
    let box = document.querySelectorAll('.projects__card');
    let btn = document.querySelector('.projects__button');

    for (let i = 6; i < box.length; i++) {
        box[i].classList.add('projects__hide')
    }

    let countD = 6;

    if (btn) {
        btn.addEventListener("click", function () {
            countD += 2;
            if (countD <= box.length) {
                for (let i = 0; i < countD; i++) {
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

    for (let i = 5; i < portfolioCard.length; i++) {
        portfolioCard[i].classList.add('portfolioPageMain__hide')
    }

    let countDPortfolio = 5;

    if (portfiolBtn) {
        portfiolBtn.addEventListener("click", function () {
            countDPortfolio += 2;
            if (countDPortfolio <= portfolioCard.length) {
                for (let i = 0; i < countDPortfolio; i++) {
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

for (let i = 0; i < portfolioCards.length; i++) {
    if (portfolioCards[indexCard].style !== 'none') {
        portfolioCards[indexCard].classList.add('portfolioPageMain__card-last')
    } else {
        indexCard -= 1;
    }
}

// showSettings
const btnSettings = document.querySelector('.projectsTop__settings-btn');
const closeBtnSettings = document.querySelector('.projectsTop__close');
const confirmBtn = document.querySelector('.projectsTop__confirm');

const blockSettingsWrapper = document.querySelector('.projectsTop__settings-wrapper');
const blockSettings = document.querySelector('.projectsTop__settings');
const blockSettingsContent = document.querySelector('.projectsTop__settings-content');
const blockSettingTitle = document.querySelector('.projectsTop__title-mobile');


if (btnSettings) {
    btnSettings.addEventListener('click', () => {
        blockSettingsWrapper.classList.add('projectsTop__settings-wrapper-open');
        blockSettingsContent.classList.add('container');
        blockSettings.classList.add('projectsTop__settings-open');
        blockSettingTitle.classList.add('projectsTop__title-mobile-open');
    })
}

if (closeBtnSettings) {
    closeBtnSettings.addEventListener('click', () => {
        blockSettingsWrapper.classList.remove('projectsTop__settings-wrapper-open');
        blockSettingsContent.classList.remove('container');
        blockSettings.classList.remove('projectsTop__settings-open');
        blockSettingTitle.classList.remove('projectsTop__title-mobile-open');
    })
}

if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
        blockSettingsWrapper.classList.remove('projectsTop__settings-wrapper-open');
        blockSettingsContent.classList.remove('container');
        blockSettings.classList.remove('projectsTop__settings-open');
        blockSettingTitle.classList.remove('projectsTop__title-mobile-open');
    })
}

// slider 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 20,
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
});

let bullet = document.querySelectorAll('.swiper-pagination-bullet');

for (let i = 0; i < bullet.length; i++) {
    bullet[i].addEventListener('mouseover', () => {
        bullet[i].click();
    });

    bullet[i].addEventListener('mousedown', () => {
        bullet[i].parentNode.parentNode.parentNode.parentNode.click()
    });
}

// detail

let swiper3 = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 9,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        400: {
            slidesPerView: 3,
            spaceBetween: 9,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 9,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 9,
        },

        1200: {
            slidesPerView: 6,
            spaceBetween: 9,
        },
    },
});

let swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 20,
    thumbs: {
        swiper: swiper3,
    },
    pagination: {
        el: '.swiper-pagination2',
    },
    breakpoints: {
        600: {
            thumbs: {
                swiper: swiper3,
            },
        },
    },
});

const swiperPrev = document.getElementById("swiperPrev");
const swiperNext = document.getElementById("swiperNext");

if (swiperPrev && swiperNext) {
    swiperPrev.addEventListener("click", () => {
        swiper2.slidePrev();
    });
    swiperNext.addEventListener("click", () => {
        swiper2.slideNext();
    });
}

// Слайдер с фото на странице с О компании

const swiper4 = new Swiper('.swiper4', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination4',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-next4',
        prevEl: '.swiper-prev4',
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
        },
    },
});

const swiperPrev4 = document.getElementById("swiper-next4");
const swiperNext4 = document.getElementById("swiper-prev4");

if (swiperPrev4 && swiperNext4) {
    swiperPrev4.addEventListener("click", () => {
        swiper4.slidePrev();
    });
    swiperNext4.addEventListener("click", () => {
        swiper4.slideNext();
    });
}

const swiper5 = new Swiper('.swiper5', {
    direction: 'horizontal',
    spaceBetween: 20,
    slidesPerView: 2,

    pagination: {
        el: '.swiper-pagination5',
        clickable: true,
    },

    breakpoints: {
        600: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 23,
        },
    },
});

const swiper6 = new Swiper('.swiper6', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination6',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-next6',
        prevEl: '.swiper-prev6',
    },
});

const swiperPrev6 = document.getElementById("swiper-next6");
const swiperNext6 = document.getElementById("swiper-prev6");

if (swiperPrev6 && swiperNext6) {
    swiperPrev6.addEventListener("click", () => {
        swiper6.slidePrev();
    });
    swiperNext6.addEventListener("click", () => {
        swiper6.slideNext();
    });
}
// tab
const btn1 = document.getElementById("radio-1");
const btn2 = document.getElementById("radio-2");
const tab1 = document.querySelector('.gallery__images1');
const tab2 = document.querySelector('.gallery__images2');
const input = document.querySelectorAll('.gallery__input');

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('change', () => {

        if (btn1.checked) {
            tab1.style.display = 'flex';
            tab2.style.display = 'none';
        } else if (btn2.checked) {
            tab1.style.display = 'none';
            tab2.style.display = 'flex';
        }
    })
};


let tabNavs = document.querySelectorAll(".nav-tab");
let tabPanes = document.querySelectorAll(".tab-pane");

for (let i = 0; i < tabNavs.length; i++) {
    tabNavs[i].addEventListener("click", function (e) {
        e.preventDefault();
        let activeTabAttr = this.getAttribute("data-tab");

        for (var j = 0; j < tabNavs.length; j++) {
            let contentAttr = tabPanes[j].getAttribute("data-tab-content");

            if (activeTabAttr === contentAttr) {
                tabNavs[j].classList.add("active");
                tabPanes[j].classList.add("active");
            } else {
                tabNavs[j].classList.remove("active");
                tabPanes[j].classList.remove("active");
            }
        }
    });
}

// Этажи

const btn1_2 = document.getElementById("radio-1_2");
const btn2_2 = document.getElementById("radio-2_2");
const tab1_2 = document.querySelector('.projectsDetailPlan__desc-list1');
const tab2_2 = document.querySelector('.projectsDetailPlan__desc-list2');
const input_2 = document.querySelectorAll('.projectsDetailPlan__input');

for (let i = 0; i < input_2.length; i++) {
    input_2[i].addEventListener('change', () => {
        if (btn1_2.checked) {
            tab1_2.style.display = 'block';
            tab2_2.style.display = 'none';
        } else if (btn2_2.checked) {
            tab1_2.style.display = 'none';
            tab2_2.style.display = 'block';
        }
    })
};

// Описание 

const btn1_3 = document.getElementById("radio-1_3");
const btn2_3 = document.getElementById("radio-2_3");
const tab1_3 = document.querySelector('.projectsDetailDesc__desc');
const tab2_3 = document.querySelector('.projectsDetailDesc__charact');
const input_3 = document.querySelectorAll('.projectsDetailDesc__input');

for (let i = 0; i < input_3.length; i++) {
    input_3[i].addEventListener('change', () => {
        if (btn1_3.checked) {
            tab1_3.style.display = 'block';
            tab2_3.style.display = 'none';
        } else if (btn2_3.checked) {
            tab1_3.style.display = 'none';
            tab2_3.style.display = 'block';
        }
    })
};

// Читать далее

const writenext = document.querySelector('.projectsDetailDesc__write-next');
const writeback = document.querySelector('.projectsDetailDesc__write-back');
const textDesc = document.querySelector('.projectsDetailDesc__hidden');

if (writenext) {
    writenext.addEventListener('click', () => {
        writenext.classList.toggle('projectsDetailDesc__hide');
        textDesc.classList.toggle('projectsDetailDesc__hide');
        writeback.classList.toggle('projectsDetailDesc__hide');
    });
}

if (writeback) {
    writeback.addEventListener('click', () => {
        writenext.classList.toggle('projectsDetailDesc__hide');
        textDesc.classList.toggle('projectsDetailDesc__hide');
        writeback.classList.toggle('projectsDetailDesc__hide');
    });
}