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

// popup message
var popup = document.getElementById('myPopup');
var btn = document.getElementById('submit-button');
var close = document.getElementsByClassName('close-button')[0];

btn.onclick = function() {
  popup.style.display = 'block';
}
close.onclick = function() {
  popup.style.display = 'none';
}

