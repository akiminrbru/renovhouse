// Табы

const caclContents = document.getElementsByClassName(
  "calculator__settings-wrapper"
);
const caclSteps = document.getElementsByClassName("calculator__step");

const calcPrev = document.querySelector(".calculator__prev");
const calcNext = document.querySelector(".calculator__next");

let currentContent = null;

if (caclSteps) {
  for (let i = 0; i < caclSteps.length; i++) {
    caclSteps[i].addEventListener("click", (e) => {
      // кнопки 

      if (step1_width.value === "" || step1_length.value === "") {
        alert("Не указана длина или ширина строения")
      } else {
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

        for (let i = 0; i < caclSteps.length; i++) {
          caclSteps[i].classList.remove("calculator__step_active");
        }

        for (let i = 0; i < e.target.id; i++) {
          caclSteps[i].classList.add("calculator__step_active");
        }

        for (let j = 0; j < caclContents.length; j++) {
          if (e.target.id === caclContents[j].id) {
            caclContents[j].classList.add(
              "calculator__settings-wrapper_active"
            );
          } else {
            caclContents[j].classList.remove(
              "calculator__settings-wrapper_active"
            );
          }
        }
      }
    });
  }
}

// назад

if (calcPrev) {
  calcPrev.addEventListener("click", () => {

    currentContent = document.querySelector(
      ".calculator__settings-wrapper_active"
    );
    currentId = currentContent.id - 1;

    calcNext.classList.remove("calculator__next_hide");

    if (currentContent.id == 2) {
      calcPrev.classList.add("calculator__prev_hide");
    } else {
      calcPrev.classList.remove("calculator__prev_hide");
    }

    for (let i = 0; i < caclContents.length; i++) {
      caclContents[i].classList.remove(
        "calculator__settings-wrapper_active"
      );
    }
    caclContents[currentId - 1].classList.add(
      "calculator__settings-wrapper_active"
    );

    for (let i = 0; i < caclSteps.length; i++) {
      caclSteps[i].classList.remove("calculator__step_active");
    }

    for (let i = 0; i < currentId; i++) {
      caclSteps[i].classList.add("calculator__step_active");
    }
  });
}

// вперед

if (calcNext) {
  calcNext.addEventListener("click", () => {

    if (step1_width.value === "" || step1_length.value === "") {
      alert("Не указана длина или ширина строения");
    } else {
      currentContent = document.querySelector(
        ".calculator__settings-wrapper_active"
      );
      currentId = currentContent.id - 1;

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

      for (let i = 0; i < caclContents.length; i++) {
        caclContents[i].classList.remove(
          "calculator__settings-wrapper_active"
        );
      }
      caclContents[currentId + 1].classList.add(
        "calculator__settings-wrapper_active"
      );

      for (let i = 0; i < caclSteps.length; i++) {
        caclSteps[i].classList.remove("calculator__step_active");
      }

      for (let i = 0; i < currentId + 2; i++) {
        caclSteps[i].classList.add("calculator__step_active");
      }
    }
  });
}

//input 3

//input 4 (window)

const rangeInput4 = document.querySelector(".range-input4 input"),
  priceInput4 = document.querySelector(".price-input4 input"),
  range4 = document.querySelector(".slider4 .progress4");

if (priceInput4) {
  priceInput4.addEventListener("input", (e) => {
    if (e.target.value < 0) {
      e.target.value = 0
    }
    if (e.target.value > 20) {
      e.target.value = 20
    }
    rangeInput4.value = e.target.value;
  });
}

if (rangeInput4) {
  rangeInput4.addEventListener("input", (e) => {
    priceInput4.value = e.target.value;
    range4.style.left = e.target.value * 5 + "%";
  });
}

//input 5 (door)

const rangeInput5 = document.querySelector(".range-input5 input"),
  priceInput5 = document.querySelector(".price-input5 input"),
  range5 = document.querySelector(".slider5 .progress5");

if (priceInput5) {
  priceInput5.addEventListener("input", (e) => {
    if (e.target.value < 0) {
      e.target.value = 0
    }
    if (e.target.value > 20) {
      e.target.value = 20
    }
    rangeInput5.value = e.target.value;
  });
}

if (rangeInput5) {
  rangeInput5.addEventListener("input", (e) => {
    priceInput5.value = e.target.value;
    range5.style.left = e.target.value * 5 + "%";
  });
}

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

// Инпуты для фундамента, стен и перекрытий

const elSelectCust = document.getElementsByClassName("js-selectCustom");

