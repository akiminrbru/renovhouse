// Табы

const caclContents = document.getElementsByClassName("calculator__settings-wrapper");
const caclSteps = document.getElementsByClassName("calculator__step");

const calcPrev = document.querySelector('.calculator__prev');
const calcNext = document.querySelector('.calculator__next');

let currentContent;

if (caclSteps) {
    for (let i = 0; i < caclSteps.length; i ++) {
        caclSteps[i].addEventListener('click', (e) => {

            // кнопки

            if (e.target.id == 8) {
                calcNext.classList.add("calculator__next_hide");
            } else {
                calcNext.classList.remove("calculator__next_hide");
            }

            if (e.target.id == 1) {
                calcPrev.classList.add("calculator__prev_hide");
            } else {
                calcPrev.classList.remove("calculator__prev_hide");
            }

            // не кнопки

            for (let i = 0; i < caclSteps.length; i ++) {
                caclSteps[i].classList.remove("calculator__step_active");
            }

            for (let i = 0; i < e.target.id; i ++) {
                caclSteps[i].classList.add("calculator__step_active");
            }

            for (let j = 0; j < caclContents.length; j ++) {
                if (e.target.id === caclContents[j].id) {
                    caclContents[j].classList.add("calculator__settings-wrapper_active")
                } else {
                    caclContents[j].classList.remove("calculator__settings-wrapper_active")
                }
            }
        })
    }
}

// назад

if (calcPrev) {
    calcPrev.addEventListener('click', () => {
        currentContent = document.querySelector('.calculator__settings-wrapper_active');
        currentId = currentContent.id - 1; 

        calcNext.classList.remove("calculator__next_hide");

        if (currentContent.id == 2) {
            calcPrev.classList.add("calculator__prev_hide");
        } else {
            calcPrev.classList.remove("calculator__prev_hide");
        }

        for (let i = 0; i < caclContents.length; i ++) {
            caclContents[i].classList.remove("calculator__settings-wrapper_active")
        }
        caclContents[currentId - 1].classList.add('calculator__settings-wrapper_active');

        for (let i = 0; i < caclSteps.length; i ++) {
            caclSteps[i].classList.remove("calculator__step_active");
        }

        for (let i = 0; i < currentId; i ++) {
            caclSteps[i].classList.add("calculator__step_active");
        }
        
    })
}

window.onload = () => {
    currentContent = document.querySelector('.calculator__settings-wrapper_active');
    currentId = currentContent.id - 1; 

    if (currentContent.id == 1) {
        calcPrev.classList.add("calculator__prev_hide");
    } else {
        calcPrev.classList.remove("calculator__prev_hide");
    }
}

// вперед

if (calcNext) {
    calcNext.addEventListener('click', () => {
        currentContent = document.querySelector('.calculator__settings-wrapper_active');
        currentId = currentContent.id - 1; 

        console.log(currentContent.id)

        // calcPrev.classList.remove("calculator__prev_hide");

        if (currentContent.id == 7) {
            calcNext.classList.add("calculator__next_hide");
        } else {
            calcNext.classList.remove("calculator__next_hide");
        }

        if (currentContent.id == 0) {
            calcPrev.classList.add("calculator__prev_hide");
        } else {
            calcPrev.classList.remove("calculator__prev_hide");
        }

        for (let i = 0; i < caclContents.length; i ++) {
            caclContents[i].classList.remove("calculator__settings-wrapper_active")
        }
        caclContents[currentId + 1].classList.add('calculator__settings-wrapper_active');

        for (let i = 0; i < caclSteps.length; i ++) {
            caclSteps[i].classList.remove("calculator__step_active");
        }

        for (let i = 0; i < currentId + 2; i ++) {
            caclSteps[i].classList.add("calculator__step_active");
        }
        
    })
}

//input 3

const rangeInput3 = document.querySelectorAll(".range-input3 input"),
priceInput3 = document.querySelectorAll(".price-input3 input"),
range3 = document.querySelector(".slider3 .progress3");
let priceGap3 = 0;

