'use strict';
const sliderGalery = () => {
    const gallerySlide = document.querySelectorAll('.gallery-slide');
    const slider = document.querySelector('.gallery-slider');
    const sliderDots = document.querySelector('.gallery-dots');

    let dotCounter = 0;
    do {    
        let dotCreate;                                                 
          dotCreate = document.createElement('li');
          dotCreate.className = 'dot';
          sliderDots.appendChild(dotCreate);
            dotCounter++;
    } while (dotCounter < gallerySlide.length);


    const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');
    let currentSlide = 0;
    let interval;
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(gallerySlide, currentSlide, 'gallery-slide-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= gallerySlide.length){
            currentSlide = 0;
        }
        nextSlide(gallerySlide, currentSlide, 'gallery-slide-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if(!target.matches ('.right, .left, .dot')) {
            return;
        }

        prevSlide(gallerySlide, currentSlide, 'gallery-slide-active');
        prevSlide(dot, currentSlide, 'dot-active');

    


        if(target.matches('.right')) {
            currentSlide++;
        } else if (target.matches('.left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }
        if(currentSlide >= gallerySlide.length) {
            currentSlide = 0;
        }
        if(currentSlide < 0) {
            currentSlide = gallerySlide.length -1 ;
        }
        nextSlide(gallerySlide, currentSlide, 'gallery-slide-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });
    
    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.right') || 
            event.target.matches('.dot') ||
            event.target.matches('.left')){
                stopSlide();
            }
    });

    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.right') || 
        event.target.matches('.left') ||
        event.target.matches('.dot')){
            startSlide();
        }
    });

    startSlide(3000);


};
export default sliderGalery;