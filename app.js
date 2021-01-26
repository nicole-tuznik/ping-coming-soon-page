const emailInput = document.querySelector('.email__input');
const email = document.querySelector('.email');
const submitBtn = document.querySelector('.email__button');

submitBtn.addEventListener('click', function(e) {
  
  if (!emailInput.validity.valid) {
    email.classList.add('invalid');
    e.preventDefault();
    emailInput.focus();
  } else {
    email.classList.remove('invalid');
  }
});
