// script.js
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const countElement = document.getElementById('count');

incrementButton.addEventListener('click', () => {
    const count = parseInt(countElement.innerText, 10);
    countElement.innerText = count + 1;
});

decrementButton.addEventListener('click', () => {
    const count = parseInt(countElement.innerText, 10);
    countElement.innerText = count - 1;
});
