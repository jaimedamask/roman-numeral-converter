const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convertNum = () => {
    const input = number.value;
    if (input <= 0) {
        output.textContent = 'Please enter a number greater than or equal to 1';
    } else if (input >= 4000) {
        output.textContent = 'Please enter a number less than or equal to 3999';
    }
};

convertBtn.addEventListener('click', convertNum);