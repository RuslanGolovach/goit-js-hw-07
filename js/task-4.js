const counterRef = document.querySelector('#value');
const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]',
);
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]',
);
let count = 0;
const functionDecrement = () => {
  count -= 1;
  counterRef.textContent = count;
};

const functionIncrement = () => {
  count += 1;
  counterRef.textContent = count;
};

btnDecrementRef.addEventListener('click', functionDecrement);
btnIncrementRef.addEventListener('click', functionIncrement);