if (elSelectCust) {
  Array.from(elSelectCust).forEach(elSelectCustom => {
    const elSelectCustomValue = elSelectCustom.children[0];
    const elSelectCustomOptions = elSelectCustom.children[1];
    const defaultLabel = elSelectCustomValue.getAttribute("data-value");

    // Listen for each custom option click
    Array.from(elSelectCustomOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e) => {
        // Update custom select text too
        elSelectCustomValue.setAttribute("data-price-work", e.target.getAttribute("data-price-work"))
        elSelectCustomValue.setAttribute("data-price-materials", e.target.getAttribute("data-price-materials"))
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
  })
}

// Результат

const allSteps = document.getElementsByClassName(
  "calculator__settings-resultStep"
);

if (allSteps) {
  for (let i = 0; i < allSteps.length; i++) {
    allSteps[i].addEventListener("click", () => {
      allSteps[i].lastElementChild.classList.toggle(
        "calculator__settings-resultStep-inner_active"
      );
    });
  }
}

// Табы для 1 и 2 этажа

const btnChoiceFloor1 = document.querySelector('.btnChoiceFloor1');
const btnChoiceFloor2 = document.querySelector('.btnChoiceFloor2');

const floor1 = document.querySelector('.floor1');
const floor2 = document.querySelector('.floor2');

if (btnChoiceFloor2) {
  btnChoiceFloor2.addEventListener('click', () => {
    btnChoiceFloor1.classList.remove('calculator__settings-main-btnFloor_active');
    btnChoiceFloor2.classList.add('calculator__settings-main-btnFloor_active');

    floor2.classList.remove('calculator__settings-main-floorHide');
    floor1.classList.add('calculator__settings-main-floorHide');
  })
}

if (btnChoiceFloor1) {
  btnChoiceFloor1.addEventListener('click', () => {
    btnChoiceFloor2.classList.remove('calculator__settings-main-btnFloor_active');
    btnChoiceFloor1.classList.add('calculator__settings-main-btnFloor_active');

    floor1.classList.remove('calculator__settings-main-floorHide');
    floor2.classList.add('calculator__settings-main-floorHide');
  })
}

// Табы для перекрытий

const btnChoiceLap1 = document.querySelector('.btnChoiceLap1');
const btnChoiceLap2 = document.querySelector('.btnChoiceLap2');

const lap1 = document.querySelector('.lap1');
const lap2 = document.querySelector('.lap2');

if (btnChoiceLap1) {
  btnChoiceLap1.addEventListener('click', () => {
    btnChoiceLap1.classList.add('calculator__settings-main-btnLap_active');
    btnChoiceLap2.classList.remove('calculator__settings-main-btnLap_active');

    lap1.classList.remove('calculator__settings-main-lapHide');
    lap2.classList.add('calculator__settings-main-lapHide');
  })
}

if (btnChoiceLap2) {
  btnChoiceLap2.addEventListener('click', () => {
    btnChoiceLap1.classList.remove('calculator__settings-main-btnLap_active');
    btnChoiceLap2.classList.add('calculator__settings-main-btnLap_active');

    lap1.classList.add('calculator__settings-main-lapHide');
    lap2.classList.remove('calculator__settings-main-lapHide');
  })
}

// Выбор этажа

let step1_floor1 = document.querySelector('.choose_floor1');
let step1_floor2 = document.querySelector('.choose_floor2');

if (step1_floor1) {
  step1_floor1.addEventListener('click', () => {
    btnChoiceFloor2.classList.add("calculator__settings-main-btnFloor_hide");
    btnChoiceLap2.classList.add("calculator__settings-main-btnLap_hide");


    //дле стен
    btnChoiceFloor2.classList.remove('calculator__settings-main-btnFloor_active');
    btnChoiceFloor1.classList.add('calculator__settings-main-btnFloor_active');
    floor1.classList.remove('calculator__settings-main-floorHide');
    floor2.classList.add('calculator__settings-main-floorHide');

    //для перекрытий 
    btnChoiceLap1.classList.add('calculator__settings-main-btnLap_active');
    btnChoiceLap2.classList.remove('calculator__settings-main-btnLap_active');

    lap1.classList.remove('calculator__settings-main-lapHide');
    lap2.classList.add('calculator__settings-main-lapHide');
  })
}

if (step1_floor2) {
  step1_floor2.addEventListener('click', () => {
    btnChoiceFloor2.classList.remove("calculator__settings-main-btnFloor_hide");
    btnChoiceLap2.classList.remove("calculator__settings-main-btnLap_hide");
  })
}

// Step1 (Клики на карты фундмамента)

const step1_volume = document.querySelector('.step1-volume');

let step1_price_work = document.querySelector('.step1-price-work');
let step1_price_materials = document.querySelector('.step1-price-materials');
let step1_price_sum = document.querySelector('.step1-price-sum');

let step1_sum = document.querySelector('.step1-sum');

let step1_prev_work = 0;
let step1_prev_materials = 0;
let step1_prev_sum = 0;


// Результат

let step1_result = document.querySelector('.step1-result');
let step1_result_img = step1_result.lastElementChild.firstElementChild.firstElementChild;
let step1_result_material = step1_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
let step1_result_volume = step1_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
let step1_result_thick = step1_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild;
let step1_result_priceWork = step1_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.parentElement.children[0]
let step1_result_priceMaterials = step1_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
let step1_result_priceSum = step1_result.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild;

const step1Cards = document.getElementsByClassName("step1_found");
if (step1Cards) {
  for (let i = 0; i < step1Cards.length; i++) {
    step1Cards[i].addEventListener("click", () => {

      if (step1_width.value === "" || step1_length.value === "") {
        alert("Не указана длина или ширина строения")
      } else {
        let card = step1Cards[i].lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild;
        let card_img = step1Cards[i].firstElementChild.getAttribute("src");
        let card_material = step1Cards[i].lastElementChild.parentElement.children[1].innerHTML;
        let card_thick = card.innerHTML;
        let price_work = card.getAttribute('data-price-work')
        let price_materials = card.getAttribute('data-price-materials')

        step1_volume.innerHTML = Math.round(parseFloat(step1_square.innerHTML) * parseFloat(card.innerHTML) * 100) / 100;

        step1_price_work.innerHTML = Math.round(parseInt(price_work) * parseFloat(step1_volume.innerHTML) * 100) / 100;
        step1_price_materials.innerHTML = Math.round(parseInt(price_materials) * parseFloat(step1_volume.innerHTML) * 100) / 100;
        step1_price_sum.innerHTML = parseInt(step1_price_work.innerHTML) + parseInt(step1_price_materials.innerHTML);

        total_sum.innerHTML = parseInt(total_sum.innerHTML) - step1_prev_sum + parseInt(step1_price_sum.innerHTML);
        step1_sum.innerHTML = parseInt(step1_sum.innerHTML) - step1_prev_sum + parseInt(step1_price_sum.innerHTML);

        step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step1_prev_sum + parseInt(step1_price_sum.innerHTML);
        step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step1_prev_materials + parseInt(step1_price_materials.innerHTML);
        step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step1_prev_work + parseInt(step1_price_work.innerHTML);

        step1_prev_sum = parseInt(step1_price_sum.innerHTML);
        step1_prev_materials = step1_price_materials.innerHTML;
        step1_prev_work = step1_price_work.innerHTML;

        // Результат
        step1_result.classList.add('calculator__settings-resultStep_active');
        step1_result_img.src = card_img;
        step1_result_priceWork.innerHTML = step1_price_work.innerHTML;
        step1_result_priceMaterials.innerHTML = step1_price_materials.innerHTML;
        step1_result_priceSum.innerHTML = step1_price_sum.innerHTML;
        step1_result_material.innerHTML = card_material;
        step1_result_volume.innerHTML = step1_volume.innerHTML;
        step1_result_thick.innerHTML = card_thick;

        for (let j = 0; j < step1Cards.length; j++) {
          step1Cards[j].classList.remove(
            "step1_found_active"
          );
          step1Cards[j].lastElementChild.classList.remove(
            "calculator__selecters_active"
          );
        }

        step1Cards[i].classList.add(
          "step1_found_active"
        );

        step1Cards[i].lastElementChild.classList.add(
          "calculator__selecters_active"
        );
      }

    });
  }
}

// Step2 (Клики на карты стен)

let step2_price_work = document.querySelector('.step2-price-work');
let step2_price_materials = document.querySelector('.step2-price-materials');
let step2_price_sum = document.querySelector('.step2-price-sum');
let step2_sum = document.querySelector('.step2-sum');

let step2_volume = document.querySelector('.step2-volume');

// Этаж 1

let step2_prev_floor1_work = 0;
let step2_prev_floor1_materials = 0;
let step2_prev_floor1_sum = 0;

let step2_prev_floor1_totalSum = 0

let step2_prev_floor1_volume = 0;

// Результат

let step2_result = document.querySelector('.step2-result');
let step2_result_img = step2_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
let step2_result_material = step2_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
let step2_result_height = step2_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
let step2_result_volume = step2_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[2].lastElementChild.firstElementChild;
let step2_result_thick = step2_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[3].lastElementChild.firstElementChild;
let step2_result_priceWork = step2_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
let step2_result_priceMaterials = step2_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
let step2_result_priceSum = step2_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[2].lastElementChild.firstElementChild;

const step2_floor1_Cards = document.getElementsByClassName("step2_floor1_wall");
if (step2_floor1_Cards) {
  for (let i = 0; i < step2_floor1_Cards.length; i++) {
    step2_floor1_Cards[i].addEventListener("click", () => {
      let card = step2_floor1_Cards[i];
      let card_img = step2_floor1_Cards[i].firstElementChild.getAttribute("src");
      let card_material = step2_floor1_Cards[i].lastElementChild.parentElement.children[1].innerHTML;
      let card_thick = parseFloat(step2_floor1_Cards[i].lastElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML);
      let card_height = parseFloat(step2_floor1_Cards[i].lastElementChild.lastElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML);
      wall_height = card_height;

      let fifth_wall;

      if (parseInt(step1_width.value) > parseInt(step1_length.value)) {
        fifth_wall = parseInt(step1_width.value)
      } else {
        fifth_wall = parseInt(step1_length.value);
      }

      step2_volume.innerHTML = parseFloat(step2_volume.innerHTML) - parseFloat(step2_prev_floor1_volume);

      step2_prev_floor1_volume = (parseInt(step1_perimeter.innerHTML) + fifth_wall) * card_thick * card_height;

      step2_volume.innerHTML = parseFloat(step2_volume.innerHTML) + (parseInt(step1_perimeter.innerHTML) + fifth_wall) * card_thick * card_height;

      let step2_volume_floor1 = (parseInt(step1_perimeter.innerHTML) + fifth_wall) * card_thick * card_height;

      let price_work = card.getAttribute("data-price-work") * step2_volume_floor1;
      let price_materials = card.getAttribute("data-price-materials") * step2_volume_floor1;

      step2_price_work.innerHTML = parseInt(step2_price_work.innerHTML) - step2_prev_floor1_work;
      step2_price_materials.innerHTML = parseInt(step2_price_materials.innerHTML) - step2_prev_floor1_materials;
      step2_price_sum.innerHTML = parseInt(step2_price_sum.innerHTML) - step2_prev_floor1_sum;
      step2_sum.innerHTML = parseInt(step2_sum.innerHTML) - step2_prev_floor1_sum;
      step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step2_prev_floor1_work;
      step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step2_prev_floor1_materials;

      step2_prev_floor1_work = parseInt(price_work)
      step2_prev_floor1_materials = parseInt(price_materials)
      step2_prev_floor1_sum = parseInt(price_materials) + parseInt(price_work);

      step2_price_work.innerHTML = parseInt(step2_price_work.innerHTML) + parseInt(price_work);
      step2_price_materials.innerHTML = parseInt(step2_price_materials.innerHTML) + parseInt(price_materials);
      step2_price_sum.innerHTML = parseInt(step2_price_sum.innerHTML) + parseInt(price_materials) + parseInt(price_work);
      step2_sum.innerHTML = parseInt(step2_sum.innerHTML) + parseInt(price_materials) + parseInt(price_work);
      step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) + step2_prev_floor1_work;
      step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) + step2_prev_floor1_materials;

      total_sum.innerHTML = parseInt(total_sum.innerHTML) - step2_prev_floor1_totalSum;
      step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step2_prev_floor1_totalSum;

      step2_prev_floor1_totalSum = parseInt(price_materials) + parseInt(price_work)

      total_sum.innerHTML = parseInt(total_sum.innerHTML) + step2_prev_floor1_totalSum;
      step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) + step2_prev_floor1_totalSum;

      // Результат
      step2_result.classList.add('calculator__settings-resultStep_active');
      step2_result_img.src = card_img;
      step2_result_priceWork.innerHTML = parseInt(price_work);
      step2_result_priceMaterials.innerHTML = parseInt(price_materials);
      step2_result_priceSum.innerHTML = parseInt(price_materials) + parseInt(price_work);
      step2_result_height.innerHTML = card_height;
      step2_result_material.innerHTML = card_material;
      step2_result_volume.innerHTML = step2_volume_floor1;
      step2_result_thick.innerHTML = card_thick;

      for (let j = 0; j < step2_floor1_Cards.length; j++) {
        step2_floor1_Cards[j].classList.remove(
          "step2_wall_floor1_active"
        );
        step2_floor1_Cards[j].lastElementChild.classList.remove(
          "calculator__selecters_active"
        );
      }

      step2_floor1_Cards[i].classList.add(
        "step2_wall_floor1_active"
      );

      step2_floor1_Cards[i].lastElementChild.classList.add(
        "calculator__selecters_active"
      );
    });
  }
}

