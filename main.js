const toggleBtn = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
const button = document.querySelector('.header__button');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    button.classList.toggle('active');
});