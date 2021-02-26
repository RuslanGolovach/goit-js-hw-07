const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', inputName);

// function inputName(event) {
//   if (event.currentTarget.value !== '') {
//     spanRef.textContent = event.currentTarget.value;
//   } else spanRef.textContent = 'незнакомец';
// }

function inputName(event) {
  event.currentTarget.value !== ''
    ? (spanRef.textContent = event.currentTarget.value)
    : (spanRef.textContent = 'незнакомец');
}