// Этаж 2

let step2_prev_floor2_work = 0;
let step2_prev_floor2_materials = 0;
let step2_prev_floor2_sum = 0;

let step2_prev_floor2_totalSum = 0;

let step2_prev_floor2_volume = 0;

// Результат

let step22_result = document.querySelector('.step2-result-floor2');
let step22_result_img = step22_result.lastElementChild.firstElementChild.firstElementChild;
let step22_result_material = step22_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
let step22_result_height = step22_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
let step22_result_volume = step22_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[2].lastElementChild.firstElementChild;
let step22_result_thick = step22_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[3].lastElementChild.firstElementChild;
let step22_result_priceWork = step22_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
let step22_result_priceMaterials = step22_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
let step22_result_priceSum = step22_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[2].lastElementChild.firstElementChild;

const step2_floor2_Cards = document.getElementsByClassName("step2_floor2_wall");
if (step2_floor2_Cards) {
  for (let i = 0; i < step2_floor2_Cards.length; i++) {
    step2_floor2_Cards[i].addEventListener("click", () => {
      let card = step2_floor2_Cards[i];
      let card_img = step2_floor2_Cards[i].firstElementChild.getAttribute("src");
      let card_material = step2_floor2_Cards[i].lastElementChild.parentElement.children[1].innerHTML;
      let card_thick = parseFloat(step2_floor2_Cards[i].lastElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML);
      let card_height = parseFloat(step2_floor2_Cards[i].lastElementChild.lastElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML);

      let fifth_wall;

      if (parseInt(step1_width.value) > parseInt(step1_length.value)) {
        fifth_wall = parseInt(step1_width.value)
      } else {
        fifth_wall = parseInt(step1_length.value);
      }

      step2_volume.innerHTML = parseFloat(step2_volume.innerHTML) - parseFloat(step2_prev_floor2_volume);

      step2_prev_floor2_volume = (parseInt(step1_perimeter.innerHTML) + fifth_wall) * card_thick * card_height;

      step2_volume.innerHTML = parseFloat(step2_volume.innerHTML) + (parseInt(step1_perimeter.innerHTML) + fifth_wall) * card_thick * card_height;

      let step2_volume_floor2 = (parseInt(step1_perimeter.innerHTML) + fifth_wall) * card_thick * card_height;

      let price_work = card.getAttribute("data-price-work") * step2_volume_floor2;
      let price_materials = card.getAttribute("data-price-materials") * step2_volume_floor2;

      step2_price_work.innerHTML = parseInt(step2_price_work.innerHTML) - step2_prev_floor2_work;
      step2_price_materials.innerHTML = parseInt(step2_price_materials.innerHTML) - step2_prev_floor2_materials;
      step2_price_sum.innerHTML = parseInt(step2_price_sum.innerHTML) - step2_prev_floor2_sum;
      step2_sum.innerHTML = parseInt(step2_sum.innerHTML) - step2_prev_floor2_sum;
      step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step2_prev_floor2_work;
      step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step2_prev_floor2_materials;


      step2_prev_floor2_work = parseInt(price_work)
      step2_prev_floor2_materials = parseInt(price_materials)
      step2_prev_floor2_sum = parseInt(price_materials) + parseInt(price_work)

      step2_price_work.innerHTML = parseInt(step2_price_work.innerHTML) + parseInt(price_work);
      step2_price_materials.innerHTML = parseInt(step2_price_materials.innerHTML) + parseInt(price_materials);
      step2_price_sum.innerHTML = parseInt(step2_price_sum.innerHTML) + parseInt(price_materials) + parseInt(price_work);
      step2_sum.innerHTML = parseInt(step2_sum.innerHTML) + parseInt(price_materials) + parseInt(price_work);
      step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) + step2_prev_floor2_work;
      step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) + step2_prev_floor2_materials;

      total_sum.innerHTML = parseInt(total_sum.innerHTML) - step2_prev_floor2_totalSum;
      step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step2_prev_floor2_totalSum;

      step2_prev_floor2_totalSum = parseInt(price_materials) + parseInt(price_work)

      total_sum.innerHTML = parseInt(total_sum.innerHTML) + step2_prev_floor2_totalSum;
      step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) + step2_prev_floor2_totalSum;

      // Результат
      step22_result.classList.add('step2-result-floor2_active');
      step22_result_img.src = card_img;
      step22_result_priceWork.innerHTML = parseInt(price_work);
      step22_result_priceMaterials.innerHTML = parseInt(price_materials);
      step22_result_priceSum.innerHTML = parseInt(price_materials) + parseInt(price_work);
      step22_result_volume.innerHTML = step2_volume_floor2;
      step22_result_height.innerHTML = card_height;
      step22_result_material.innerHTML = card_material;
      step22_result_thick.innerHTML = card_thick;

      for (let j = 0; j < step2_floor2_Cards.length; j++) {
        step2_floor2_Cards[j].classList.remove(
          "step2_wall_floor2_active"
        );
        step2_floor2_Cards[j].lastElementChild.classList.remove(
          "calculator__selecters_active"
        );
      }

      step2_floor2_Cards[i].classList.add(
        "step2_wall_floor2_active"
      );

      step2_floor2_Cards[i].lastElementChild.classList.add(
        "calculator__selecters_active"
      );
    });
  }
}

