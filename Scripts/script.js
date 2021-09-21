// Variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

//Input Array
const inputArray = [username, email, password, confirmPassword];

//Functions
//Error
const showError = function (input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
};

// Success
const showSuccess = function (input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

// Check Email ID
const checkEmail = function (input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(String(input.value).toLowerCase().trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email ID is invalid.');
  }
};

// CheckRequired
const checkRequired = function (inputArr) {
  inputArr.forEach((input) => {
    if (input.value === '') {
      showError(input, `${message(input)} is required.`);
    } else {
      showSuccess(input);
    }
  });
};

// CheckLength
const checkLength = function (input, min, max) {
  if (input.value.length < min) {
    showError(input, `${message(input)} must be at least ${min} characters.`);
  } else if (input.value.length > max) {
    showError(input, `${message(input)} must be less than ${max} characters.`);
  } else {
    showSuccess(input);
  }
};

// Check Password
const checkPasswordMatch = function (input1, input2) {
  if (input1.value !== '' && input2.value !== '')
    if (input1.value !== input2.value) {
      showError(input2, `Password didn't match`);
    } else {
      showSuccess(input1);
      showSuccess(input2);
    }
};

// Error Message
const message = function (input) {
  var errorMessage = input.id.replace(/-p/, ' P');
  return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
};

// Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkRequired(inputArray);
  checkLength(username, 4, 12);
  checkEmail(email);
  checkLength(password, 5, 12);
  checkPasswordMatch(password, confirmPassword);
  console.log(e);
});