const toggleBtn = document.querySelector('.header__button');
const nav = document.querySelector('.nav__layer');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    button.classList.toggle('active');
});