// Step3 (Клики на карты перекрытий)

let step3_price_work = document.querySelector('.step3-price-work');
let step3_price_materials = document.querySelector('.step3-price-materials');
let step3_price_sum = document.querySelector('.step3-price-sum');
let step3_sum = document.querySelector('.step3-sum');

// Этаж 1

let step3_prev_floor1_work = 0;
let step3_prev_floor1_materials = 0;
let step3_prev_floor1_sum = 0;

let step3_prev_floor1_totalSum = 0

// Результат

let step3_result = document.querySelector('.step3-result');
let step3_result_img = step3_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
let step3_result_material = step3_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
let step3_result_square = step3_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
let step3_result_priceWork = step3_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
let step3_result_priceMaterials = step3_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
let step3_result_priceSum = step3_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[2].lastElementChild.firstElementChild;

const step3_floor1_Cards = document.getElementsByClassName("step3_floor1_lap");
if (step3_floor1_Cards) {
  for (let i = 0; i < step3_floor1_Cards.length; i++) {
    step3_floor1_Cards[i].addEventListener("click", () => {
      let card_img = step3_floor1_Cards[i].firstElementChild.getAttribute("src");
      let card_material = step3_floor1_Cards[i].lastElementChild.parentElement.children[1].innerHTML;
      let price_work = step3_floor1_Cards[i].getAttribute('data-price-work') * step3_square.innerHTML;
      let price_materials = step3_floor1_Cards[i].getAttribute('data-price-materials') * step3_square.innerHTML;

      step3_price_work.innerHTML = parseInt(step3_price_work.innerHTML) - step3_prev_floor1_work;
      step3_price_materials.innerHTML = parseInt(step3_price_materials.innerHTML) - step3_prev_floor1_materials;
      step3_price_sum.innerHTML = parseInt(step3_price_sum.innerHTML) - step3_prev_floor1_sum;
      step3_sum.innerHTML = parseInt(step3_sum.innerHTML) - step3_prev_floor1_sum;
      step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step3_prev_floor1_work;
      step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step3_prev_floor1_materials;

      step3_prev_floor1_work = price_work
      step3_prev_floor1_materials = price_materials
      step3_prev_floor1_sum = price_work + price_materials

      step3_price_work.innerHTML = parseInt(step3_price_work.innerHTML) + price_work;
      step3_price_materials.innerHTML = parseInt(step3_price_materials.innerHTML) + price_materials;
      step3_price_sum.innerHTML = parseInt(step3_price_sum.innerHTML) + parseInt(price_materials) + parseInt(price_work);
      step3_sum.innerHTML = parseInt(step3_sum.innerHTML) + parseInt(price_materials) + parseInt(price_work);
      step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) + step3_prev_floor1_work;
      step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) + step3_prev_floor1_materials;

      total_sum.innerHTML = parseInt(total_sum.innerHTML) - step3_prev_floor1_totalSum;
      step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step3_prev_floor1_totalSum;

      step3_prev_floor1_totalSum = parseInt(price_materials) + parseInt(price_work);

      total_sum.innerHTML = parseInt(total_sum.innerHTML) + step3_prev_floor1_totalSum;
      step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) + step3_prev_floor1_totalSum;

      // Результат
      step3_result.classList.add('calculator__settings-resultStep_active');
      step3_result_img.src = card_img;
      step3_result_priceWork.innerHTML = parseInt(price_work);
      step3_result_priceMaterials.innerHTML = parseInt(price_materials);
      step3_result_priceSum.innerHTML = parseInt(price_materials) + parseInt(price_work);
      step3_result_material.innerHTML = card_material;
      step3_result_square.innerHTML = step3_square.innerHTML;

      for (let j = 0; j < step3_floor1_Cards.length; j++) {
        step3_floor1_Cards[j].classList.remove(
          "step3_lap_floor1_active"
        );
        step3_floor1_Cards[j].lastElementChild.classList.remove(
          "calculator__selecters_active"
        );
      }

      step3_floor1_Cards[i].classList.add(
        "step3_lap_floor1_active"
      );

      step3_floor1_Cards[i].lastElementChild.classList.add(
        "calculator__selecters_active"
      );
    });
  }
}

