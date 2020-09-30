'use strict';
const sendForm = () => {
    const loadMessage = 'Загрузка...';
    const thanksHeader = document.getElementById('thanksHeader');
    const thanksFormContent = document.getElementById('thanksFormContent');
    const thanks = document.getElementById('thanks');
    const check1 = document.getElementById('check1');
    const cardCheck = document.getElementById('card_check');
    const cardOrderForm = document.getElementById('card_order');
    const bannerFormButton = document.getElementById('banner-form-button');
    const cardOrderButton = document.getElementById('card-order-btn');
    const callbackButton = document.getElementById('callbackButton');
    const visitFormBtn = document.getElementById('visit-button');
    const freeVisitForm = document.getElementById('form2');
    const callbackForm = document.getElementById('form1');
    const bannerForm = document.getElementById('banner-form');
    const footerForm = document.getElementById('footer_form');
    const userName = document.getElementsByName('name');
    const userPhone = document.getElementsByName('phone');
    const statusMessage = document.createElement('div');
    const cardOrderName = document.getElementById('card-order-form-name');
    const cardOrderPhone = document.getElementById('card-order-form-phone');
    const bannerName = document.getElementById('banner-form-name');
    const bannerPhone = document.getElementById('banner-form-phone');
    const callbackName = document.getElementById('callback-name');
    const callbackPhone = document.getElementById('callback-phone');
    const visitName = document.getElementById('visit-name');
    const visitPhone = document.getElementById('visit-phone');
    const check = document.getElementById('check');
    const check2 = document.getElementById('check2');
    statusMessage.style.cssText = 'font-size: 10px; color: red;';

    const promoCode = document.getElementById('promoCode');
    const oneMonth = document.getElementById('m1');
    const mosaicCheckbox = document.getElementById('card_leto_mozaika');
    const output = document.getElementById('price-total');
    const footerClub = document.getElementById('footer_leto_mozaika');
    
    const footerInput = document.getElementById('callback_footer_form-phone');

    userPhone.forEach((item) => {
        item.value = '';
        addEventListener('input', () => {
            item.value = item.value.replace(/[^\d+-]/g,'');
            if(!/^\+7\d*$/.test(item.value)) {
                item.value = '+7' + item.value;
            }
        let value = item.value;
        if (value.match(/^\d{4}$/g,'') !== null) {
            item.value = value + '-';
        }
        });
    });

    userName.forEach((item) => {
        item.value='';
        addEventListener('input', () => {
        item.value = item.value.replace(/[^а-я А-Я ]/g,'');           
        });
    });

    const clearForms = () => {
        userName.forEach((item) => {      
            item.value = '';
        });
        userPhone.forEach((item) => {
            item.value = '';
        });
    };

    const clearOrderForm = () =>{
        promoCode.value = '';
        oneMonth.checked = true;
        cardCheck.checked = false;
        if(document.body.contains(mosaicCheckbox)) {
        mosaicCheckbox.checked = true;
        } else {
            return;
        }
        
    };
    
    const clearStatusMessage = () => {
        setTimeout(() => {
            statusMessage.textContent = '';   
        }, 3000);
    };

    const getError = () => {
        thanks.style = 'display: block;';
        thanksHeader.textContent = 'Ошибка!';
        thanksFormContent.textContent = 'Отправка не удалась';
    };

    const getSucces = () => {
        statusMessage.textContent = `Введите своё имя! 
        Введите номер телефона в международном формате!
        Вы должны согласиться на обработку данных!`;
    };

    visitFormBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if(visitName.value !=='' && visitPhone.value !== '' &&visitPhone.value.length===12 && check2.checked) {
                freeVisitForm.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(freeVisitForm);         
                let body = {};
                formData.forEach((val, key) => {
                body[key] = val;
                });
                postData(body)
                .then((response) => {
                    if(response.status !== 200) {
                        throw new Error('status network is not 200');
                    }
                    
                thanks.style = 'display: block;';
                })
                .catch((error) => {
                    getError();
                });
                clearForms();
                check2.checked = false;
                clearStatusMessage();
        } else {
            freeVisitForm.appendChild(statusMessage);
            check2.checked = false;
            getSucces();
        }
    });


    callbackButton.addEventListener('click', (event) => {
        event.preventDefault();
        if(callbackName.value !=='' && callbackPhone.value !== ''&&callbackPhone.value.length===12 && check.checked) {
                callbackForm.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(callbackForm);         
                let body = {};
                formData.forEach((val, key) => {
                body[key] = val;
                });
                postData(body)
                .then((response) => {
                    if(response.status !== 200) {
                        throw new Error('status network is not 200');
                    }
                
                thanks.style = 'display: block;';
                })
                .catch((error) => {
                    getError();
                });
                clearForms();
                check.checked = false;
                clearStatusMessage();
        } else {
        check.checked = false;
        callbackForm.appendChild(statusMessage);
        getSucces();
        }
    });

    footerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (footerInput.value.length ===12) {
            footerForm.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(footerForm);         
            let body = {};
            formData.forEach((val, key) => {
            body[key] = val;
            });
            postData(body)
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error('status network is not 200');
                }
                freeVisitForm.style.display = 'none';
                thanks.style = 'display: block;';
            })
            .catch((error) => {
                getError();
            });
            clearForms();
            footerClub.checked = true;
            clearStatusMessage();
        } else {
            footerForm.appendChild(statusMessage);
            footerClub.checked = true;
            statusMessage.textContent = `Введите номер телефона в международном формате! 
                                        Выберите клуб!`;
        }
    });

    bannerFormButton.addEventListener('click', (event) => {
        event.preventDefault();
        if(check1.checked && bannerName.value !=='' && bannerPhone.value !== ''&&bannerPhone.value.length===12) {
                bannerForm.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(bannerForm);         
                let body = {};
                formData.forEach((val, key) => {
                body[key] = val;
                });
                postData(body)
                .then((response) => {
                    if(response.status !== 200) {
                        throw new Error('status network is not 200');
                    }
                
                thanks.style = 'display: block;';
                })
                .catch((error) => {
                    getError();
                });
                clearForms();
                clearStatusMessage();
        } else {
            bannerForm.appendChild(statusMessage);
        getSucces();
        }
    });


    cardOrderButton.addEventListener('click', (event) => {
        event.preventDefault();
        if(cardCheck.checked && cardOrderName.value !== '' && cardOrderPhone.value !== '' && cardOrderPhone.value.length===12) {
                cardOrderForm.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(cardOrderForm);         
                let body = {};
                formData.forEach((val, key) => {
                body[key] = val;
                });
                postData(body)
                .then((response) => {
                    if(response.status !== 200) {
                        throw new Error('status network is not 200');
                    }
                thanks.style = 'display: block;';
                })
                .catch((error) => {
                    getError();
                });
                clearForms();
                clearOrderForm();
                clearStatusMessage();
        } else {
            cardOrderForm.appendChild(statusMessage);
            statusMessage.textContent = `Введите имя и номер телефона в международном формате!
                                        Вы должны согласиться на обработку данных!`;
        }
    });



    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};
export default sendForm;