// header discount message
var expireMessage;
var today;
var elEnds;

function offerExpires(today) {
  var weekFromToday, day, date, month, year, dayNames, monthNames;

  weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  day = dayNames[weekFromToday.getDay()];
  date = weekFromToday.getDate();
  month = monthNames[weekFromToday.getMonth()];
  year = weekFromToday.getFullYear();

  expireMessage = 'Offer expires next ';
  expireMessage += day + ' <br />(' + month + ' ' + date + ', ' + year + ')';
  return expireMessage;
}
  today = new Date();
  elEnds = document.getElementById('offer-ends');
  elEnds.innerHTML = offerExpires(today);

// image slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active','');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += " active";
}

// Demo signup form
var signupForm = document.getElementById('signup-form');
var signupStatus = document.getElementById('signup-status');
var submitButton = document.getElementById('submit-button');
var nameInput = document.getElementById('name');
var signupSubmitting = false;

nameInput.addEventListener('input', function() {
  nameInput.setCustomValidity(nameInput.value.trim() ? '' : 'Please enter your first name.');
});

signupForm.addEventListener('invalid', function(event) {
  event.target.setAttribute('aria-invalid', 'true');
  signupStatus.className = 'form-status error';
  signupStatus.textContent = 'Please enter your first name and a valid email address, then agree to receive promotional emails.';
}, true);

signupForm.addEventListener('input', clearSignupError);
signupForm.addEventListener('change', clearSignupError);

function clearSignupError(event) {
  if (signupSubmitting) {
    return;
  }

  if (event.target.validity.valid && event.target.hasAttribute('aria-invalid')) {
    event.target.removeAttribute('aria-invalid');
  }
  if (!signupForm.querySelector(':invalid')) {
    signupStatus.className = 'form-status';
    signupStatus.textContent = '';
  }
}

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if (signupSubmitting) {
    return;
  }

  signupSubmitting = true;
  submitButton.disabled = true;
  signupStatus.className = 'form-status success';
  signupStatus.textContent = 'Thanks for your interest. This demo did not send or save your information.';
});

submitButton.disabled = false;