// Этаж 2

let step3_prev_floor2_work = 0;
let step3_prev_floor2_materials = 0;
let step3_prev_floor2_sum = 0;

let step3_prev_floor2_totalSum = 0

// Результат

let step32_result = document.querySelector('.step3-result-floor2');
let step32_result_img = step32_result.lastElementChild.firstElementChild.firstElementChild;
let step32_result_material = step32_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
let step32_result_square = step32_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
let step32_result_priceWork = step32_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
let step32_result_priceMaterials = step32_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
let step32_result_priceSum = step32_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[2].lastElementChild.firstElementChild;

const step3_floor2_Cards = document.getElementsByClassName("step3_floor2_lap");

if (step3_floor2_Cards) {
  for (let i = 0; i < step3_floor2_Cards.length; i++) {
    step3_floor2_Cards[i].addEventListener("click", () => {
      let card_img = step3_floor2_Cards[i].firstElementChild.getAttribute("src");
      let card_material = step3_floor2_Cards[i].lastElementChild.parentElement.children[1].innerHTML;
      let price_work = step3_floor2_Cards[i].getAttribute('data-price-work') * step3_square.innerHTML;
      let price_materials = step3_floor2_Cards[i].getAttribute('data-price-materials') * step3_square.innerHTML;

      step3_price_work.innerHTML = parseInt(step3_price_work.innerHTML) - step3_prev_floor2_work;
      step3_price_materials.innerHTML = parseInt(step3_price_materials.innerHTML) - step3_prev_floor2_materials;
      step3_price_sum.innerHTML = parseInt(step3_price_sum.innerHTML) - step3_prev_floor2_sum;
      step3_sum.innerHTML = parseInt(step3_sum.innerHTML) - step3_prev_floor2_sum;
      step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step3_prev_floor2_work;
      step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step3_prev_floor2_materials;

      step3_prev_floor2_work = price_work
      step3_prev_floor2_materials = price_materials
      step3_prev_floor2_sum = price_work + price_materials

      step3_price_work.innerHTML = parseInt(step3_price_work.innerHTML) + price_work;
      step3_price_materials.innerHTML = parseInt(step3_price_materials.innerHTML) + price_materials;
      step3_price_sum.innerHTML = parseInt(step3_price_sum.innerHTML) + parseInt(price_materials) + parseInt(price_work);
      step3_sum.innerHTML = parseInt(step3_sum.innerHTML) + parseInt(price_materials) + parseInt(price_work);
      step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) + step3_prev_floor2_work;
      step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) + step3_prev_floor2_materials;

      total_sum.innerHTML = parseInt(total_sum.innerHTML) - step3_prev_floor2_totalSum;
      step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step3_prev_floor2_totalSum;

      step3_prev_floor2_totalSum = parseInt(price_materials) + parseInt(price_work);

      total_sum.innerHTML = parseInt(total_sum.innerHTML) + step3_prev_floor2_totalSum;
      step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) + step3_prev_floor2_totalSum;

      // Результат
      step32_result.classList.add('step3-result-floor2_active');
      step32_result_img.src = card_img;
      step32_result_priceWork.innerHTML = parseInt(price_work);
      step32_result_priceMaterials.innerHTML = parseInt(price_materials);
      step32_result_priceSum.innerHTML = parseInt(price_materials) + parseInt(price_work);
      step32_result_square.innerHTML = step3_square.innerHTML;
      step32_result_material.innerHTML = card_material;

      for (let j = 0; j < step3_floor2_Cards.length; j++) {
        step3_floor2_Cards[j].classList.remove(
          "step3_lap_floor1_active"
        );
        step3_floor2_Cards[j].lastElementChild.classList.remove(
          "calculator__selecters_active"
        );
      }

      step3_floor2_Cards[i].classList.add(
        "step3_lap_floor1_active"
      );

      step3_floor2_Cards[i].lastElementChild.classList.add(
        "calculator__selecters_active"
      );
    });
  }
}

