'use strict'

//Variables
const form = document.getElementById(`form`);
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// Functions
// Error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Valid mail id
function checkEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Event Listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // Username
  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }
  //Email ID
  if (email.value === '') {
    showError(email, 'Email ID is required');
  }else if(!checkEmail(email.value)){
    showError(email, 'Email ID is invalid')
  }
  else {
    showSuccess(email);
  }
  //Password
  if (password.value === '') {
    showError(password, 'password is required');
  } else {
    showSuccess(password);
  }
  //Confirm Password
  if (confirmPassword.value === '') {
    showError(confirmPassword, 'Confirm Password is required');
  } else if (password.value !== confirmPassword.value){
    showError(confirmPassword, `Password didn't match`);
  }
  else {
    showSuccess(confirmPassword);
  }
})