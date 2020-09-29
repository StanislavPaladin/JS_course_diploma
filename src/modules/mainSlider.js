'use strict';
const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const slide3 = document.querySelector('.slide3');
const slide4 = document.querySelector('.slide4');
const slide5 = document.querySelector('.slide5');
const mainSlider = () => {
    const getSlide2 = () => {
    slide1.style.display = 'none';
    slide2.style.display = 'flex';
    setTimeout(getSlide3, 5000);
    };

    const getSlide3 = () => {
        slide2.style.display = 'none';
        slide3.style.display = 'flex';
        setTimeout(getSlide4, 5000);
    };

    const getSlide4 = () => {
        slide3.style.display = 'none';
        slide4.style.display = 'flex';
        setTimeout(getSlide5, 5000);
    };

    const getSlide5 = () => {
        slide4.style.display = 'none';
        slide5.style.display = 'flex';
        setTimeout(getSlide1, 5000);
    };

    const getSlide1 = () => {
        slide5.style.display = 'none';
        slide1.style.display = 'flex';
        getSlide2();
    };


    setTimeout(getSlide1, 5000);
};

export default mainSlider;