// Step4 (Клики на карты кровли)

const step4Cards = document.getElementsByClassName("step4_roof");
let step4_price_work = document.querySelector('.step4-price-work');
let step4_price_materials = document.querySelector('.step4-price-materials');
let step4_price_sum = document.querySelector('.step4-price-sum');
let step4_sum = document.querySelector('.step4-sum');

let step4_square = document.querySelector('.step4-square');

let step4_prev_work = 0;
let step4_prev_materials = 0;
let step4_prev_sum = 0

// Результат

let step4_result = document.querySelector('.step4-result');
let step4_result_img = step4_result.lastElementChild.firstElementChild.firstElementChild;
let step4_result_material = step4_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.parentElement.children[0]
let step4_result_square = step4_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
let step4_result_priceWork = step4_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.parentElement.children[0]
let step4_result_priceMaterials = step4_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
let step4_result_priceSum = step4_result.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild;

if (step4Cards) {
  for (let i = 0; i < step4Cards.length; i++) {
    step4Cards[i].addEventListener("click", () => {
      let card_img = step4Cards[i].firstElementChild.getAttribute("src");
      let card_material = step4Cards[i].lastElementChild.parentElement.children[1].innerHTML;
      let price_work = step4Cards[i].getAttribute('data-price-work');
      let price_materials = step4Cards[i].getAttribute('data-price-materials');

      step4_square.innerHTML = Math.round(parseInt(step1_square.innerHTML) * 1.6);

      step4_price_work.innerHTML = price_work * step4_square.innerHTML;
      step4_price_materials.innerHTML = price_materials * step4_square.innerHTML;
      step4_price_sum.innerHTML = parseInt(step4_price_work.innerHTML) + parseInt(step4_price_materials.innerHTML);
      step4_sum.innerHTML = parseInt(step4_price_work.innerHTML) + parseInt(step4_price_materials.innerHTML);

      total_sum.innerHTML = parseInt(total_sum.innerHTML) - step4_prev_sum;
      step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step4_prev_sum;
      step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step4_prev_materials;
      step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step4_prev_work;

      step4_prev_sum = parseInt(step4_price_work.innerHTML) + parseInt(step4_price_materials.innerHTML);
      step4_prev_materials = parseInt(step4_price_materials.innerHTML)
      step4_prev_work = parseInt(step4_price_work.innerHTML)

      total_sum.innerHTML = parseInt(total_sum.innerHTML) + step4_prev_sum
      step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) + step4_prev_sum;
      step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) + step4_prev_materials;
      step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) + step4_prev_work;

      // Результат
      step4_result.classList.add('calculator__settings-resultStep_active');
      step4_result_img.src = card_img;
      step4_result_priceWork.innerHTML = step4_price_work.innerHTML;
      step4_result_priceMaterials.innerHTML = step4_price_materials.innerHTML;
      step4_result_priceSum.innerHTML = step4_price_sum.innerHTML;
      step4_result_material.innerHTML = card_material;
      step4_result_square.innerHTML = step4_square.innerHTML;

      for (let j = 0; j < step4Cards.length; j++) {
        step4Cards[j].classList.remove(
          "step4_roof_active"
        );
        step4Cards[j].lastElementChild.classList.remove(
          "calculator__selecters_active"
        );
      }

      step4Cards[i].classList.add(
        "step4_roof_active"
      );

      step4Cards[i].lastElementChild.classList.add(
        "calculator__selecters_active"
      );
    });
  }
}

// Step5 (Клики на карты лестницы)

const step5Cards = document.getElementsByClassName("step5_ladder");
let step5_price_work = document.querySelector('.step5-price-work');
let step5_price_materials = document.querySelector('.step5-price-materials');
let step5_price_sum = document.querySelector('.step5-price-sum');
let step5_sum = document.querySelector('.step5-sum');

let step5_prev_work = 0;
let step5_prev_materials = 0;
let step5_prev_sum = 0;

// Результат

let step5_result = document.querySelector('.step5-result');
let step5_result_img = step5_result.lastElementChild.firstElementChild.firstElementChild;
let step5_result_material = step5_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.parentElement.children[0]
let step5_result_priceWork = step5_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.parentElement.children[0]
let step5_result_priceMaterials = step5_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
let step5_result_priceSum = step5_result.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild;

