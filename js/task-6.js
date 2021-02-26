const inputRef = document.querySelector('#validation-input');

const inputLength = inputRef.getAttribute('data-length');

inputRef.addEventListener('input', checkValidInput);

function checkValidInput(event) {
  if (event.currentTarget.value.length === Number(inputLength)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
