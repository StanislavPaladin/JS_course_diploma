'use strict';
class SliderCarousel{
    constructor({main,
        wrap, 
        next,
        prev,
        infinity = true,
        position = 0,
        slidesToShow = 5,
        }){
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow)
        };

    }
    init(){
        this.addClass();
        this.addStyle();
        this.resetTranslateX();
        if(this.prev && this.next) {
            this.controlSlider();
        } else {
            this.controlSlider();
        }
    }

    addClass() {
        this.main.classList.add('sliderCarousel');
        this.wrap.classList.add('sliderCarousel__wrap');
        for ( const item of this.slides) {
            item.classList.add('sliderCarousel__item');
        }
    }

    addStyle() {
        const style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `
        .sliderCarousel {
            overflow: hidden !important;
        }
        .sliderCarousel__wrap {
            padding-right: 67px !important;
            display: flex !important;
            transition: transform 0.5s !important;
            will-change: transform !important;
            
        }
        .sliderCarousel__item {
            
        }
        `;

        document.head.append(style);
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {
        const numberOfSlides = Math.floor(100 / this.slidesToShow);
        if (this.options.infinity || this.options.position > 0){
        --this.options.position;
        this.resetPosition();
        this.wrap.style.transform = `translateX(-${this.options.position * numberOfSlides}%)`;
        }
    }

    nextSlider() {
        this.getSlidesToShow();
        const numberOfSlides = Math.floor(100 / this.slidesForShow);
        if (this.options.infinity || this.options.position < this.slides.length - this.slidesForShow) {
        ++this.options.position;
        this.resetPosition();
        this.wrap.style.transform = `translateX(-${this.options.position *numberOfSlides}%)`;
        }
    }
    getSlidesToShow() {
        const width = document.documentElement.clientWidth;
        if (width > 991) {
            this.slidesForShow = 5;
        }
        if (width <= 991 && width > 767) {
            this.slidesForShow = 3;
        }
        if (width <= 767 && width > 479) {
            this.slidesForShow = 2;
        }
        if (width <= 479) {
            this.slidesForShow = 1;
        }
    }
    resetPosition() {
        const counter = this.slides.length - this.slidesToShow;
        if(this.options.position > counter) {
        this.options.position = 0;
        }
        if (this.options.position < 0) {
            this.options.position = counter;
        }
         else {
            return;
        }
    }
    resetTranslateX() {
        window.onresize = () => {
            const width = document.documentElement.clientWidth;
            if (width < 1210 && width > 1190) {
                this.wrap.style.transform = `translateX(0)`;
            }
            if (width < 1000 && width > 986) {
                this.wrap.style.transform = `translateX(0)`;
            }
            if (width < 779 && width > 755) {
                this.wrap.style.transform = `translateX(0)`;
            } 
            if (width <= 487 && width > 466) {
                this.wrap.style.transform = `translateX(0)`;
            }
        };
    }
}
export default SliderCarousel;