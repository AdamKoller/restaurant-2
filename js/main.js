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
