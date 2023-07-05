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