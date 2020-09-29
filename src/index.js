'use strict';
import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import "element-closest";
import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";


import calculator from './modules/calculator';


import burgerMenu from './modules/burgerMenu';




import mainSlider from './modules/mainSlider';

import modaleWindows from './modules/modaleWindows';

import sendForm from './modules/sendForm';


import sliderGalery from './modules/sliderGalery';
import SliderCarousel from './modules/sliderCarousel';


const carousel = new SliderCarousel({
    main: '.wrapper-carousel',
    wrap: '.services-slider',
    prev: '.slider-carousel-prev',
    next: '.sliderCarouselNext',
    slidesToShow: 5
});
carousel.init();



burgerMenu();
calculator();
mainSlider();
modaleWindows();
sendForm();
sliderGalery();

