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

if (priceInput) {
    priceInput[0].addEventListener('input', () => {
        if (priceInput[0].value < 0) {
            priceInput[0].value = 0
        }
        if (priceInput[0].value > 100000000) {
            priceInput[0].value = 100000000
        }
    })

    priceInput[1].addEventListener('input', () => {
        if (priceInput[1].value < 0) {
            priceInput[1].value = 0
        }
        if (priceInput[1].value > 100000000) {
            priceInput[1].value = 100000000
        }
    })
}

if (priceInput2) {
    priceInput2[0].addEventListener('input', () => {
        if (priceInput2[0].value < 0) {
            priceInput2[0].value = 0
        }
        if (priceInput2[0].value > 800) {
            priceInput2[0].value = 800
        }
    })

    priceInput2[1].addEventListener('input', () => {
        if (priceInput2[1].value < 0) {
            priceInput2[1].value = 0
        }
        if (priceInput2[1].value > 800) {
            priceInput2[1].value = 800
        }
    })
}