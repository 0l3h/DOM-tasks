'use strict';

const divElement = document.querySelector('div');
const buttonElement = divElement.firstElementChild;

divElement.classList.add('www');

buttonElement.addEventListener('click', e => {
    divElement.classList.remove('www');

    console.log('Contains www class:', divElement.classList.contains('www'));
});

if(divElement.classList.contains('www')) { 
    divElement.classList.add('www');
} else {
    divElement.classList.remove('www');
}

console.log('Contains www class:', divElement.classList.contains('www'));