if (step5Cards) {
  for (let i = 0; i < step5Cards.length; i++) {
    step5Cards[i].addEventListener("click", (e) => {
      let card_img = step5Cards[i].firstElementChild.getAttribute("src");
      let card_material = step5Cards[i].lastElementChild.parentElement.children[1].innerHTML;
      let price_work = step5Cards[i].getAttribute('data-price-work');
      let price_materials = step5Cards[i].getAttribute('data-price-materials');

      step5_price_work.innerHTML = price_work;
      step5_price_materials.innerHTML = price_materials;
      step5_price_sum.innerHTML = parseInt(price_materials) + parseInt(price_work);
      step5_sum.innerHTML = parseInt(price_materials) + parseInt(price_work);

      total_sum.innerHTML = parseInt(total_sum.innerHTML) - step5_prev_sum;
      step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step5_prev_sum;
      step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step5_prev_materials;
      step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step5_prev_work;

      step5_prev_sum = parseInt(price_materials) + parseInt(price_work);
      step5_prev_materials = parseInt(step5_price_materials.innerHTML);
      step5_prev_work = parseInt(step5_price_work.innerHTML);

      total_sum.innerHTML = parseInt(total_sum.innerHTML) + step5_prev_sum;
      step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) + step5_prev_sum;
      step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) + step5_prev_materials;
      step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) + step5_prev_work;

      // Результат
      step5_result.classList.add('calculator__settings-resultStep_active');
      step5_result_img.src = card_img;
      step5_result_priceWork.innerHTML = step5_price_work.innerHTML;
      step5_result_priceMaterials.innerHTML = step5_price_materials.innerHTML;
      step5_result_priceSum.innerHTML = step5_price_sum.innerHTML;
      step5_result_material.innerHTML = card_material;

      for (let j = 0; j < step5Cards.length; j++) {
        // стили

        step5Cards[j].classList.remove(
          "step5_ladder_active"
        );
        step5Cards[j].lastElementChild.classList.remove(
          "calculator__selecters_active"
        );
      }

      step5Cards[i].classList.add(
        "step5_ladder_active"
      );

      step5Cards[i].lastElementChild.classList.add(
        "calculator__selecters_active"
      );

    });
  }
}

// Step6 (Клики на карты фасад)

const step6Cards = document.getElementsByClassName("step6_facade");
let step6_price_work = document.querySelector('.step6-price-work');
let step6_price_materials = document.querySelector('.step6-price-materials');
let step6_price_sum = document.querySelector('.step6-price-sum');
let step6_sum = document.querySelector('.step6-sum');

let step6_prev_work = 0
let step6_prev_materials = 0;
let step6_prev_sum = 0;

let step6_square = document.querySelector('.step6-square');

// Результат

let step6_result = document.querySelector('.step6-result');
let step6_result_img = step6_result.lastElementChild.firstElementChild.firstElementChild;
let step6_result_material = step6_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.parentElement.children[0]
let step6_result_square = step6_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
let step6_result_priceWork = step6_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.parentElement.children[0]
let step6_result_priceMaterials = step6_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
let step6_result_priceSum = step6_result.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild;

// wall_height

if (step6Cards) {
  for (let i = 0; i < step6Cards.length; i++) {
    step6Cards[i].addEventListener("click", () => {

      if (!wall_height) {
        alert("Выбери высоту стены в шаге 2");
      } else {
        let card_img = step6Cards[i].firstElementChild.getAttribute("src");
        let card_material = step6Cards[i].lastElementChild.parentElement.children[1].innerHTML;
        let ratio = step6Cards[i].getAttribute("data-ratio")

        if (step1_floors.innerHTML == "2") {
          step6_square.innerHTML = Math.round(step1_perimeter.innerHTML * wall_height * ratio * 2 * 100) / 100;
        } else {
          step6_square.innerHTML = Math.round(step1_perimeter.innerHTML * wall_height * ratio * 100) / 100;
        }

        let price_work = Math.round(step6Cards[i].getAttribute("data-price-work") * step6_square.innerHTML * 100) / 100;
        let price_materials = Math.round(step6Cards[i].getAttribute("data-price-materials") * step6_square.innerHTML * 100) / 100;

        step6_price_work.innerHTML = price_work;
        step6_price_materials.innerHTML = price_materials;
        step6_price_sum.innerHTML = parseInt(price_materials) + parseInt(price_work);
        step6_sum.innerHTML = parseInt(price_materials) + parseInt(price_work);

        total_sum.innerHTML = parseInt(total_sum.innerHTML) - step6_prev_sum;
        step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step6_prev_sum;
        step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step6_prev_materials;
        step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step6_prev_work;

        step6_prev_sum = parseInt(price_materials) + parseInt(price_work);
        step6_prev_materials = parseInt(step6_price_materials.innerHTML);
        step6_prev_work = parseInt(step6_price_work.innerHTML);

        total_sum.innerHTML = parseInt(total_sum.innerHTML) + step6_prev_sum;
        step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) + step6_prev_sum;
        step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) + step6_prev_materials;
        step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) + step6_prev_work;

        // Результат
        step6_result.classList.add('calculator__settings-resultStep_active');
        step6_result_img.src = card_img;
        step6_result_priceWork.innerHTML = step6_price_work.innerHTML;
        step6_result_priceMaterials.innerHTML = step6_price_materials.innerHTML;
        step6_result_priceSum.innerHTML = step6_price_sum.innerHTML;
        step6_result_material.innerHTML = card_material;
        step6_result_square.innerHTML = step6_square.innerHTML;

        for (let j = 0; j < step6Cards.length; j++) {
          step6Cards[j].classList.remove(
            "step5_facade_active"
          );
          step6Cards[j].lastElementChild.classList.remove(
            "calculator__selecters_active"
          );
        }

        step6Cards[i].classList.add(
          "step5_facade_active"
        );

        step6Cards[i].lastElementChild.classList.add(
          "calculator__selecters_active"
        );
      }
    });
  }
}

