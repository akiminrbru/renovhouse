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

window.onload = () => {
  currentContent = document.querySelector(
    ".calculator__settings-wrapper_active"
  );

  if (currentContent) {
    currentId = currentContent.id - 1;

    if (currentContent.id == 1) {
      calcPrev.classList.add("calculator__prev_hide");
    } else {
      calcPrev.classList.remove("calculator__prev_hide");
    }
  }
};

// вперед

if (calcNext) {
  calcNext.addEventListener("click", () => {
    currentContent = document.querySelector(
      ".calculator__settings-wrapper_active"
    );
    currentId = currentContent.id - 1;

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
  });
}

//input 3

const rangeInput3 = document.querySelectorAll(".range-input3 input"),
  priceInput3 = document.querySelectorAll(".price-input3 input"),
  range3 = document.querySelector(".slider3 .progress3");
let priceGap3 = 0;

priceInput3.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput3[0].value),
      maxPrice = parseInt(priceInput3[1].value);

    if (
      maxPrice - minPrice >= priceGap3 &&
      maxPrice <= rangeInput3[1].max
    ) {
      if (e.target.className === "input-min") {
        rangeInput3[0].value = minPrice;
        range.style.left = (minPrice / rangeInput3[0].max) * 100 + "%";
      } else {
        rangeInput3[1].value = maxPrice;
        range3.style.right =
          100 - (maxPrice / rangeInput3[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput3.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput3[0].value),
      maxVal = parseInt(rangeInput3[1].value);

    if (maxVal - minVal < priceGap3) {
      if (e.target.className === "range-min") {
        rangeInput3[0].value = maxVal - priceGap3;
      } else {
        rangeInput3[1].value = minVal + priceGap3;
      }
    } else {
      priceInput3[0].value = minVal;
      priceInput3[1].value = maxVal;
      range3.style.left = (minVal / rangeInput3[0].max) * 100 + "%";
      range3.style.right =
        100 - (maxVal / rangeInput3[1].max) * 100 + "%";
    }
  });
});

//input 4 (window)

const rangeInput4 = document.querySelector(".range-input4 input"),
  priceInput4 = document.querySelector(".price-input4 input"),
  range4 = document.querySelector(".slider4 .progress4");

