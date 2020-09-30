'use strict';

const calculator = () => {
    const oneMonth = document.getElementById('m1');
    const sixMonths = document.getElementById('m2');
    const nineMonth = document.getElementById('m3');
    const oneYear = document.getElementById('m4');

    const btn = document.getElementById('card-order-btn');

    let oneMonthPrice = 0;
    let sixMonthsPrice = 0;
    let nineMonthsPrice = 0;
    let oneYearPrice = 0;

    const mosaic = document.getElementById('card_leto_mozaika');
    const schelkovo = document.getElementById('card_leto_schelkovo');

    const cardOrderName = document.getElementById('card-order-form-name');
    const cardOrderPhone = document.getElementById('card-order-form-phone');
    const cardCheck = document.getElementById('card_check');


    const promo = document.querySelectorAll('input');
    let promoValue = 1;

    const output = document.getElementById('price-total');
    const cardOrder = document.getElementById('card_order');
    


    const getDiscount = () => {
        if (promo[10].value === 'ТЕЛО2020') {
            promoValue = 0.7;
        } else {
            promoValue = 1;
        }
    };

    const mainFunctionCalculator = () => {
        if (oneMonth.checked) {
            getDiscount();
            output.textContent = Math.floor(oneMonthPrice * promoValue);
        }
        if (sixMonths.checked) {
            getDiscount();
            output.textContent = Math.floor(sixMonthsPrice * promoValue);
        }
        if (nineMonth.checked) {
            getDiscount();
            output.textContent = Math.floor(nineMonthsPrice * promoValue);
        }
        if (oneYear.checked) {
            getDiscount();
            output.textContent = Math.floor(oneYearPrice * promoValue);
        } 
    };

    mainFunctionCalculator();
    cardOrder.addEventListener('click', (e) => {
        let target = e.target;
        if (target.closest('#card_leto_mozaika')) {
            oneMonthPrice = 1999;
            sixMonthsPrice = 9900;
            nineMonthsPrice = 13900;
            oneYearPrice = 19900;
            mainFunctionCalculator();
        }
        if (target.closest('#card_leto_schelkovo')) {
            oneMonthPrice = 2999;
            sixMonthsPrice = 14990;
            nineMonthsPrice = 21990;
            oneYearPrice = 24990;
            mainFunctionCalculator();
        }
    });

        mainFunctionCalculator();

    promo[10].addEventListener('input', (e) => {
        mainFunctionCalculator();
    });

    cardOrder.addEventListener('click', (e) => {
        let target = e.target;
        getDiscount();
        mainFunctionCalculator();
    });
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if(cardCheck.checked && cardOrderName.value !== '' && cardOrderPhone.value !== '' && cardOrderPhone.value.length===12) {
        oneMonthPrice = 0;
        sixMonthsPrice = 0;
        nineMonthsPrice = 0;
        oneYearPrice = 0;
        } else {
            return;
        }
    });
  
};

export default calculator;