// Окна, Двери

let step7_sum = document.querySelector('.step7-sum');

let step7_window = document.querySelector('.calc-window');
let step7_window_range = document.querySelector('.calc-window-range');
let step7_prev_windowPrice = 0;

let step7_door = document.querySelector('.calc-door');
let step7_door_range = document.querySelector('.calc-door-range');
let step7_prev_doorPrice = 0;

// Результат
let step7_result = document.querySelector('.step7-result');
let step7_result_windows = step7_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
let step7_result_doors = step7_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild;
let step7_result_priceSum = step7_result.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild;

step7_window.addEventListener('input', () => {
  let price = step7_window.getAttribute('data-price') * step7_window.value;

  step7_sum.innerHTML = parseInt(step7_sum.innerHTML) - step7_prev_windowPrice + price;
  total_sum.innerHTML = parseInt(total_sum.innerHTML) - step7_prev_windowPrice + price;
  step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step7_prev_windowPrice + price;

  step7_prev_windowPrice = price;

  // Результат
  step7_result.classList.add('calculator__settings-resultStep_active');
  step7_result_windows.innerHTML = step7_window.value;
  step7_result_priceSum.innerHTML = step7_sum.innerHTML;
})

step7_window_range.addEventListener('input', () => {
  let price = step7_window.getAttribute('data-price') * step7_window.value;

  step7_sum.innerHTML = parseInt(step7_sum.innerHTML) - step7_prev_windowPrice + price;
  total_sum.innerHTML = parseInt(total_sum.innerHTML) - step7_prev_windowPrice + price;
  step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step7_prev_windowPrice + price;

  step7_prev_windowPrice = price;

  // Результат
  step7_result.classList.add('calculator__settings-resultStep_active');
  step7_result_windows.innerHTML = step7_window.value;
  step7_result_priceSum.innerHTML = step7_sum.innerHTML;
})

step7_door.addEventListener('input', () => {
  let price = step7_door.getAttribute('data-price') * step7_door.value;

  step7_sum.innerHTML = parseInt(step7_sum.innerHTML) - step7_prev_doorPrice + price;
  total_sum.innerHTML = parseInt(total_sum.innerHTML) - step7_prev_doorPrice + price;
  step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step7_prev_doorPrice + price;

  step7_prev_doorPrice = price;

  // Результат
  step7_result.classList.add('calculator__settings-resultStep_active');
  step7_result_doors.innerHTML = step7_door.value;
  step7_result_priceSum.innerHTML = step7_sum.innerHTML;
})

step7_door_range.addEventListener('input', () => {
  let price = step7_door.getAttribute('data-price') * step7_door.value;

  step7_sum.innerHTML = parseInt(step7_sum.innerHTML) - step7_prev_doorPrice + price;
  total_sum.innerHTML = parseInt(total_sum.innerHTML) - step7_prev_doorPrice + price;
  step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step7_prev_doorPrice + price;


  step7_prev_doorPrice = price;

  // Результат
  step7_result.classList.add('calculator__settings-resultStep_active');
  step7_result_doors.innerHTML = step7_door.value;
  step7_result_priceSum.innerHTML = step7_sum.innerHTML;
})


//Логика

let total_sum = document.querySelector('.total-sum');
let step8_total_sum = document.querySelector('.step8-total-sum');
let step8_materials_sum = document.querySelector('.step8-materials-sum');
let step8_work_sum = document.querySelector('.step8-work-sum');
let step1_width = document.querySelector('.step1-width');
let step1_length = document.querySelector('.step1-length');
let step1_square = document.querySelector('.step1-square');
let step1_perimeter = document.querySelector('.step1-perimetr');
let step1_floors = document.querySelector('.step1-floors');
let step1_floorsInputs = document.querySelectorAll('.calculator__checkbox');

let step3_square = document.querySelector('.step3-square');

let wall_height;

step1_width.addEventListener('input', () => {
  if (step1_width.value < 1) {
    step1_width.value = ""
  }
  if (step1_width.value > 349) {
    step1_width.value = 349
  }

  step1_square.innerHTML = step1_width.value * step1_length.value
  step1_perimeter.innerHTML = (step1_width.value * 2) + (step1_length.value * 2)

  step3_square.innerHTML = step1_width.value * step1_length.value
})

step1_length.addEventListener('input', () => {
  if (step1_length.value < 1) {
    step1_length.value = ""
  }
  if (step1_length.value > 349) {
    step1_length.value = 349
  }

  step1_square.innerHTML = step1_width.value * step1_length.value
  step1_perimeter.innerHTML = (step1_width.value * 2) + (step1_length.value * 2)

  step3_square.innerHTML = step1_width.value * step1_length.value
})

step1_floorsInputs[0].addEventListener('change', (e) => {
  step1_floors.innerHTML = e.target.value;


  // Step 2 (floor2) clear
  let step2_clear = document.querySelector('.step2_wall_floor2_active');
  console.log(step2_clear)

  step2_price_work.innerHTML = parseInt(step2_price_work.innerHTML) - step2_prev_floor2_work;
  step2_price_materials.innerHTML = parseInt(step2_price_materials.innerHTML) - step2_prev_floor2_materials;
  step2_price_sum.innerHTML = parseInt(step2_price_sum.innerHTML) - step2_prev_floor2_sum;
  step2_sum.innerHTML = parseInt(step2_sum.innerHTML) - step2_prev_floor2_sum;
  step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step2_prev_floor2_work;
  step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step2_prev_floor2_materials;
  total_sum.innerHTML = parseInt(total_sum.innerHTML) - step2_prev_floor2_totalSum;
  step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step2_prev_floor2_totalSum;

  console.log("floor1")
})

step1_floorsInputs[1].addEventListener('change', (e) => {
  step1_floors.innerHTML = e.target.value;
  console.log("floor2")
})