if (priceInput4) {
  priceInput4.addEventListener("input", (e) => {
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

// Монолитная плита 1

const elSelectCustom = document.getElementsByClassName("js-selectCustom")[0];

if (elSelectCustom) {
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
}

// Монолитная плита 2

const elSelectCustom2 = document.getElementsByClassName("js-selectCustom2")[0];
if (elSelectCustom2) {
  const elSelectCustomValue2 = elSelectCustom2.children[0];
  const elSelectCustomOptions2 = elSelectCustom2.children[1];
  const defaultLabel2 = elSelectCustomValue2.getAttribute("data-value");

  // Listen for each custom option click
  Array.from(elSelectCustomOptions2.children).forEach(function (elOption) {
    elOption.addEventListener("click", (e) => {
      // Update custom select text too
      elSelectCustomValue2.textContent = e.target.textContent;
      // Close select
      elSelectCustom2.classList.remove("isActive");
    });
  });

  // Toggle select on label click
  elSelectCustomValue2.addEventListener("click", (e) => {
    elSelectCustom2.classList.toggle("isActive");
  });

  // close the custom select when clicking outside.
  document.addEventListener("click", (e) => {
    const didClickedOutside = !elSelectCustom2.contains(e.target);
    if (didClickedOutside) {
      elSelectCustom2.classList.remove("isActive");
    }
  });
}

// Монолитная плита с цоколем 1 (3)

const elSelectCustom3 = document.getElementsByClassName("js-selectCustom3")[0];

if (elSelectCustom3) {
  const elSelectCustomValue3 = elSelectCustom3.children[0];
  const elSelectCustomOptions3 = elSelectCustom3.children[1];
  const defaultLabel3 = elSelectCustomValue3.getAttribute("data-value");

  // Listen for each custom option click
  Array.from(elSelectCustomOptions3.children).forEach(function (elOption) {
    elOption.addEventListener("click", (e) => {
      // Update custom select text too
      elSelectCustomValue3.textContent = e.target.textContent;
      // Close select
      elSelectCustom3.classList.remove("isActive");
    });
  });

  // Toggle select on label click
  elSelectCustomValue3.addEventListener("click", (e) => {
    elSelectCustom3.classList.toggle("isActive");
  });

  // close the custom select when clicking outside.
  document.addEventListener("click", (e) => {
    const didClickedOutside = !elSelectCustom3.contains(e.target);
    if (didClickedOutside) {
      elSelectCustom3.classList.remove("isActive");
    }
  });
}



// Монолитная плита с цоколем 2 (4)

const elSelectCustom4 = document.getElementsByClassName("js-selectCustom4")[0];

if (elSelectCustom4) {
  const elSelectCustomValue4 = elSelectCustom4.children[0];
  const elSelectCustomOptions4 = elSelectCustom4.children[1];
  const defaultLabel4 = elSelectCustomValue4.getAttribute("data-value");

  // Listen for each custom option click
  Array.from(elSelectCustomOptions4.children).forEach(function (elOption) {
    elOption.addEventListener("click", (e) => {
      // Update custom select text too
      elSelectCustomValue4.textContent = e.target.textContent;
      // Close select
      elSelectCustom4.classList.remove("isActive");
    });
  });

  // Toggle select on label click
  elSelectCustomValue4.addEventListener("click", (e) => {
    elSelectCustom4.classList.toggle("isActive");
  });

  // close the custom select when clicking outside.
  document.addEventListener("click", (e) => {
    const didClickedOutside = !elSelectCustom4.contains(e.target);
    if (didClickedOutside) {
      elSelectCustom4.classList.remove("isActive");
    }
  });
}

// Цокольный этаж 1 (5)

const elSelectCustom5 = document.getElementsByClassName("js-selectCustom5")[0];

if (elSelectCustom5) {
  const elSelectCustomValue5 = elSelectCustom5.children[0];
  const elSelectCustomOptions5 = elSelectCustom5.children[1];
  const defaultLabel5 = elSelectCustomValue5.getAttribute("data-value");

  // Listen for each custom option click
  Array.from(elSelectCustomOptions5.children).forEach(function (elOption) {
    elOption.addEventListener("click", (e) => {
      // Update custom select text too
      elSelectCustomValue5.textContent = e.target.textContent;
      // Close select
      elSelectCustom5.classList.remove("isActive");
    });
  });

  // Toggle select on label click
  elSelectCustomValue5.addEventListener("click", (e) => {
    elSelectCustom5.classList.toggle("isActive");
  });

  // close the custom select when clicking outside.
  document.addEventListener("click", (e) => {
    const didClickedOutside = !elSelectCustom5.contains(e.target);
    if (didClickedOutside) {
      elSelectCustom5.classList.remove("isActive");
    }
  });
}

// Цокольный этаж 2 (6)

const elSelectCustom6 = document.getElementsByClassName("js-selectCustom6")[0];

if (elSelectCustom6) {
  const elSelectCustomValue6 = elSelectCustom6.children[0];
  const elSelectCustomOptions6 = elSelectCustom6.children[1];
  const defaultLabel6 = elSelectCustomValue6.getAttribute("data-value");

  // Listen for each custom option click
  Array.from(elSelectCustomOptions6.children).forEach(function (elOption) {
    elOption.addEventListener("click", (e) => {
      // Update custom select text too
      elSelectCustomValue6.textContent = e.target.textContent;
      // Close select
      elSelectCustom6.classList.remove("isActive");
    });
  });

  // Toggle select on label click
  elSelectCustomValue6.addEventListener("click", (e) => {
    elSelectCustom6.classList.toggle("isActive");
  });

  // close the custom select when clicking outside.
  document.addEventListener("click", (e) => {
    const didClickedOutside = !elSelectCustom6.contains(e.target);
    if (didClickedOutside) {
      elSelectCustom6.classList.remove("isActive");
    }
  });
}

// Стены: газобетон 1 (7)

const elSelectCustom7 = document.getElementsByClassName("js-selectCustom7")[0];

if (elSelectCustom7) {
  const elSelectCustomValue7 = elSelectCustom7.children[0];
  const elSelectCustomOptions7 = elSelectCustom7.children[1];
  const defaultLabel7 = elSelectCustomValue7.getAttribute("data-value");

  // Listen for each custom option click
  Array.from(elSelectCustomOptions7.children).forEach(function (elOption) {
    elOption.addEventListener("click", (e) => {
      // Update custom select text too
      elSelectCustomValue7.textContent = e.target.textContent;
      // Close select
      elSelectCustom7.classList.remove("isActive");
    });
  });

  // Toggle select on label click
  elSelectCustomValue7.addEventListener("click", (e) => {
    elSelectCustom7.classList.toggle("isActive");
  });

  // close the custom select when clicking outside.
  document.addEventListener("click", (e) => {
    const didClickedOutside = !elSelectCustom7.contains(e.target);
    if (didClickedOutside) {
      elSelectCustom7.classList.remove("isActive");
    }
  });
}

// Стены: газобетон 2 (8)

const elSelectCustom8 = document.getElementsByClassName("js-selectCustom8")[0];

if (elSelectCustom8) {
  const elSelectCustomValue8 = elSelectCustom8.children[0];
  const elSelectCustomOptions8 = elSelectCustom8.children[1];
  const defaultLabel8 = elSelectCustomValue8.getAttribute("data-value");

  // Listen for each custom option click
  Array.from(elSelectCustomOptions8.children).forEach(function (elOption) {
    elOption.addEventListener("click", (e) => {
      // Update custom select text too
      elSelectCustomValue8.textContent = e.target.textContent;
      // Close select
      elSelectCustom8.classList.remove("isActive");
    });
  });

  // Toggle select on label click
  elSelectCustomValue8.addEventListener("click", (e) => {
    elSelectCustom8.classList.toggle("isActive");
  });

  // close the custom select when clicking outside.
  document.addEventListener("click", (e) => {
    const didClickedOutside = !elSelectCustom8.contains(e.target);
    if (didClickedOutside) {
      elSelectCustom8.classList.remove("isActive");
    }
  });
}

// Стены: кирпич 1 (9)

const elSelectCustom9 = document.getElementsByClassName("js-selectCustom9")[0];

if (elSelectCustom9) {
  const elSelectCustomValue9 = elSelectCustom9.children[0];
  const elSelectCustomOptions9 = elSelectCustom9.children[1];
  const defaultLabel9 = elSelectCustomValue9.getAttribute("data-value");

  // Listen for each custom option click
  Array.from(elSelectCustomOptions9.children).forEach(function (elOption) {
    elOption.addEventListener("click", (e) => {
      // Update custom select text too
      elSelectCustomValue9.textContent = e.target.textContent;
      // Close select
      elSelectCustom9.classList.remove("isActive");
    });
  });

  // Toggle select on label click
  elSelectCustomValue9.addEventListener("click", (e) => {
    elSelectCustom9.classList.toggle("isActive");
  });

  // close the custom select when clicking outside.
  document.addEventListener("click", (e) => {
    const didClickedOutside = !elSelectCustom9.contains(e.target);
    if (didClickedOutside) {
      elSelectCustom9.classList.remove("isActive");
    }
  });
}

// Стены: кирпич 2 (10)

const elSelectCustom10 = document.getElementsByClassName("js-selectCustom10")[0];

if (elSelectCustom10) {
  const elSelectCustomValue10 = elSelectCustom10.children[0];
  const elSelectCustomOptions10 = elSelectCustom10.children[1];
  const defaultLabel10 = elSelectCustomValue10.getAttribute("data-value");

  // Listen for each custom option click
  Array.from(elSelectCustomOptions10.children).forEach(function (elOption) {
    elOption.addEventListener("click", (e) => {
      // Update custom select text too
      elSelectCustomValue10.textContent = e.target.textContent;
      // Close select
      elSelectCustom10.classList.remove("isActive");
    });
  });

  // Toggle select on label click
  elSelectCustomValue10.addEventListener("click", (e) => {
    elSelectCustom10.classList.toggle("isActive");
  });

  // close the custom select when clicking outside.
  document.addEventListener("click", (e) => {
    const didClickedOutside = !elSelectCustom10.contains(e.target);
    if (didClickedOutside) {
      elSelectCustom10.classList.remove("isActive");
    }
  });
}

// Стены: поризованный блок 1 (11)

const elSelectCustom11 = document.getElementsByClassName("js-selectCustom11")[0];

if (elSelectCustom11) {
  const elSelectCustomValue11 = elSelectCustom11.children[0];
  const elSelectCustomOptions11 = elSelectCustom11.children[1];
  const defaultLabel11 = elSelectCustomValue11.getAttribute("data-value");

  // Listen for each custom option click
  Array.from(elSelectCustomOptions11.children).forEach(function (elOption) {
    elOption.addEventListener("click", (e) => {
      // Update custom select text too
      elSelectCustomValue11.textContent = e.target.textContent;
      // Close select
      elSelectCustom11.classList.remove("isActive");
    });
  });

  // Toggle select on label click
  elSelectCustomValue11.addEventListener("click", (e) => {
    elSelectCustom11.classList.toggle("isActive");
  });

  // close the custom select when clicking outside.
  document.addEventListener("click", (e) => {
    const didClickedOutside = !elSelectCustom11.contains(e.target);
    if (didClickedOutside) {
      elSelectCustom11.classList.remove("isActive");
    }
  });
}

// Стены: поризованный блок 2 (12)

const elSelectCustom12 = document.getElementsByClassName("js-selectCustom12")[0];

if (elSelectCustom12) {
  const elSelectCustomValue12 = elSelectCustom12.children[0];
  const elSelectCustomOptions12 = elSelectCustom12.children[1];
  const defaultLabel12 = elSelectCustomValue12.getAttribute("data-value");

  // Listen for each custom option click
  Array.from(elSelectCustomOptions12.children).forEach(function (elOption) {
    elOption.addEventListener("click", (e) => {
      // Update custom select text too
      elSelectCustomValue12.textContent = e.target.textContent;
      // Close select
      elSelectCustom12.classList.remove("isActive");
    });
  });

  // Toggle select on label click
  elSelectCustomValue12.addEventListener("click", (e) => {
    elSelectCustom12.classList.toggle("isActive");
  });

  // close the custom select when clicking outside.
  document.addEventListener("click", (e) => {
    const didClickedOutside = !elSelectCustom12.contains(e.target);
    if (didClickedOutside) {
      elSelectCustom12.classList.remove("isActive");
    }
  });
}

// Клики на карты фундмамента

const selectorCards = document.getElementsByClassName(
  "calculator__settings-main-card"
);
const selectors = document.getElementsByClassName("calculator__selecters");

if (selectorCards) {
  for (let i = 0; i < selectorCards.length; i++) {
    selectorCards[i].addEventListener("click", () => {
      for (let j = 0; j < selectorCards.length; j++) {
        selectorCards[j].classList.remove(
          "calculator__settings-main-card_active"
        );
        selectorCards[j].lastElementChild.classList.remove(
          "calculator__selecters_active"
        );
      }

      selectorCards[i].classList.add(
        "calculator__settings-main-card_active"
      );

      selectorCards[i].lastElementChild.classList.add(
        "calculator__selecters_active"
      );
    });
  }
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