// КалькуляторНачало
var secretKey = document.querySelector('.calculator__secret-key');
if (secretKey) {
    var changeSteps = function changeSteps() {
        // step1
        var step1_change = document.querySelector('.step1_found_active');
        if (step1_change) {
            var card = step1_change.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild;
            var card_img = step1_change.firstElementChild.getAttribute("src");
            var card_material = step1_change.lastElementChild.parentElement.children[1].innerHTML;
            var card_thick = card.innerHTML;
            var price_work = card.getAttribute('data-price-work');
            var price_materials = card.getAttribute('data-price-materials');
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
        }

        //step2 floor1
        var step2_floor1_change = document.querySelector('.step2_wall_floor1_active');
        if (step2_floor1_change) {
            var _card = step2_floor1_change;
            var _card_img = step2_floor1_change.firstElementChild.getAttribute("src");
            var _card_material = step2_floor1_change.lastElementChild.parentElement.children[1].innerHTML;
            var _card_thick = parseFloat(step2_floor1_change.lastElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML);
            var card_height = parseFloat(step2_floor1_change.lastElementChild.lastElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML);
            wall_height = card_height;
            var fifth_wall = 0;
            if (parseInt(step1_width.value) >= parseInt(step1_length.value)) {
                if (step1_width.value == '') {
                    fifth_wall = 0;
                } else {
                    fifth_wall = parseInt(step1_width.value);
                }
            } else {
                if (step1_length.value == '') {
                    fifth_wall = 0;
                } else {
                    fifth_wall = parseInt(step1_length.value);
                }
            }
            step2_volume.innerHTML = parseFloat(step2_volume.innerHTML) - parseFloat(step2_prev_floor1_volume);
            step2_prev_floor1_volume = (parseInt(step1_perimeter.innerHTML) + fifth_wall) * _card_thick * card_height;
            step2_volume.innerHTML = Math.round(parseFloat(step2_volume.innerHTML) + (parseInt(step1_perimeter.innerHTML) + fifth_wall) * _card_thick * card_height * 100) / 100;
            var step2_volume_floor1 = (parseInt(step1_perimeter.innerHTML) + fifth_wall) * _card_thick * card_height;
            var _price_work = _card.getAttribute("data-price-work") * step2_volume_floor1;
            var _price_materials = _card.getAttribute("data-price-materials") * step2_volume_floor1;
            step2_price_work.innerHTML = parseInt(step2_price_work.innerHTML) - step2_prev_floor1_work;
            step2_price_materials.innerHTML = parseInt(step2_price_materials.innerHTML) - step2_prev_floor1_materials;
            step2_price_sum.innerHTML = parseInt(step2_price_sum.innerHTML) - step2_prev_floor1_sum;
            step2_sum.innerHTML = parseInt(step2_sum.innerHTML) - step2_prev_floor1_sum;
            step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step2_prev_floor1_work;
            step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step2_prev_floor1_materials;
            step2_prev_floor1_work = parseInt(_price_work);
            step2_prev_floor1_materials = parseInt(_price_materials);
            step2_prev_floor1_sum = parseInt(_price_materials) + parseInt(_price_work);
            step2_price_work.innerHTML = parseInt(step2_price_work.innerHTML) + parseInt(_price_work);
            step2_price_materials.innerHTML = parseInt(step2_price_materials.innerHTML) + parseInt(_price_materials);
            step2_price_sum.innerHTML = parseInt(step2_price_sum.innerHTML) + parseInt(_price_materials) + parseInt(_price_work);
            step2_sum.innerHTML = parseInt(step2_sum.innerHTML) + parseInt(_price_materials) + parseInt(_price_work);
            step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) + step2_prev_floor1_work;
            step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) + step2_prev_floor1_materials;
            total_sum.innerHTML = parseInt(total_sum.innerHTML) - step2_prev_floor1_totalSum;
            step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step2_prev_floor1_totalSum;
            step2_prev_floor1_totalSum = parseInt(_price_materials) + parseInt(_price_work);
            total_sum.innerHTML = parseInt(total_sum.innerHTML) + step2_prev_floor1_totalSum;
            step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) + step2_prev_floor1_totalSum;

            // Результат
            step2_result.classList.add('calculator__settings-resultStep_active');
            step2_result_img.src = _card_img;
            step2_result_priceWork.innerHTML = parseInt(_price_work);
            step2_result_priceMaterials.innerHTML = parseInt(_price_materials);
            step2_result_priceSum.innerHTML = parseInt(_price_materials) + parseInt(_price_work);
            step2_result_height.innerHTML = card_height;
            step2_result_material.innerHTML = _card_material;
            step2_result_volume.innerHTML = step2_volume_floor1;
            step2_result_thick.innerHTML = _card_thick;
        }

        //step2 floor2
        var step2_floor2_change = document.querySelector('.step2_wall_floor2_active');
        if (step2_floor2_change) {
            var _card2 = step2_floor2_change;
            var _card_img2 = step2_floor2_change.firstElementChild.getAttribute("src");
            var _card_material2 = step2_floor2_change.lastElementChild.parentElement.children[1].innerHTML;
            var _card_thick2 = parseFloat(step2_floor2_change.lastElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML);
            var _card_height = parseFloat(step2_floor2_change.lastElementChild.lastElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML);
            var _fifth_wall = 0;
            if (parseInt(step1_width.value) >= parseInt(step1_length.value)) {
                if (step1_width.value == '') {
                    _fifth_wall = 0;
                } else {
                    _fifth_wall = parseInt(step1_width.value);
                }
            } else {
                if (step1_length.value == '') {
                    _fifth_wall = 0;
                } else {
                    _fifth_wall = parseInt(step1_length.value);
                }
            }
            step2_volume.innerHTML = parseFloat(step2_volume.innerHTML) - parseFloat(step2_prev_floor2_volume);
            step2_prev_floor2_volume = (parseInt(step1_perimeter.innerHTML) + _fifth_wall) * _card_thick2 * _card_height;
            step2_volume.innerHTML = parseFloat(step2_volume.innerHTML) + (parseInt(step1_perimeter.innerHTML) + _fifth_wall) * _card_thick2 * _card_height;
            var step2_volume_floor2 = (parseInt(step1_perimeter.innerHTML) + _fifth_wall) * _card_thick2 * _card_height;
            var _price_work2 = _card2.getAttribute("data-price-work") * step2_volume_floor2;
            var _price_materials2 = _card2.getAttribute("data-price-materials") * step2_volume_floor2;
            step2_price_work.innerHTML = parseInt(step2_price_work.innerHTML) - step2_prev_floor2_work;
            step2_price_materials.innerHTML = parseInt(step2_price_materials.innerHTML) - step2_prev_floor2_materials;
            step2_price_sum.innerHTML = parseInt(step2_price_sum.innerHTML) - step2_prev_floor2_sum;
            step2_sum.innerHTML = parseInt(step2_sum.innerHTML) - step2_prev_floor2_sum;
            step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step2_prev_floor2_work;
            step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step2_prev_floor2_materials;
            step2_prev_floor2_work = parseInt(_price_work2);
            step2_prev_floor2_materials = parseInt(_price_materials2);
            step2_prev_floor2_sum = parseInt(_price_materials2) + parseInt(_price_work2);
            step2_price_work.innerHTML = parseInt(step2_price_work.innerHTML) + parseInt(_price_work2);
            step2_price_materials.innerHTML = parseInt(step2_price_materials.innerHTML) + parseInt(_price_materials2);
            step2_price_sum.innerHTML = parseInt(step2_price_sum.innerHTML) + parseInt(_price_materials2) + parseInt(_price_work2);
            step2_sum.innerHTML = parseInt(step2_sum.innerHTML) + parseInt(_price_materials2) + parseInt(_price_work2);
            step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) + step2_prev_floor2_work;
            step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) + step2_prev_floor2_materials;
            total_sum.innerHTML = parseInt(total_sum.innerHTML) - step2_prev_floor2_totalSum;
            step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step2_prev_floor2_totalSum;
            step2_prev_floor2_totalSum = parseInt(_price_materials2) + parseInt(_price_work2);
            total_sum.innerHTML = parseInt(total_sum.innerHTML) + step2_prev_floor2_totalSum;
            step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) + step2_prev_floor2_totalSum;

            // Результат
            step22_result.classList.add('step2-result-floor2_active');
            step22_result_img.src = _card_img2;
            step22_result_priceWork.innerHTML = parseInt(_price_work2);
            step22_result_priceMaterials.innerHTML = parseInt(_price_materials2);
            step22_result_priceSum.innerHTML = parseInt(_price_materials2) + parseInt(_price_work2);
            step22_result_volume.innerHTML = step2_volume_floor2;
            step22_result_height.innerHTML = _card_height;
            step22_result_material.innerHTML = _card_material2;
            step22_result_thick.innerHTML = _card_thick2;
        }

        // step3 floor1

        var step3_floor1_change = document.querySelector('.step3_lap_floor1_active');
        if (step3_floor1_change) {
            var _card_img3 = step3_floor1_change.firstElementChild.getAttribute("src");
            var _card_material3 = step3_floor1_change.lastElementChild.parentElement.children[1].innerHTML;
            var _price_work3 = step3_floor1_change.getAttribute('data-price-work') * step3_square.innerHTML;
            var _price_materials3 = step3_floor1_change.getAttribute('data-price-materials') * step3_square.innerHTML;
            step3_price_work.innerHTML = parseInt(step3_price_work.innerHTML) - step3_prev_floor1_work;
            step3_price_materials.innerHTML = parseInt(step3_price_materials.innerHTML) - step3_prev_floor1_materials;
            step3_price_sum.innerHTML = parseInt(step3_price_sum.innerHTML) - step3_prev_floor1_sum;
            step3_sum.innerHTML = parseInt(step3_sum.innerHTML) - step3_prev_floor1_sum;
            step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step3_prev_floor1_work;
            step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step3_prev_floor1_materials;
            step3_prev_floor1_work = _price_work3;
            step3_prev_floor1_materials = _price_materials3;
            step3_prev_floor1_sum = _price_work3 + _price_materials3;
            step3_price_work.innerHTML = parseInt(step3_price_work.innerHTML) + _price_work3;
            step3_price_materials.innerHTML = parseInt(step3_price_materials.innerHTML) + _price_materials3;
            step3_price_sum.innerHTML = parseInt(step3_price_sum.innerHTML) + parseInt(_price_materials3) + parseInt(_price_work3);
            step3_sum.innerHTML = parseInt(step3_sum.innerHTML) + parseInt(_price_materials3) + parseInt(_price_work3);
            step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) + step3_prev_floor1_work;
            step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) + step3_prev_floor1_materials;
            total_sum.innerHTML = parseInt(total_sum.innerHTML) - step3_prev_floor1_totalSum;
            step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step3_prev_floor1_totalSum;
            step3_prev_floor1_totalSum = parseInt(_price_materials3) + parseInt(_price_work3);
            total_sum.innerHTML = parseInt(total_sum.innerHTML) + step3_prev_floor1_totalSum;
            step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) + step3_prev_floor1_totalSum;

            // Результат
            step3_result.classList.add('calculator__settings-resultStep_active');
            step3_result_img.src = _card_img3;
            step3_result_priceWork.innerHTML = parseInt(_price_work3);
            step3_result_priceMaterials.innerHTML = parseInt(_price_materials3);
            step3_result_priceSum.innerHTML = parseInt(_price_materials3) + parseInt(_price_work3);
            step3_result_material.innerHTML = _card_material3;
            step3_result_square.innerHTML = step3_square.innerHTML;
        }

        // step3 floor2
        var step3_floor2_change = document.querySelector('.step3_lap_floor2_active');
        if (step3_floor2_change) {
            var _card_img4 = step3_floor2_change.firstElementChild.getAttribute("src");
            var _card_material4 = step3_floor2_change.lastElementChild.parentElement.children[1].innerHTML;
            var _price_work4 = step3_floor2_change.getAttribute('data-price-work') * step3_square.innerHTML;
            var _price_materials4 = step3_floor2_change.getAttribute('data-price-materials') * step3_square.innerHTML;
            step3_price_work.innerHTML = parseInt(step3_price_work.innerHTML) - step3_prev_floor2_work;
            step3_price_materials.innerHTML = parseInt(step3_price_materials.innerHTML) - step3_prev_floor2_materials;
            step3_price_sum.innerHTML = parseInt(step3_price_sum.innerHTML) - step3_prev_floor2_sum;
            step3_sum.innerHTML = parseInt(step3_sum.innerHTML) - step3_prev_floor2_sum;
            step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step3_prev_floor2_work;
            step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step3_prev_floor2_materials;
            step3_prev_floor2_work = _price_work4;
            step3_prev_floor2_materials = _price_materials4;
            step3_prev_floor2_sum = _price_work4 + _price_materials4;
            step3_price_work.innerHTML = parseInt(step3_price_work.innerHTML) + _price_work4;
            step3_price_materials.innerHTML = parseInt(step3_price_materials.innerHTML) + _price_materials4;
            step3_price_sum.innerHTML = parseInt(step3_price_sum.innerHTML) + parseInt(_price_materials4) + parseInt(_price_work4);
            step3_sum.innerHTML = parseInt(step3_sum.innerHTML) + parseInt(_price_materials4) + parseInt(_price_work4);
            step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) + step3_prev_floor2_work;
            step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) + step3_prev_floor2_materials;
            total_sum.innerHTML = parseInt(total_sum.innerHTML) - step3_prev_floor2_totalSum;
            step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step3_prev_floor2_totalSum;
            step3_prev_floor2_totalSum = parseInt(_price_materials4) + parseInt(_price_work4);
            total_sum.innerHTML = parseInt(total_sum.innerHTML) + step3_prev_floor2_totalSum;
            step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) + step3_prev_floor2_totalSum;

            // Результат
            step32_result.classList.add('step3-result-floor2_active');
            step32_result_img.src = _card_img4;
            step32_result_priceWork.innerHTML = parseInt(_price_work4);
            step32_result_priceMaterials.innerHTML = parseInt(_price_materials4);
            step32_result_priceSum.innerHTML = parseInt(_price_materials4) + parseInt(_price_work4);
            step32_result_square.innerHTML = step3_square.innerHTML;
            step32_result_material.innerHTML = _card_material4;
        }

        //step4 
        var step4_change = document.querySelector('.step4_roof_active');
        if (step4_change) {
            var _card_img5 = step4_change.firstElementChild.getAttribute("src");
            var _card_material5 = step4_change.lastElementChild.parentElement.children[1].innerHTML;
            var _price_work5 = step4_change.getAttribute('data-price-work');
            var _price_materials5 = step4_change.getAttribute('data-price-materials');
            step4_square.innerHTML = Math.round(parseInt(step1_square.innerHTML) * 1.6);
            step4_price_work.innerHTML = _price_work5 * step4_square.innerHTML;
            step4_price_materials.innerHTML = _price_materials5 * step4_square.innerHTML;
            step4_price_sum.innerHTML = parseInt(step4_price_work.innerHTML) + parseInt(step4_price_materials.innerHTML);
            step4_sum.innerHTML = parseInt(step4_price_work.innerHTML) + parseInt(step4_price_materials.innerHTML);
            total_sum.innerHTML = parseInt(total_sum.innerHTML) - step4_prev_sum;
            step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step4_prev_sum;
            step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step4_prev_materials;
            step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step4_prev_work;
            step4_prev_sum = parseInt(step4_price_work.innerHTML) + parseInt(step4_price_materials.innerHTML);
            step4_prev_materials = parseInt(step4_price_materials.innerHTML);
            step4_prev_work = parseInt(step4_price_work.innerHTML);
            total_sum.innerHTML = parseInt(total_sum.innerHTML) + step4_prev_sum;
            step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) + step4_prev_sum;
            step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) + step4_prev_materials;
            step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) + step4_prev_work;

            // Результат
            step4_result.classList.add('calculator__settings-resultStep_active');
            step4_result_img.src = _card_img5;
            step4_result_priceWork.innerHTML = step4_price_work.innerHTML;
            step4_result_priceMaterials.innerHTML = step4_price_materials.innerHTML;
            step4_result_priceSum.innerHTML = step4_price_sum.innerHTML;
            step4_result_material.innerHTML = _card_material5;
            step4_result_square.innerHTML = step4_square.innerHTML;
        }

        //step6
        var step6_change = document.querySelector('.step5_facade_active');
        if (step6_change) {
            var _card_img6 = step6_change.firstElementChild.getAttribute("src");
            var _card_material6 = step6_change.lastElementChild.parentElement.children[1].innerHTML;
            var ratio = step6_change.getAttribute("data-ratio");
            var card_wall_height = 3.125;
            if (step1_floors.innerHTML == "2") {
                step6_square.innerHTML = Math.round(step1_perimeter.innerHTML * card_wall_height * ratio * 2 * 100) / 100;
            } else {
                step6_square.innerHTML = Math.round(step1_perimeter.innerHTML * card_wall_height * ratio * 100) / 100;
            }
            var _price_work6 = Math.round(step6_change.getAttribute("data-price-work") * step6_square.innerHTML * 100) / 100;
            var _price_materials6 = Math.round(step6_change.getAttribute("data-price-materials") * step6_square.innerHTML * 100) / 100;
            step6_price_work.innerHTML = _price_work6;
            step6_price_materials.innerHTML = _price_materials6;
            step6_price_sum.innerHTML = parseInt(_price_materials6) + parseInt(_price_work6);
            step6_sum.innerHTML = parseInt(_price_materials6) + parseInt(_price_work6);
            total_sum.innerHTML = parseInt(total_sum.innerHTML) - step6_prev_sum;
            step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step6_prev_sum;
            step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step6_prev_materials;
            step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step6_prev_work;
            step6_prev_sum = parseInt(_price_materials6) + parseInt(_price_work6);
            step6_prev_materials = parseInt(step6_price_materials.innerHTML);
            step6_prev_work = parseInt(step6_price_work.innerHTML);
            total_sum.innerHTML = parseInt(total_sum.innerHTML) + step6_prev_sum;
            step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) + step6_prev_sum;
            step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) + step6_prev_materials;
            step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) + step6_prev_work;

            // Результат
            step6_result.classList.add('calculator__settings-resultStep_active');
            step6_result_img.src = _card_img6;
            step6_result_priceWork.innerHTML = step6_price_work.innerHTML;
            step6_result_priceMaterials.innerHTML = step6_price_materials.innerHTML;
            step6_result_priceSum.innerHTML = step6_price_sum.innerHTML;
            step6_result_material.innerHTML = _card_material6;
            step6_result_square.innerHTML = step6_square.innerHTML;
        }
    }; // Сброс
    // Табы
    var caclContents = document.getElementsByClassName("calculator__settings-wrapper");
    var caclSteps = document.getElementsByClassName("calculator__step");
    var calcPrev = document.querySelector(".calculator__prev");
    var calcNext = document.querySelector(".calculator__next");
    var currentContent = null;
    if (caclSteps) {
        for (var i = 0; i < caclSteps.length; i++) {
            caclSteps[i].addEventListener("click", function (e) {
                // кнопки 

                if (step1_width.value === "" || step1_length.value === "") {
                    showError("Не указана ширина или длина строения");
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

                    for (var _i = 0; _i < caclSteps.length; _i++) {
                        caclSteps[_i].classList.remove("calculator__step_active");
                    }
                    for (var _i2 = 0; _i2 < e.target.id; _i2++) {
                        caclSteps[_i2].classList.add("calculator__step_active");
                    }
                    for (var j = 0; j < caclContents.length; j++) {
                        if (e.target.id === caclContents[j].id) {
                            caclContents[j].classList.add("calculator__settings-wrapper_active");
                        } else {
                            caclContents[j].classList.remove("calculator__settings-wrapper_active");
                        }
                    }
                }
            });
        }
    }

    // назад

    if (calcPrev) {
        calcPrev.addEventListener("click", function () {
            currentContent = document.querySelector(".calculator__settings-wrapper_active");
            currentId = currentContent.id - 1;
            calcNext.classList.remove("calculator__next_hide");
            if (currentContent.id == 2) {
                calcPrev.classList.add("calculator__prev_hide");
            } else {
                calcPrev.classList.remove("calculator__prev_hide");
            }
            for (var _i3 = 0; _i3 < caclContents.length; _i3++) {
                caclContents[_i3].classList.remove("calculator__settings-wrapper_active");
            }
            caclContents[currentId - 1].classList.add("calculator__settings-wrapper_active");
            for (var _i4 = 0; _i4 < caclSteps.length; _i4++) {
                caclSteps[_i4].classList.remove("calculator__step_active");
            }
            for (var _i5 = 0; _i5 < currentId; _i5++) {
                caclSteps[_i5].classList.add("calculator__step_active");
            }
        });
    }

    // вперед

    if (calcNext) {
        calcNext.addEventListener("click", function () {
            if (step1_width.value === "" || step1_length.value === "") {
                showError("Не указана ширина или длина строения");
            } else {
                currentContent = document.querySelector(".calculator__settings-wrapper_active");
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
                for (var _i6 = 0; _i6 < caclContents.length; _i6++) {
                    caclContents[_i6].classList.remove("calculator__settings-wrapper_active");
                }
                caclContents[currentId + 1].classList.add("calculator__settings-wrapper_active");
                for (var _i7 = 0; _i7 < caclSteps.length; _i7++) {
                    caclSteps[_i7].classList.remove("calculator__step_active");
                }
                for (var _i8 = 0; _i8 < currentId + 2; _i8++) {
                    caclSteps[_i8].classList.add("calculator__step_active");
                }
            }
        });
    }

    //input 3

    //input 4 (window)

    var rangeInput4 = document.querySelector(".range-input4 input"),
        priceInput4 = document.querySelector(".price-input4 input"),
        range4 = document.querySelector(".slider4 .progress4");
    if (priceInput4) {
        priceInput4.addEventListener("input", function (e) {
            if (e.target.value < 0) {
                e.target.value = 0;
            }
            if (e.target.value > 20) {
                e.target.value = 20;
            }
            rangeInput4.value = e.target.value;
        });
    }
    if (rangeInput4) {
        rangeInput4.addEventListener("input", function (e) {
            priceInput4.value = e.target.value;
            range4.style.left = e.target.value * 5 + "%";
        });
    }

    //input 5 (door)

    var rangeInput5 = document.querySelector(".range-input5 input"),
        priceInput5 = document.querySelector(".price-input5 input"),
        range5 = document.querySelector(".slider5 .progress5");
    if (priceInput5) {
        priceInput5.addEventListener("input", function (e) {
            if (e.target.value < 0) {
                e.target.value = 0;
            }
            if (e.target.value > 20) {
                e.target.value = 20;
            }
            rangeInput5.value = e.target.value;
        });
    }
    if (rangeInput5) {
        rangeInput5.addEventListener("input", function (e) {
            priceInput5.value = e.target.value;
            range5.style.left = e.target.value * 5 + "%";
        });
    }

    // 1. Фундамент

    // Инпуты для фундамента, стен и перекрытий

    var elSelectCust = document.getElementsByClassName("js-selectCustom");
    if (elSelectCust) {
        Array.from(elSelectCust).forEach(function (elSelectCustom) {
            var elSelectCustomValue = elSelectCustom.children[0];
            var elSelectCustomOptions = elSelectCustom.children[1];
            var defaultLabel = elSelectCustomValue.getAttribute("data-value");

            // Listen for each custom option click
            Array.from(elSelectCustomOptions.children).forEach(function (elOption) {
                elOption.addEventListener("click", function (e) {
                    // Update custom select text too
                    elSelectCustomValue.setAttribute("data-price-work", e.target.getAttribute("data-price-work"));
                    elSelectCustomValue.setAttribute("data-price-materials", e.target.getAttribute("data-price-materials"));
                    elSelectCustomValue.textContent = e.target.textContent;

                    // Close select
                    elSelectCustom.classList.remove("isActive");
                });
            });

            // Toggle select on label click
            elSelectCustomValue.addEventListener("click", function (e) {
                elSelectCustom.classList.toggle("isActive");
            });

            // close the custom select when clicking outside.
            document.addEventListener("click", function (e) {
                var didClickedOutside = !elSelectCustom.contains(e.target);
                if (didClickedOutside) {
                    elSelectCustom.classList.remove("isActive");
                }
            });
        });
    }

    // Результат

    var allSteps = document.getElementsByClassName("calculator__settings-resultStep");
    if (allSteps) {
        var _loop = function _loop(_i9) {
            allSteps[_i9].addEventListener("click", function () {
                allSteps[_i9].lastElementChild.classList.toggle("calculator__settings-resultStep-inner_active");
            });
        };
        for (var _i9 = 0; _i9 < allSteps.length; _i9++) {
            _loop(_i9);
        }
    }

    // Табы для 1 и 2 этажа

    var btnChoiceFloor1 = document.querySelector('.btnChoiceFloor1');
    var btnChoiceFloor2 = document.querySelector('.btnChoiceFloor2');
    var floor1 = document.querySelector('.floor1');
    var floor2 = document.querySelector('.floor2');
    if (btnChoiceFloor2) {
        btnChoiceFloor2.addEventListener('click', function () {
            btnChoiceFloor1.classList.remove('calculator__settings-main-btnFloor_active');
            btnChoiceFloor2.classList.add('calculator__settings-main-btnFloor_active');
            floor2.classList.remove('calculator__settings-main-floorHide');
            floor1.classList.add('calculator__settings-main-floorHide');
        });
    }
    if (btnChoiceFloor1) {
        btnChoiceFloor1.addEventListener('click', function () {
            btnChoiceFloor2.classList.remove('calculator__settings-main-btnFloor_active');
            btnChoiceFloor1.classList.add('calculator__settings-main-btnFloor_active');
            floor1.classList.remove('calculator__settings-main-floorHide');
            floor2.classList.add('calculator__settings-main-floorHide');
        });
    }

    // Табы для перекрытий

    var btnChoiceLap1 = document.querySelector('.btnChoiceLap1');
    var btnChoiceLap2 = document.querySelector('.btnChoiceLap2');
    var lap1 = document.querySelector('.lap1');
    var lap2 = document.querySelector('.lap2');
    if (btnChoiceLap1) {
        btnChoiceLap1.addEventListener('click', function () {
            btnChoiceLap1.classList.add('calculator__settings-main-btnLap_active');
            btnChoiceLap2.classList.remove('calculator__settings-main-btnLap_active');
            lap1.classList.remove('calculator__settings-main-lapHide');
            lap2.classList.add('calculator__settings-main-lapHide');
        });
    }
    if (btnChoiceLap2) {
        btnChoiceLap2.addEventListener('click', function () {
            btnChoiceLap1.classList.remove('calculator__settings-main-btnLap_active');
            btnChoiceLap2.classList.add('calculator__settings-main-btnLap_active');
            lap1.classList.add('calculator__settings-main-lapHide');
            lap2.classList.remove('calculator__settings-main-lapHide');
        });
    }

    // Выбор этажа

    var step1_floor1 = document.querySelector('.choose_floor1');
    var step1_floor2 = document.querySelector('.choose_floor2');
    if (step1_floor1) {
        step1_floor1.addEventListener('click', function () {
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
        });
    }
    if (step1_floor2) {
        step1_floor2.addEventListener('click', function () {
            btnChoiceFloor2.classList.remove("calculator__settings-main-btnFloor_hide");
            btnChoiceLap2.classList.remove("calculator__settings-main-btnLap_hide");
        });
    }

    // Step1 (Клики на карты фундмамента)

    var step1_volume = document.querySelector('.step1-volume');
    var step1_price_work = document.querySelector('.step1-price-work');
    var step1_price_materials = document.querySelector('.step1-price-materials');
    var step1_price_sum = document.querySelector('.step1-price-sum');
    var step1_sum = document.querySelector('.step1-sum');
    var step1_prev_work = 0;
    var step1_prev_materials = 0;
    var step1_prev_sum = 0;

    // Результат

    var step1_result = document.querySelector('.step1-result');
    var step1_result_img = step1_result.lastElementChild.firstElementChild.firstElementChild;
    var step1_result_material = step1_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
    var step1_result_volume = step1_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
    var step1_result_thick = step1_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild;
    var step1_result_priceWork = step1_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.parentElement.children[0];
    var step1_result_priceMaterials = step1_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
    var step1_result_priceSum = step1_result.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild;
    var step1Cards = document.getElementsByClassName("step1_found");
    if (step1Cards) {
        var _loop2 = function _loop2(_i10) {
            step1Cards[_i10].addEventListener("click", function () {
                if (step1_width.value === "" || step1_length.value === "") {
                    showError("Не указана ширина или длина строения");
                } else {
                    var card = step1Cards[_i10].lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild;
                    var card_img = step1Cards[_i10].firstElementChild.getAttribute("src");
                    var card_material = step1Cards[_i10].lastElementChild.parentElement.children[1].innerHTML;
                    var card_thick = card.innerHTML;
                    var price_work = card.getAttribute('data-price-work');
                    var price_materials = card.getAttribute('data-price-materials');
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
                    for (var j = 0; j < step1Cards.length; j++) {
                        step1Cards[j].classList.remove("step1_found_active");
                        step1Cards[j].lastElementChild.classList.remove("calculator__selecters_active");
                    }
                    step1Cards[_i10].classList.add("step1_found_active");
                    step1Cards[_i10].lastElementChild.classList.add("calculator__selecters_active");
                }
            });
        };
        for (var _i10 = 0; _i10 < step1Cards.length; _i10++) {
            _loop2(_i10);
        }
    }

    // Step2 (Клики на карты стен)

    var step2_price_work = document.querySelector('.step2-price-work');
    var step2_price_materials = document.querySelector('.step2-price-materials');
    var step2_price_sum = document.querySelector('.step2-price-sum');
    var step2_sum = document.querySelector('.step2-sum');
    var step2_volume = document.querySelector('.step2-volume');

    // Этаж 1

    var step2_prev_floor1_work = 0;
    var step2_prev_floor1_materials = 0;
    var step2_prev_floor1_sum = 0;
    var step2_prev_floor1_totalSum = 0;
    var step2_prev_floor1_volume = 0;

    // Результат

    var step2_result = document.querySelector('.step2-result');
    var step2_result_img = step2_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
    var step2_result_material = step2_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
    var step2_result_height = step2_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
    var step2_result_volume = step2_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[2].lastElementChild.firstElementChild;
    var step2_result_thick = step2_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[3].lastElementChild.firstElementChild;
    var step2_result_priceWork = step2_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
    var step2_result_priceMaterials = step2_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
    var step2_result_priceSum = step2_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[2].lastElementChild.firstElementChild;
    var step2_floor1_Cards = document.getElementsByClassName("step2_floor1_wall");
    if (step2_floor1_Cards) {
        var _loop3 = function _loop3(_i11) {
            step2_floor1_Cards[_i11].addEventListener("click", function () {
                var card = step2_floor1_Cards[_i11];
                var card_img = step2_floor1_Cards[_i11].firstElementChild.getAttribute("src");
                var card_material = step2_floor1_Cards[_i11].lastElementChild.parentElement.children[1].innerHTML;
                var card_thick = parseFloat(step2_floor1_Cards[_i11].lastElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML);
                var card_height = parseFloat(step2_floor1_Cards[_i11].lastElementChild.lastElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML);
                wall_height = card_height;
                var fifth_wall;
                if (parseInt(step1_width.value) > parseInt(step1_length.value)) {
                    fifth_wall = parseInt(step1_width.value);
                } else {
                    fifth_wall = parseInt(step1_length.value);
                }
                step2_volume.innerHTML = parseFloat(step2_volume.innerHTML) - parseFloat(step2_prev_floor1_volume);
                step2_prev_floor1_volume = (parseInt(step1_perimeter.innerHTML) + fifth_wall) * card_thick * card_height;
                step2_volume.innerHTML = parseFloat(step2_volume.innerHTML) + (parseInt(step1_perimeter.innerHTML) + fifth_wall) * card_thick * card_height;
                var step2_volume_floor1 = (parseInt(step1_perimeter.innerHTML) + fifth_wall) * card_thick * card_height;
                var price_work = card.getAttribute("data-price-work") * step2_volume_floor1;
                var price_materials = card.getAttribute("data-price-materials") * step2_volume_floor1;
                step2_price_work.innerHTML = parseInt(step2_price_work.innerHTML) - step2_prev_floor1_work;
                step2_price_materials.innerHTML = parseInt(step2_price_materials.innerHTML) - step2_prev_floor1_materials;
                step2_price_sum.innerHTML = parseInt(step2_price_sum.innerHTML) - step2_prev_floor1_sum;
                step2_sum.innerHTML = parseInt(step2_sum.innerHTML) - step2_prev_floor1_sum;
                step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step2_prev_floor1_work;
                step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step2_prev_floor1_materials;
                step2_prev_floor1_work = parseInt(price_work);
                step2_prev_floor1_materials = parseInt(price_materials);
                step2_prev_floor1_sum = parseInt(price_materials) + parseInt(price_work);
                step2_price_work.innerHTML = parseInt(step2_price_work.innerHTML) + parseInt(price_work);
                step2_price_materials.innerHTML = parseInt(step2_price_materials.innerHTML) + parseInt(price_materials);
                step2_price_sum.innerHTML = parseInt(step2_price_sum.innerHTML) + parseInt(price_materials) + parseInt(price_work);
                step2_sum.innerHTML = parseInt(step2_sum.innerHTML) + parseInt(price_materials) + parseInt(price_work);
                step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) + step2_prev_floor1_work;
                step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) + step2_prev_floor1_materials;
                total_sum.innerHTML = parseInt(total_sum.innerHTML) - step2_prev_floor1_totalSum;
                step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step2_prev_floor1_totalSum;
                step2_prev_floor1_totalSum = parseInt(price_materials) + parseInt(price_work);
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
                for (var j = 0; j < step2_floor1_Cards.length; j++) {
                    step2_floor1_Cards[j].classList.remove("step2_wall_floor1_active");
                    step2_floor1_Cards[j].lastElementChild.classList.remove("calculator__selecters_active");
                }
                step2_floor1_Cards[_i11].classList.add("step2_wall_floor1_active");
                step2_floor1_Cards[_i11].lastElementChild.classList.add("calculator__selecters_active");
            });
        };
        for (var _i11 = 0; _i11 < step2_floor1_Cards.length; _i11++) {
            _loop3(_i11);
        }
    }

    // Этаж 2

    var step2_prev_floor2_work = 0;
    var step2_prev_floor2_materials = 0;
    var step2_prev_floor2_sum = 0;
    var step2_prev_floor2_totalSum = 0;
    var step2_prev_floor2_volume = 0;

    // Результат

    var step22_result = document.querySelector('.step2-result-floor2');
    var step22_result_img = step22_result.lastElementChild.firstElementChild.firstElementChild;
    var step22_result_material = step22_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
    var step22_result_height = step22_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
    var step22_result_volume = step22_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[2].lastElementChild.firstElementChild;
    var step22_result_thick = step22_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[3].lastElementChild.firstElementChild;
    var step22_result_priceWork = step22_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
    var step22_result_priceMaterials = step22_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
    var step22_result_priceSum = step22_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[2].lastElementChild.firstElementChild;
    var step2_floor2_Cards = document.getElementsByClassName("step2_floor2_wall");
    if (step2_floor2_Cards) {
        var _loop4 = function _loop4(_i12) {
            step2_floor2_Cards[_i12].addEventListener("click", function () {
                var card = step2_floor2_Cards[_i12];
                var card_img = step2_floor2_Cards[_i12].firstElementChild.getAttribute("src");
                var card_material = step2_floor2_Cards[_i12].lastElementChild.parentElement.children[1].innerHTML;
                var card_thick = parseFloat(step2_floor2_Cards[_i12].lastElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML);
                var card_height = parseFloat(step2_floor2_Cards[_i12].lastElementChild.lastElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML);
                var fifth_wall;
                if (parseInt(step1_width.value) > parseInt(step1_length.value)) {
                    fifth_wall = parseInt(step1_width.value);
                } else {
                    fifth_wall = parseInt(step1_length.value);
                }
                step2_volume.innerHTML = parseFloat(step2_volume.innerHTML) - parseFloat(step2_prev_floor2_volume);
                step2_prev_floor2_volume = (parseInt(step1_perimeter.innerHTML) + fifth_wall) * card_thick * card_height;
                step2_volume.innerHTML = parseFloat(step2_volume.innerHTML) + (parseInt(step1_perimeter.innerHTML) + fifth_wall) * card_thick * card_height;
                var step2_volume_floor2 = (parseInt(step1_perimeter.innerHTML) + fifth_wall) * card_thick * card_height;
                var price_work = card.getAttribute("data-price-work") * step2_volume_floor2;
                var price_materials = card.getAttribute("data-price-materials") * step2_volume_floor2;
                step2_price_work.innerHTML = parseInt(step2_price_work.innerHTML) - step2_prev_floor2_work;
                step2_price_materials.innerHTML = parseInt(step2_price_materials.innerHTML) - step2_prev_floor2_materials;
                step2_price_sum.innerHTML = parseInt(step2_price_sum.innerHTML) - step2_prev_floor2_sum;
                step2_sum.innerHTML = parseInt(step2_sum.innerHTML) - step2_prev_floor2_sum;
                step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step2_prev_floor2_work;
                step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step2_prev_floor2_materials;
                step2_prev_floor2_work = parseInt(price_work);
                step2_prev_floor2_materials = parseInt(price_materials);
                step2_prev_floor2_sum = parseInt(price_materials) + parseInt(price_work);
                step2_price_work.innerHTML = parseInt(step2_price_work.innerHTML) + parseInt(price_work);
                step2_price_materials.innerHTML = parseInt(step2_price_materials.innerHTML) + parseInt(price_materials);
                step2_price_sum.innerHTML = parseInt(step2_price_sum.innerHTML) + parseInt(price_materials) + parseInt(price_work);
                step2_sum.innerHTML = parseInt(step2_sum.innerHTML) + parseInt(price_materials) + parseInt(price_work);
                step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) + step2_prev_floor2_work;
                step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) + step2_prev_floor2_materials;
                total_sum.innerHTML = parseInt(total_sum.innerHTML) - step2_prev_floor2_totalSum;
                step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step2_prev_floor2_totalSum;
                step2_prev_floor2_totalSum = parseInt(price_materials) + parseInt(price_work);
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
                for (var j = 0; j < step2_floor2_Cards.length; j++) {
                    step2_floor2_Cards[j].classList.remove("step2_wall_floor2_active");
                    step2_floor2_Cards[j].lastElementChild.classList.remove("calculator__selecters_active");
                }
                step2_floor2_Cards[_i12].classList.add("step2_wall_floor2_active");
                step2_floor2_Cards[_i12].lastElementChild.classList.add("calculator__selecters_active");
            });
        };
        for (var _i12 = 0; _i12 < step2_floor2_Cards.length; _i12++) {
            _loop4(_i12);
        }
    }

    // Step3 (Клики на карты перекрытий)

    var step3_price_work = document.querySelector('.step3-price-work');
    var step3_price_materials = document.querySelector('.step3-price-materials');
    var step3_price_sum = document.querySelector('.step3-price-sum');
    var step3_sum = document.querySelector('.step3-sum');

    // Этаж 1

    var step3_prev_floor1_work = 0;
    var step3_prev_floor1_materials = 0;
    var step3_prev_floor1_sum = 0;
    var step3_prev_floor1_totalSum = 0;

    // Результат

    var step3_result = document.querySelector('.step3-result');
    var step3_result_img = step3_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
    var step3_result_material = step3_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
    var step3_result_square = step3_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
    var step3_result_priceWork = step3_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
    var step3_result_priceMaterials = step3_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
    var step3_result_priceSum = step3_result.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[2].lastElementChild.firstElementChild;
    var step3_floor1_Cards = document.getElementsByClassName("step3_floor1_lap");
    if (step3_floor1_Cards) {
        var _loop5 = function _loop5(_i13) {
            step3_floor1_Cards[_i13].addEventListener("click", function () {
                var card_img = step3_floor1_Cards[_i13].firstElementChild.getAttribute("src");
                var card_material = step3_floor1_Cards[_i13].lastElementChild.parentElement.children[1].innerHTML;
                var price_work = step3_floor1_Cards[_i13].getAttribute('data-price-work') * step3_square.innerHTML;
                var price_materials = step3_floor1_Cards[_i13].getAttribute('data-price-materials') * step3_square.innerHTML;
                step3_price_work.innerHTML = parseInt(step3_price_work.innerHTML) - step3_prev_floor1_work;
                step3_price_materials.innerHTML = parseInt(step3_price_materials.innerHTML) - step3_prev_floor1_materials;
                step3_price_sum.innerHTML = parseInt(step3_price_sum.innerHTML) - step3_prev_floor1_sum;
                step3_sum.innerHTML = parseInt(step3_sum.innerHTML) - step3_prev_floor1_sum;
                step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step3_prev_floor1_work;
                step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step3_prev_floor1_materials;
                step3_prev_floor1_work = price_work;
                step3_prev_floor1_materials = price_materials;
                step3_prev_floor1_sum = price_work + price_materials;
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
                for (var j = 0; j < step3_floor1_Cards.length; j++) {
                    step3_floor1_Cards[j].classList.remove("step3_lap_floor1_active");
                    step3_floor1_Cards[j].lastElementChild.classList.remove("calculator__selecters_active");
                }
                step3_floor1_Cards[_i13].classList.add("step3_lap_floor1_active");
                step3_floor1_Cards[_i13].lastElementChild.classList.add("calculator__selecters_active");
            });
        };
        for (var _i13 = 0; _i13 < step3_floor1_Cards.length; _i13++) {
            _loop5(_i13);
        }
    }

    // Этаж 2

    var step3_prev_floor2_work = 0;
    var step3_prev_floor2_materials = 0;
    var step3_prev_floor2_sum = 0;
    var step3_prev_floor2_totalSum = 0;

    // Результат

    var step32_result = document.querySelector('.step3-result-floor2');
    var step32_result_img = step32_result.lastElementChild.firstElementChild.firstElementChild;
    var step32_result_material = step32_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
    var step32_result_square = step32_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
    var step32_result_priceWork = step32_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[0].lastElementChild.firstElementChild;
    var step32_result_priceMaterials = step32_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
    var step32_result_priceSum = step32_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[2].lastElementChild.firstElementChild;
    var step3_floor2_Cards = document.getElementsByClassName("step3_floor2_lap");
    if (step3_floor2_Cards) {
        var _loop6 = function _loop6(_i14) {
            step3_floor2_Cards[_i14].addEventListener("click", function () {
                var card_img = step3_floor2_Cards[_i14].firstElementChild.getAttribute("src");
                var card_material = step3_floor2_Cards[_i14].lastElementChild.parentElement.children[1].innerHTML;
                var price_work = step3_floor2_Cards[_i14].getAttribute('data-price-work') * step3_square.innerHTML;
                var price_materials = step3_floor2_Cards[_i14].getAttribute('data-price-materials') * step3_square.innerHTML;
                step3_price_work.innerHTML = parseInt(step3_price_work.innerHTML) - step3_prev_floor2_work;
                step3_price_materials.innerHTML = parseInt(step3_price_materials.innerHTML) - step3_prev_floor2_materials;
                step3_price_sum.innerHTML = parseInt(step3_price_sum.innerHTML) - step3_prev_floor2_sum;
                step3_sum.innerHTML = parseInt(step3_sum.innerHTML) - step3_prev_floor2_sum;
                step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step3_prev_floor2_work;
                step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step3_prev_floor2_materials;
                step3_prev_floor2_work = price_work;
                step3_prev_floor2_materials = price_materials;
                step3_prev_floor2_sum = price_work + price_materials;
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
                for (var j = 0; j < step3_floor2_Cards.length; j++) {
                    step3_floor2_Cards[j].classList.remove("step3_lap_floor2_active");
                    step3_floor2_Cards[j].lastElementChild.classList.remove("calculator__selecters_active");
                }
                step3_floor2_Cards[_i14].classList.add("step3_lap_floor2_active");
                step3_floor2_Cards[_i14].lastElementChild.classList.add("calculator__selecters_active");
            });
        };
        for (var _i14 = 0; _i14 < step3_floor2_Cards.length; _i14++) {
            _loop6(_i14);
        }
    }

    // Step4 (Клики на карты кровли)

    var step4_price_work = document.querySelector('.step4-price-work');
    var step4_price_materials = document.querySelector('.step4-price-materials');
    var step4_price_sum = document.querySelector('.step4-price-sum');
    var step4_sum = document.querySelector('.step4-sum');
    var step4_square = document.querySelector('.step4-square');
    var step4_prev_work = 0;
    var step4_prev_materials = 0;
    var step4_prev_sum = 0;

    // Результат

    var step4_result = document.querySelector('.step4-result');
    var step4_result_img = step4_result.lastElementChild.firstElementChild.firstElementChild;
    var step4_result_material = step4_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.parentElement.children[0];
    var step4_result_square = step4_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
    var step4_result_priceWork = step4_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.parentElement.children[0];
    var step4_result_priceMaterials = step4_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
    var step4_result_priceSum = step4_result.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild;
    var step4Cards = document.getElementsByClassName("step4_roof");
    if (step4Cards) {
        var _loop7 = function _loop7(_i15) {
            step4Cards[_i15].addEventListener("click", function () {
                var card_img = step4Cards[_i15].firstElementChild.getAttribute("src");
                var card_material = step4Cards[_i15].lastElementChild.parentElement.children[1].innerHTML;
                var price_work = step4Cards[_i15].getAttribute('data-price-work');
                var price_materials = step4Cards[_i15].getAttribute('data-price-materials');
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
                step4_prev_materials = parseInt(step4_price_materials.innerHTML);
                step4_prev_work = parseInt(step4_price_work.innerHTML);
                total_sum.innerHTML = parseInt(total_sum.innerHTML) + step4_prev_sum;
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
                for (var j = 0; j < step4Cards.length; j++) {
                    step4Cards[j].classList.remove("step4_roof_active");
                    step4Cards[j].lastElementChild.classList.remove("calculator__selecters_active");
                }
                step4Cards[_i15].classList.add("step4_roof_active");
                step4Cards[_i15].lastElementChild.classList.add("calculator__selecters_active");
            });
        };
        for (var _i15 = 0; _i15 < step4Cards.length; _i15++) {
            _loop7(_i15);
        }
    }

    // Step5 (Клики на карты лестницы)

    var step5_price_work = document.querySelector('.step5-price-work');
    var step5_price_materials = document.querySelector('.step5-price-materials');
    var step5_price_sum = document.querySelector('.step5-price-sum');
    var step5_sum = document.querySelector('.step5-sum');
    var step5_prev_work = 0;
    var step5_prev_materials = 0;
    var step5_prev_sum = 0;

    // Результат

    var step5_result = document.querySelector('.step5-result');
    var step5_result_img = step5_result.lastElementChild.firstElementChild.firstElementChild;
    var step5_result_material = step5_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.parentElement.children[0];
    var step5_result_priceWork = step5_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.parentElement.children[0];
    var step5_result_priceMaterials = step5_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
    var step5_result_priceSum = step5_result.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild;
    var step5Cards = document.getElementsByClassName("step5_ladder");
    if (step5Cards) {
        var _loop8 = function _loop8(_i16) {
            step5Cards[_i16].addEventListener("click", function (e) {
                var card_img = step5Cards[_i16].firstElementChild.getAttribute("src");
                var card_material = step5Cards[_i16].lastElementChild.parentElement.children[1].innerHTML;
                var price_work = step5Cards[_i16].getAttribute('data-price-work');
                var price_materials = step5Cards[_i16].getAttribute('data-price-materials');
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
                for (var j = 0; j < step5Cards.length; j++) {
                    // стили

                    step5Cards[j].classList.remove("step5_ladder_active");
                    step5Cards[j].lastElementChild.classList.remove("calculator__selecters_active");
                }
                step5Cards[_i16].classList.add("step5_ladder_active");
                step5Cards[_i16].lastElementChild.classList.add("calculator__selecters_active");
            });
        };
        for (var _i16 = 0; _i16 < step5Cards.length; _i16++) {
            _loop8(_i16);
        }
    }

    // Step6 (Клики на карты фасад)

    var step6_price_work = document.querySelector('.step6-price-work');
    var step6_price_materials = document.querySelector('.step6-price-materials');
    var step6_price_sum = document.querySelector('.step6-price-sum');
    var step6_sum = document.querySelector('.step6-sum');
    var step6_square = document.querySelector('.step6-square');
    var step6_prev_work = 0;
    var step6_prev_materials = 0;
    var step6_prev_sum = 0;

    // Результат

    var step6_result = document.querySelector('.step6-result');
    var step6_result_img = step6_result.lastElementChild.firstElementChild.firstElementChild;
    var step6_result_material = step6_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.lastElementChild.parentElement.children[0];
    var step6_result_square = step6_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
    var step6_result_priceWork = step6_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.parentElement.children[0];
    var step6_result_priceMaterials = step6_result.lastElementChild.lastElementChild.lastElementChild.firstElementChild.parentElement.children[1].lastElementChild.firstElementChild;
    var step6_result_priceSum = step6_result.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild;
    var step6Cards = document.getElementsByClassName("step6_facade");
    if (step6Cards) {
        var _loop9 = function _loop9(_i17) {
            step6Cards[_i17].addEventListener("click", function () {
                var card_img = step6Cards[_i17].firstElementChild.getAttribute("src");
                var card_material = step6Cards[_i17].lastElementChild.parentElement.children[1].innerHTML;
                var ratio = step6Cards[_i17].getAttribute("data-ratio");
                var card_wall_height = 3.125;
                if (step1_floors.innerHTML == "2") {
                    step6_square.innerHTML = Math.round(step1_perimeter.innerHTML * card_wall_height * ratio * 2 * 100) / 100;
                } else {
                    step6_square.innerHTML = Math.round(step1_perimeter.innerHTML * card_wall_height * ratio * 100) / 100;
                }
                var price_work = Math.round(step6Cards[_i17].getAttribute("data-price-work") * step6_square.innerHTML * 100) / 100;
                var price_materials = Math.round(step6Cards[_i17].getAttribute("data-price-materials") * step6_square.innerHTML * 100) / 100;
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
                for (var j = 0; j < step6Cards.length; j++) {
                    step6Cards[j].classList.remove("step5_facade_active");
                    step6Cards[j].lastElementChild.classList.remove("calculator__selecters_active");
                }
                step6Cards[_i17].classList.add("step5_facade_active");
                step6Cards[_i17].lastElementChild.classList.add("calculator__selecters_active");
            });
        };
        for (var _i17 = 0; _i17 < step6Cards.length; _i17++) {
            _loop9(_i17);
        }
    }

    // Step7 Окна, Двери

    var step7_sum = document.querySelector('.step7-sum');
    var step7_window = document.querySelector('.calc-window');
    var step7_window_range = document.querySelector('.calc-window-range');
    var step7_prev_windowPrice = 0;
    var step7_door = document.querySelector('.calc-door');
    var step7_door_range = document.querySelector('.calc-door-range');
    var step7_prev_doorPrice = 0;

    // Результат
    var step7_result = document.querySelector('.step7-result');
    var step7_result_windows = step7_result.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
    var step7_result_doors = step7_result.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.firstElementChild;
    var step7_result_priceSum = step7_result.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild;
    step7_window.addEventListener('input', function () {
        var price = step7_window.getAttribute('data-price') * step7_window.value;
        step7_sum.innerHTML = parseInt(step7_sum.innerHTML) - step7_prev_windowPrice + price;
        total_sum.innerHTML = parseInt(total_sum.innerHTML) - step7_prev_windowPrice + price;
        step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step7_prev_windowPrice + price;
        step7_prev_windowPrice = price;

        // Результат
        step7_result.classList.add('calculator__settings-resultStep_active');
        step7_result_windows.innerHTML = step7_window.value;
        step7_result_priceSum.innerHTML = step7_sum.innerHTML;
    });
    step7_window_range.addEventListener('input', function () {
        var price = step7_window.getAttribute('data-price') * step7_window.value;
        step7_sum.innerHTML = parseInt(step7_sum.innerHTML) - step7_prev_windowPrice + price;
        total_sum.innerHTML = parseInt(total_sum.innerHTML) - step7_prev_windowPrice + price;
        step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step7_prev_windowPrice + price;
        step7_prev_windowPrice = price;

        // Результат
        step7_result.classList.add('calculator__settings-resultStep_active');
        step7_result_windows.innerHTML = step7_window.value;
        step7_result_priceSum.innerHTML = step7_sum.innerHTML;
    });
    step7_door.addEventListener('input', function () {
        var price = step7_door.getAttribute('data-price') * step7_door.value;
        step7_sum.innerHTML = parseInt(step7_sum.innerHTML) - step7_prev_doorPrice + price;
        total_sum.innerHTML = parseInt(total_sum.innerHTML) - step7_prev_doorPrice + price;
        step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step7_prev_doorPrice + price;
        step7_prev_doorPrice = price;

        // Результат
        step7_result.classList.add('calculator__settings-resultStep_active');
        step7_result_doors.innerHTML = step7_door.value;
        step7_result_priceSum.innerHTML = step7_sum.innerHTML;
    });
    step7_door_range.addEventListener('input', function () {
        var price = step7_door.getAttribute('data-price') * step7_door.value;
        step7_sum.innerHTML = parseInt(step7_sum.innerHTML) - step7_prev_doorPrice + price;
        total_sum.innerHTML = parseInt(total_sum.innerHTML) - step7_prev_doorPrice + price;
        step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step7_prev_doorPrice + price;
        step7_prev_doorPrice = price;

        // Результат
        step7_result.classList.add('calculator__settings-resultStep_active');
        step7_result_doors.innerHTML = step7_door.value;
        step7_result_priceSum.innerHTML = step7_sum.innerHTML;
    });

    //Логика

    var total_sum = document.querySelector('.total-sum');
    var step8_total_sum = document.querySelector('.step8-total-sum');
    var step8_materials_sum = document.querySelector('.step8-materials-sum');
    var step8_work_sum = document.querySelector('.step8-work-sum');
    var step1_width = document.querySelector('.step1-width');
    var step1_length = document.querySelector('.step1-length');
    var step1_square = document.querySelector('.step1-square');
    var step1_perimeter = document.querySelector('.step1-perimetr');
    var step1_floors = document.querySelector('.step1-floors');
    var step1_floorsInputs = document.querySelectorAll('.calculator__checkbox');
    var step3_square = document.querySelector('.step3-square');
    var wall_height;
    step1_width.addEventListener('input', function () {
        if (step1_width.value < 1) {
            step1_width.value = "";
        }
        if (step1_width.value > 349) {
            step1_width.value = 349;
        }
        step1_square.innerHTML = step1_width.value * step1_length.value;
        step1_perimeter.innerHTML = step1_width.value * 2 + step1_length.value * 2;
        step3_square.innerHTML = step1_width.value * step1_length.value;
        changeSteps();
    });
    step1_length.addEventListener('input', function () {
        if (step1_length.value < 1) {
            step1_length.value = "";
        }
        if (step1_length.value > 349) {
            step1_length.value = 349;
        }
        step1_square.innerHTML = step1_width.value * step1_length.value;
        step1_perimeter.innerHTML = step1_width.value * 2 + step1_length.value * 2;
        step3_square.innerHTML = step1_width.value * step1_length.value;
        changeSteps();
    });
    step1_floorsInputs[0].addEventListener('change', function (e) {
        step1_floors.innerHTML = e.target.value;

        // Step 2 (floor2) clear
        var step22_floor2_active = document.querySelector('.step2_wall_floor2_active');
        if (step22_floor2_active) {
            step2_price_work.innerHTML = parseInt(step2_price_work.innerHTML) - step2_prev_floor2_work;
            step2_price_materials.innerHTML = parseInt(step2_price_materials.innerHTML) - step2_prev_floor2_materials;
            step2_price_sum.innerHTML = parseInt(step2_price_sum.innerHTML) - step2_prev_floor2_sum;
            step2_sum.innerHTML = parseInt(step2_sum.innerHTML) - step2_prev_floor2_sum;
            step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step2_prev_floor2_work;
            step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step2_prev_floor2_materials;
            step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step2_prev_floor2_totalSum;
            total_sum.innerHTML = parseInt(total_sum.innerHTML) - step2_prev_floor2_totalSum;
            step2_volume.innerHTML = parseFloat(step2_volume.innerHTML) - parseFloat(step2_prev_floor2_volume);
            step2_prev_floor2_work = 0;
            step2_prev_floor2_materials = 0;
            step2_prev_floor2_sum = 0;
            step2_prev_floor2_sum = 0;
            step2_prev_floor2_work = 0;
            step2_prev_floor2_materials = 0;
            step2_prev_floor2_totalSum = 0;
            step2_prev_floor2_volume = 0;

            // очистка результата

            step22_floor2_active.classList.remove("step2_wall_floor2_active");
            step22_floor2_active.lastElementChild.classList.remove("calculator__selecters_active");
            step22_result.classList.remove('step2-result-floor2_active');
            step22_result_img.src = "";
            step22_result_priceWork.innerHTML = "";
            step22_result_priceMaterials.innerHTML = "";
            step22_result_priceSum.innerHTML = "";
            step22_result_volume.innerHTML = "";
            step22_result_height.innerHTML = "";
            step22_result_material.innerHTML = "";
            step22_result_thick.innerHTML = "";
        }

        // Step 3 (floor2) clear
        var step32_floor2_active = document.querySelector('.step3_lap_floor2_active');
        if (step32_floor2_active) {
            step3_price_work.innerHTML = parseInt(step3_price_work.innerHTML) - step3_prev_floor2_work;
            step3_price_materials.innerHTML = parseInt(step3_price_materials.innerHTML) - step3_prev_floor2_materials;
            step3_price_sum.innerHTML = parseInt(step3_price_sum.innerHTML) - step3_prev_floor2_sum;
            step3_sum.innerHTML = parseInt(step3_sum.innerHTML) - step3_prev_floor2_sum;
            step8_materials_sum.innerHTML = parseInt(step8_materials_sum.innerHTML) - step3_prev_floor2_work;
            step8_work_sum.innerHTML = parseInt(step8_work_sum.innerHTML) - step3_prev_floor2_materials;
            total_sum.innerHTML = parseInt(total_sum.innerHTML) - step3_prev_floor2_totalSum;
            step8_total_sum.innerHTML = parseInt(step8_total_sum.innerHTML) - step3_prev_floor2_totalSum;
            step3_prev_floor2_work = 0;
            step3_prev_floor2_materials = 0;
            step3_prev_floor2_sum = 0;
            step3_prev_floor2_sum = 0;
            step3_prev_floor2_work = 0;
            step3_prev_floor2_materials = 0;
            step3_prev_floor2_totalSum = 0;
            step3_prev_floor2_totalSum = 0;

            // Очистка результата
            step32_floor2_active.classList.remove("step3_lap_floor2_active");
            step32_floor2_active.lastElementChild.classList.remove("calculator__selecters_active");
            step32_result.classList.remove('step3-result-floor2_active');
            step32_result_img.src = "";
            step32_result_priceWork.innerHTML = "";
            step32_result_priceMaterials.innerHTML = "";
            step32_result_priceSum.innerHTML = "";
            step32_result_square.innerHTML = "";
            step32_result_material.innerHTML = "";
        }

        // Step6 
        var step6_card = document.querySelector('.step5_facade_active');
        if (step6_card) {
            var card_img = step6_card.firstElementChild.getAttribute("src");
            var card_material = step6_card.lastElementChild.parentElement.children[1].innerHTML;
            var ratio = step6_card.getAttribute("data-ratio");
            var card_wall_height = 3.125;
            if (step1_floors.innerHTML == "2") {
                step6_square.innerHTML = Math.round(step1_perimeter.innerHTML * card_wall_height * ratio * 2 * 100) / 100;
            } else {
                step6_square.innerHTML = Math.round(step1_perimeter.innerHTML * card_wall_height * ratio * 100) / 100;
            }
            var price_work = Math.round(step6_card.getAttribute("data-price-work") * step6_square.innerHTML * 100) / 100;
            var price_materials = Math.round(step6_card.getAttribute("data-price-materials") * step6_square.innerHTML * 100) / 100;
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
        }
    });
    step1_floorsInputs[1].addEventListener('change', function (e) {
        step1_floors.innerHTML = e.target.value;

        // Step6 
        var step6_card = document.querySelector('.step5_facade_active');
        if (step6_card) {
            var card_img = step6_card.firstElementChild.getAttribute("src");
            var card_material = step6_card.lastElementChild.parentElement.children[1].innerHTML;
            var ratio = step6_card.getAttribute("data-ratio");
            var card_wall_height = 3.125;
            if (step1_floors.innerHTML == "2") {
                step6_square.innerHTML = Math.round(step1_perimeter.innerHTML * card_wall_height * ratio * 2 * 100) / 100;
            } else {
                step6_square.innerHTML = Math.round(step1_perimeter.innerHTML * card_wall_height * ratio * 100) / 100;
            }
            var price_work = Math.round(step6_card.getAttribute("data-price-work") * step6_square.innerHTML * 100) / 100;
            var price_materials = Math.round(step6_card.getAttribute("data-price-materials") * step6_square.innerHTML * 100) / 100;
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
        }
    });
    var resetBtn = document.querySelector('.calculator__reset');
    resetBtn.addEventListener('click', function () {
        caclSteps[0].click();
        // этажность
        document.querySelector('.choose_floor1').click();
        // Шаг 1
        var step1_reset = document.querySelector('.step1_found_active');
        if (step1_reset) {
            step1_reset.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild.click();
            step1_reset.classList.remove('step1_found_active');
            step1_reset.lastElementChild.classList.remove("calculator__selecters_active");
            step1_volume.innerHTML = "0";
            step1_price_work.innerHTML = "0";
            step1_price_materials.innerHTML = "0";
            step1_price_sum.innerHTML = "0";
            step1_sum.innerHTML = "0";
            step1_prev_work = 0;
            step1_prev_materials = 0;
            step1_prev_sum = 0;
            step1_result.classList.remove('calculator__settings-resultStep_active');
            step1_result_img.src = "";
            step1_result_priceWork.innerHTML = "0";
            step1_result_priceMaterials.innerHTML = "0";
            step1_result_priceSum.innerHTML = "0";
            step1_result_material.innerHTML = "0";
            step1_result_volume.innerHTML = "0";
            step1_result_thick.innerHTML = "0";
        }

        // Шаг 2
        var step2_reset = document.querySelector('.step2_wall_floor1_active');
        if (step2_reset) {
            step2_reset.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.firstElementChild.click();
            step2_reset.classList.remove('step2_wall_floor1_active');
            step2_reset.lastElementChild.classList.remove("calculator__selecters_active");
            step2_price_work.innerHTML = "0";
            step2_price_materials.innerHTML = "0";
            step2_price_sum.innerHTML = "0";
            step2_sum.innerHTML = "0";
            step2_volume.innerHTML = "0";
            step2_prev_floor1_work = 0;
            step2_prev_floor1_materials = 0;
            step2_prev_floor1_sum = 0;
            step2_prev_floor1_totalSum = 0;
            step2_prev_floor1_volume = 0;
            step2_result.classList.remove('calculator__settings-resultStep_active');
            step2_result_img.src = "";
            step2_result_priceWork.innerHTML = "0";
            step2_result_priceMaterials.innerHTML = "0";
            step2_result_priceSum.innerHTML = "0";
            step2_result_height.innerHTML = "0";
            step2_result_material.innerHTML = "0";
            step2_result_volume.innerHTML = "0";
            step2_result_thick.innerHTML = "0";
        }

        // Шаг 3
        var step3_reset = document.querySelector('.step3_lap_floor1_active');
        if (step3_reset) {
            step3_reset.classList.remove('step3_lap_floor1_active');
            step3_reset.lastElementChild.classList.remove("calculator__selecters_active");
            step3_price_work.innerHTML = "0";
            step3_price_materials.innerHTML = "0";
            step3_price_sum.innerHTML = "0";
            step3_sum.innerHTML = "0";
            step3_square.innerHTML = "0";
            step3_prev_floor1_work = 0;
            step3_prev_floor1_materials = 0;
            step3_prev_floor1_sum = 0;
            step3_prev_floor1_totalSum = 0;
            step3_result.classList.remove('calculator__settings-resultStep_active');
            step3_result_img.src = "";
            step3_result_priceWork.innerHTML = "";
            step3_result_priceMaterials.innerHTML = "";
            step3_result_priceSum.innerHTML = "";
            step3_result_material.innerHTML = "";
            step3_result_square.innerHTML = "";
        }

        // Шаг 4
        var step4_reset = document.querySelector('.step4_roof_active');
        if (step4_reset) {
            step4_reset.classList.remove('step4_roof_active');
            step4_reset.lastElementChild.classList.remove("calculator__selecters_active");
            step4_price_work.innerHTML = "0";
            step4_price_materials.innerHTML = "0";
            step4_price_sum.innerHTML = "0";
            step4_sum.innerHTML = "0";
            step4_square.innerHTML = "0";
            step4_prev_work = 0;
            step4_prev_materials = 0;
            step4_prev_sum = 0;
            step4_result.classList.remove('calculator__settings-resultStep_active');
            step4_result_img.src = "";
            step4_result_priceWork.innerHTML = "0";
            step4_result_priceMaterials.innerHTML = "0";
            step4_result_priceSum.innerHTML = "0";
            step4_result_material.innerHTML = "0";
            step4_result_square.innerHTML = "0";
        }

        // Шаг 5
        var step5_reset = document.querySelector('.step5_ladder_active');
        if (step5_reset) {
            step5_reset.classList.remove('step5_ladder_active');
            step5_reset.lastElementChild.classList.remove("calculator__selecters_active");
            step5_price_work.innerHTML = "0";
            step5_price_materials.innerHTML = "0";
            step5_price_sum.innerHTML = "0";
            step5_sum.innerHTML = "0";
            step5_prev_work = 0;
            step5_prev_materials = 0;
            step5_prev_sum = 0;
            step5_result.classList.remove('calculator__settings-resultStep_active');
            step5_result_img.src = "";
            step5_result_priceWork.innerHTML = "0";
            step5_result_priceMaterials.innerHTML = "0";
            step5_result_priceSum.innerHTML = "0";
            step5_result_material.innerHTML = "0";
        }

        // Шаг 6
        var step6_reset = document.querySelector('.step5_facade_active');
        if (step6_reset) {
            step6_reset.classList.remove('step5_facade_active');
            step6_reset.lastElementChild.classList.remove("calculator__selecters_active");
            step6_price_work.innerHTML = "0";
            step6_price_materials.innerHTML = "0";
            step6_price_sum.innerHTML = "0";
            step6_sum.innerHTML = "0";
            step6_square.innerHTML = "0";
            step6_prev_work = 0;
            step6_prev_materials = 0;
            step6_prev_sum = 0;
            step6_result.classList.remove('calculator__settings-resultStep_active');
            step6_result_img.src = "";
            step6_result_priceWork.innerHTML = "0";
            step6_result_priceMaterials.innerHTML = "0";
            step6_result_priceSum.innerHTML = "0";
            step6_result_material.innerHTML = "0";
            step6_result_square.innerHTML = "0";
        }

        // Шаг 7
        step7_sum.innerHTML = "0";
        step7_window.value = "0";
        step7_window_range.value = "0";
        step7_prev_windowPrice = 0;
        step7_door.value = "0";
        step7_door_range.value = "0";
        step7_prev_doorPrice = 0;
        step7_result.classList.remove('calculator__settings-resultStep_active');
        step7_result_windows.innerHTML = "0";
        step7_result_doors.innerHTML = "0";
        step7_result_priceSum.innerHTML = "0";

        // Шаг 1. Размеры и этажность
        step1_width.value = '';
        step1_length.value = '';
        // основные
        total_sum.innerHTML = '0';
        step8_total_sum.innerHTML = '0';
        step8_materials_sum.innerHTML = '0';
        step8_work_sum.innerHTML = '0';
        step1_square.innerHTML = '0';
        step1_perimeter.innerHTML = '0';
        step1_floors.innerHTML = '0';
    });

    // Окно ошибки

    var showError = function showError(text) {
        var card_error = document.querySelector('.calculator__error');
        card_error.classList.add('calculator__error_active');
        var calc_text = document.querySelector('.calculator__error_text');
        calc_text.innerHTML = text;
    };
    var closeWrapperError = document.querySelector('.calculator__error');
    if (closeWrapperError) {
        closeWrapperError.addEventListener('click', function () {
            closeWrapperError.classList.remove('calculator__error_active');
        });
    }
    var closeError = document.querySelector('.calculator__error-close-img');
    if (closeError) {
        closeError.addEventListener('click', function () {
            closeWrapperError.classList.remove('calculator__error_active');
        });
    }
    var innerError = document.querySelector('.calculator__error-inner');
    if (innerError) {
        innerError.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }

    // send
    var mainCalcBtn = document.querySelector('.main-calc-btn');
    var _feedback = document.querySelector('.feedback');

    // Проверка все ли шаги пройдены
    if (mainCalcBtn) {
        mainCalcBtn.addEventListener('click', function () {
            var step1_exsist = document.querySelector('.step1_found_active');
            var step2_exsist = document.querySelector('.step2_wall_floor1_active');
            var step3_exsist = document.querySelector('.step3_lap_floor1_active');
            var step4_exsist = document.querySelector('.step4_roof_active');
            var step5_exsist = document.querySelector('.step5_ladder_active');
            var step6_exsist = document.querySelector('.step5_facade_active');
            if (step1_exsist && step2_exsist && step3_exsist && step4_exsist && step5_exsist && step6_exsist && step7_window.value > 0 && step7_door.value > 0) {
                _feedback.classList.add('feedback__open');
            } else {
                showError("Пройдены не все шаги!");
            }
        });
    }
    var calc_name = document.querySelector('.calc-name');
    var calc_phone = document.querySelector('.calc-phone');
    var calc_email = document.querySelector('.calc-email');
    var windoorimg = document.querySelector('.calculator__windoor');
    var calc_onserver = document.querySelector('.calc_onserver');
    calc_onserver.addEventListener('click', function () {
        var validateEmailRegex = /^\S+@\S+\.\S+$/;
        if (calc_name.value !== "" && calc_phone.value !== "" && calc_email.value !== "" && validateEmailRegex.test(calc_email.value)) {
            var result_obj = {
                info: {
                    name: "",
                    phone: "",
                    email: ""
                },
                size: {
                    width: step1_width.innerHTML,
                    length: step1_length.innerHTML,
                    floors: step1_floors.innerHTML,
                    perimetr: step1_perimeter.innerHTML,
                    square: step1_square.innerHTML
                },
                foundation: {
                    photo: step1_result_img.src,
                    material: step1_result_material.innerHTML,
                    volume: step1_result_volume.innerHTML,
                    thick: step1_result_thick.innerHTML,
                    price_work: step1_result_priceWork.innerHTML,
                    price_material: step1_result_priceMaterials.innerHTML,
                    price_sum: step1_result_priceSum.innerHTML
                },
                walls: {
                    wall_floor1: {
                        photo: step2_result_img.src,
                        material: step2_result_material.innerHTML,
                        height: step2_result_height.innerHTML,
                        volume: step2_result_volume.innerHTML,
                        thick: step2_result_thick.innerHTML,
                        price_work: step2_result_priceWork.innerHTML,
                        price_material: step2_result_priceMaterials.innerHTML,
                        price_sum: step2_result_priceSum.innerHTML
                    },
                    wall_floor2: {
                        photo: step22_result_img.src,
                        material: step22_result_material.innerHTML,
                        height: step22_result_height.innerHTML,
                        volume: step22_result_volume.innerHTML,
                        thick: step22_result_thick.innerHTML,
                        price_work: step22_result_priceWork.innerHTML,
                        price_material: step22_result_priceMaterials.innerHTML,
                        price_sum: step22_result_priceSum.innerHTML
                    }
                },
                laps: {
                    lap_floor1: {
                        photo: step3_result_img.src,
                        material: step3_result_material.innerHTML,
                        square: step3_result_square.innerHTML,
                        price_work: step3_result_priceWork.innerHTML,
                        price_material: step3_result_priceMaterials.innerHTML,
                        price_sum: step3_result_priceSum.innerHTML
                    },
                    lap_floor2: {
                        photo: step32_result_img.src,
                        material: step32_result_priceMaterials.innerHTML,
                        square: step32_result_square.innerHTML,
                        price_work: step32_result_priceWork.innerHTML,
                        price_material: step32_result_material.innerHTML,
                        price_sum: step32_result_priceSum.innerHTML
                    }
                },
                roof: {
                    photo: step4_result_img.src,
                    material: step4_result_material.innerHTML,
                    square: step4_result_square.innerHTML,
                    price_work: step4_result_priceWork.innerHTML,
                    price_material: step4_result_priceMaterials.innerHTML,
                    price_sum: step4_result_priceSum.innerHTML
                },
                ladder: {
                    photo: step5_result_img.src,
                    material: step5_result_material.innerHTML,
                    price_work: step5_result_priceWork.innerHTML,
                    price_material: step5_result_priceMaterials.innerHTML,
                    price_sum: step5_result_priceSum.innerHTML
                },
                facade: {
                    photo: step6_result_img.src,
                    material: step6_result_material.innerHTML,
                    square: step6_result_square.innerHTML,
                    price_work: step6_result_priceWork.innerHTML,
                    price_material: step6_result_priceMaterials.innerHTML,
                    price_sum: step6_result_priceSum.innerHTML
                },
                doorsandwindows: {
                    photo: windoorimg.src,
                    count_windos: step7_result_windows.innerHTML,
                    count_doors: step7_result_doors.innerHTML,
                    price_sum: step7_result_priceSum.innerHTML
                },
                cost: {
                    price_work: step8_work_sum.innerHTML,
                    price_material: step8_materials_sum.innerHTML,
                    price_sum: step8_total_sum.innerHTML
                }
            };
            var response = fetch('/form.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(result_obj)
            });
            _feedback.click();
        }
    });
}

// Форма со сметой

var feedback = document.querySelector('.feedback-smeta');
var feedbackForm = document.querySelector('.feedback__form-smeta');
var mainBtn = document.querySelector('.main-calc-smeta');
if (mainBtn) {
    mainBtn.addEventListener('click', function () {
        feedback.classList.add('feedback__open');
    });
}
if (feedback) {
    feedback.addEventListener('click', function () {
        feedback.classList.remove('feedback__open');
    });
}
if (feedbackForm) {
    feedbackForm.addEventListener('click', function (e) {
        e.stopPropagation();
    });
}
// КалькуляторКонец