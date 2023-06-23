const btn1 = document.getElementById("radio-1");
const btn2 = document.getElementById("radio-2");
const tab1 = document.querySelector('.gallery__images1');
const tab2 = document.querySelector('.gallery__images2');
const input = document.querySelectorAll('.gallery__input');

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('change', () => {

        if (btn1.checked) 
        {
            tab1.style.display = 'flex';
            tab2.style.display = 'none';
        } 
        else if (btn2.checked) 
        {
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
        if (btn1_2.checked) 
        {
            tab1_2.style.display = 'block';
            tab2_2.style.display = 'none';
        } 
        else if (btn2_2.checked) 
        {
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
        if (btn1_3.checked) 
        {
            tab1_3.style.display = 'block';
            tab2_3.style.display = 'none';
        } 
        else if (btn2_3.checked) 
        {
            tab1_3.style.display = 'none';
            tab2_3.style.display = 'block';
        }
    })
};