'use strict';

const buttonCalculate = document.querySelector('button');
const [firstInput, secondInput] = document.querySelectorAll('input');
const regExp = new RegExp('^(?!\D)\\d{1,10}$');

firstInput.oninput = e => {
    const {value} = firstInput;
    
    if(regExp.test(value)) {
        firstInput.classList.add('valid');
        firstInput.classList.remove('invalid');

    } else {
        firstInput.classList.add('invalid');
        firstInput.classList.remove('valid');
    }
};

buttonCalculate.onclick = e => {
    const {value} = firstInput;
    secondInput.setAttribute('value', calculateVolume(value));      
};

/**
 * @param {Number} radius Радиус шара. 
 * @returns               Объем шара.
 */
function calculateVolume(radius) {    
    return 4/3 * Math.PI * Math.pow(radius, 3);
}