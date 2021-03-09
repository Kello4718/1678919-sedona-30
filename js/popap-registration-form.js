const form = document.querySelector('form');
const formOnclick = document.querySelector('.registration-form-onclick');
const formOffclick = document.querySelector('.registration-form-offclick');
const searchButton = document.querySelector('.search-hotel__button');
let checkingOut = document.querySelector('.checking-out');

searchButton.addEventListener('click', function (defoult) {
defoult.preventDefault();
form.classList.toggle('registration-form-onclick');
form.classList.toggle('checking-out');
form.classList.toggle('registration-form');
})