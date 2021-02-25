const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('input', checkValidInput);

function checkValidInput(event) {
  if (event.currentTarget.value.length === 6) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
