import Swiper from './swiper'

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
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
    loop: true,  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
});

const bullet = document.querySelectorAll('.swiper-pagination-bullet');

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
  thumbs: {
    swiper: swiper3,
  },
  pagination: {
    el: '.swiper-pagination2',
  },
  breakpoints: {
    100: {
      
    },
    600: {
      thumbs: {
        swiper: swiper3,
      },
    },
  },
});

const swiperPrev = document.getElementById("swiperPrev");
const swiperNext = document.getElementById("swiperNext");

if (swiperPrev && swiperNext ) {
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
  slidesPerView: 2,

  pagination: {
    el: '.swiper-pagination4',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-next4',
    prevEl: '.swiper-prev4',
  },
});

const swiperPrev4 = document.getElementById("swiper-next4");
const swiperNext4 = document.getElementById("swiper-prev4");

if (swiperPrev4 && swiperNext4 ) {
  swiperPrev4.addEventListener("click", () => {
    swiper4.slidePrev();
  });
  swiperNext4.addEventListener("click", () => {
    swiper4.slideNext();
  });
}

const swiper5 = new Swiper('.swiper5', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 23,
  slidesPerView: 4,

  pagination: {
    el: '.swiper-pagination5',
    clickable: true,
  },
});

const swiper6 = new Swiper('.swiper6', {
  direction: 'horizontal',
  loop: true,

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