'use strict';


const modaleWindows = () => {
const body = document.querySelector('body');
const freeVisitForm = document.getElementById('free_visit_form');
const callbackForm = document.getElementById('callback_form');
const gift = document.getElementById('gift');
const giftIcon = document.querySelector('.gift-icon');
const clubsList = document.querySelector('.clubs-list ul');
const thanks = document.getElementById('thanks');


const closeModals = () => {
    freeVisitForm.style.display = 'none';
    callbackForm.style.display = 'none';
    gift.style.display = 'none';
    thanks.style.display = 'none';
};

body.addEventListener('click', (e) => {
    let target = e.target;
    let targetClosest = target.closest('.club-select');
    if(target.matches('.open-popup')){
        freeVisitForm.style.display = 'block';
    }
    if (target.matches('.overlay')) {
       closeModals();
    }
    if (target.matches('.close_icon')) {
        closeModals();
    }
    if (target.matches('.close-btn')) {
        closeModals();
    }
    if (target.matches('#headerCallback')) {
        callbackForm.style.display = 'block';
    }
    if (target.matches ('.gift-icon')) {
        gift.style.display = 'block';
        giftIcon.style.display = 'none';
    }
    if (target.matches ('.close-btn')) {
        gift.style.display = 'none';
        thanks.style.display = 'none';
    }
    if (targetClosest) {
        clubsList.style.display = 'block';
    } else if (!targetClosest) {
        clubsList.style.display = 'none';
    }
});
};

export default modaleWindows;