const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const input = number.value;


const isValidInput = () => {
    let errorMsg = '';
    if (input < 1) {
        errorMsg = 'Please enter a number greater than or equal to 1';
    } else if (input > 3999) {
        errorMsg = 'Please enter a number less than or equal to 3999';
    } else return true;
};