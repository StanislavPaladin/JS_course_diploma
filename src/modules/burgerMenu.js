'use strict';
const burgerMenu = () => {
const body = document.querySelector('body');
const hiddenLarge= document.querySelector('.hidden-large');
const popUpMenu = document.querySelector('.popup-menu');
const topMenu = document.querySelector('.top-menu');
const toTop = document.getElementById('totop');
let scrollPosition = 0;
toTop.style.display = 'none';


window.addEventListener('change', () =>{
    const width = document.documentElement.clientWidth;
    if(width <= 768) {
        hiddenLarge.style.display = 'flex';
    } 
});
window.addEventListener('scroll', (e) => {
    const width = document.documentElement.clientWidth;
    scrollPosition = window.scrollY;
    if(scrollPosition < 500) {
        toTop.style.display = 'none';
    } else if (scrollPosition >= 700) {
        toTop.style.display = 'block';
    }
    if(width <= 768 && scrollPosition >= 200){
        topMenu.classList.add('menu-fix');
    } else {
        topMenu.classList.remove('menu-fix');
    }
});

body.addEventListener('click', (e) => {
    let target = e.target;
    if (target.matches('.burger-menu')){
        popUpMenu.style.display = 'flex';
    } else if (target.matches('.hidden-large')) {
        return;
    } else {
        popUpMenu.style.display = 'none';
    }
});
};
export default burgerMenu;