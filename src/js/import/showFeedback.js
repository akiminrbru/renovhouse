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