const fields = document.querySelectorAll('.field-input');
const shoWHideButtons = document.querySelectorAll('.show-hide');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const getError = (errorElement, successElement, message) => {
  errorElement.innerHTML = `<img src="./images/error.svg" alt="Error" />` + message;
  successElement.innerHTML = '';
};

const getSuccess = (errorElement, successElement) => {
  errorElement.innerHTML = '';
  successElement.innerHTML = `<img src="./images/success.svg" alt="Success" />`;
};

fields.forEach(field => {
  const input = field.querySelector('input');
  const error = field.querySelector('.error');
  const success = field.querySelector('.success');

  input.addEventListener('blur', () => {
    input.required = true;

    if (!input.validity.valueMissing) {
      getSuccess(error, success);
    } else {
      getError(error, success, 'This field is required!');
    }

    if (input.validity.typeMismatch) {
      getError(error, success, 'Check this field');
    }
  });
});

confirmPassword.addEventListener('focus', () => {
  const fieldBlock = confirmPassword.closest('.field');
  const success = fieldBlock.querySelector('.success');
  const error = fieldBlock.querySelector('.error');

  if (password.value != confirmPassword.value) {
    getError(error, success, 'Passwords did not match!');
  }
});

shoWHideButtons.forEach(shoWHideButton => {
  shoWHideButton.addEventListener('click', () => {
    const fieldBlock = shoWHideButton.closest('.field');
    fieldBlock.classList.toggle('show');
    const passwordField = fieldBlock.querySelector('input');

    switch (passwordField.type) {
      case 'text':
        passwordField.type = 'password';
        break;
      case 'password':
        passwordField.type = 'text';
        break;
      default:
        passwordField.type = 'password';
        break;
    }
  });
});
