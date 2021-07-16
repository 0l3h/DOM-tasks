'use strict';

const divElement = document.querySelector('div');
const buttonElement = divElement.firstElementChild;

buttonElement.addEventListener('click', e => {
    divElement.classList.toggle('www');

});