priceInput3.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput3[0].value),
        maxPrice = parseInt(priceInput3[1].value);
        
        if((maxPrice - minPrice >= priceGap3) && maxPrice <= rangeInput3[1].max){
            if(e.target.className === "input-min"){
                rangeInput3[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput3[0].max) * 100) + "%";
            }else{
                rangeInput3[1].value = maxPrice;
                range3.style.right = 100 - (maxPrice / rangeInput3[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput3.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput3[0].value),
        maxVal = parseInt(rangeInput3[1].value);

        if((maxVal - minVal) < priceGap3){
            if(e.target.className === "range-min"){
                rangeInput3[0].value = maxVal - priceGap3
            }else{
                rangeInput3[1].value = minVal + priceGap3;
            }
        }else{
            priceInput3[0].value = minVal;
            priceInput3[1].value = maxVal;
            range3.style.left = ((minVal / rangeInput3[0].max) * 100) + "%";
            range3.style.right = 100 - (maxVal / rangeInput3[1].max) * 100 + "%";
        }
    });
});

// Сброс

// let checkList = document.getElementsByClassName('projectsTop__checkbox');
// let resetBtn = document.querySelector('.projectsTop__reset-btn');


// if (resetBtn) {
//     resetBtn.addEventListener('click', () => {
//         rangeInput[0].value = 5000000;
//         priceInput[0].value = 5000000;
//         rangeInput[1].value = 100000000;
//         priceInput[1].value = 100000000;
    
//         rangeInput2[0].value = 110;
//         priceInput2[0].value = 110;
//         rangeInput2[1].value = 800;
//         priceInput2[1].value = 800;
    
//         for (let i = 0; i < checkList.length; i++) {
//             if (i === 0) {
//                 checkList[i].checked = true; 
//             } else {
//                 checkList[i].checked = false 
//             }
              
//         }
//     })
    
// }


// 1. Фундамент


//1
const elSelectCustom = document.getElementsByClassName("js-selectCustom")[0];
const elSelectCustomValue = elSelectCustom.children[0];
const elSelectCustomOptions = elSelectCustom.children[1];
const defaultLabel = elSelectCustomValue.getAttribute("data-value");

// Listen for each custom option click
Array.from(elSelectCustomOptions.children).forEach(function (elOption) {
  elOption.addEventListener("click", (e) => {
    // Update custom select text too
    elSelectCustomValue.textContent = e.target.textContent;
    // Close select
    elSelectCustom.classList.remove("isActive");
  });
});

// Toggle select on label click
elSelectCustomValue.addEventListener("click", (e) => {
  elSelectCustom.classList.toggle("isActive");
});

// close the custom select when clicking outside.
document.addEventListener("click", (e) => {
  const didClickedOutside = !elSelectCustom.contains(e.target);
  if (didClickedOutside) {
    elSelectCustom.classList.remove("isActive");
  }
});

//2

const elSelectCustom2 = document.getElementsByClassName("js-selectCustom2")[0];
const elSelectCustomValue2 = elSelectCustom2.children[0];
const elSelectCustomOptions2 = elSelectCustom2.children[1];
const defaultLabel2 = elSelectCustomValue2 .getAttribute("data-value");

// Listen for each custom option click
Array.from(elSelectCustomOptions2.children).forEach(function (elOption) {
  elOption.addEventListener("click", (e) => {
    // Update custom select text too
    elSelectCustomValue2 .textContent = e.target.textContent;
    // Close select
    elSelectCustom2.classList.remove("isActive");
  });
});

// Toggle select on label click
elSelectCustomValue2 .addEventListener("click", (e) => {
    elSelectCustom2.classList.toggle("isActive");
});

// close the custom select when clicking outside.
document.addEventListener("click", (e) => {
  const didClickedOutside = !elSelectCustom2.contains(e.target);
  if (didClickedOutside) {
    elSelectCustom2.classList.remove("isActive");
  }
});