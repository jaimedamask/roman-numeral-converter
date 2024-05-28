const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
let input = 350;
const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

const isValidInput = () => {
    let errorMsg = '';
    if (input < 1) {
        errorMsg = 'Please enter a number greater than or equal to 1';
    } else if (input > 3999) {
        errorMsg = 'Please enter a number less than or equal to 3999';
    } else return true;
};

const convertNum = () => {
    let convertedNum = '';

    for (let key in romanNumerals) {
        while (input >= romanNumerals[key]) {
            convertedNum += key;
            input -= romanNumerals[key];
        }
    }

    return convertedNum;
};