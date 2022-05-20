let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("iframe"), {
    center: { lat: 59.44009, lng: 18.06311 },
    zoom: 8,
  });
}

window.initMap = initMap;

function validateName() {
  var name = document.getElementById('contact-name').value;

  if(name.length == 0) {

    producePrompt('Namn är nödvändigt', 'name-error' , 'red')
    return false;

  }

  if (!name.match(/^[A-Öa-ö]*\s{1}[A-Öa-ö]*$/)) {
    producePrompt('Förnamn och efternamn, tack.','name-error', 'red');
    return false;
  }

  producePrompt('Giltig', 'name-error', 'green');
  return true;
}

function validatePhone() {

  var phone = document.getElementById('contact-phone').value;

  if(phone.length == 0) {
    producePrompt('Telefon nummer är nödvändig.', 'phone-error', 'red');
    return false;
  }

  if(phone.length != 10) {
    producePrompt('Includera riktnummer (pröva skriva nummret utan mellanrum).', 'phone-error', 'red');
    return false;
  }

  if(!phone.match(/^[0-9]{10}$/)) {
    producePrompt('Endast siffror tack.' ,'phone-error', 'red');
    return false;
  }

  producePrompt('Giltig', 'phone-error', 'green');
  return true;
}

function validateEmail () {
  var email = document.getElementById('contact-email').value;

  if(email.length == 0) {
    producePrompt('Email inkorrekt','email-error', 'red');
    return false;
  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    producePrompt('Email inkorrekt', 'email-error', 'red');
    return false;
  }

  producePrompt('Giltig', 'email-error', 'green');
  return true;

}

function validateMessage() {
  var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    producePrompt(left + ' fler tecken behövs','message-error','red');
    return false;
  }

  producePrompt('Valid', 'message-error', 'green');
  return true;
}

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    jsShow('submit-error');
    producePrompt('Var snäll och ändra felen för att skicka.', 'submit-error', 'red');
    setTimeout(function(){jsHide('submit-error');}, 2000);
    return false;
}
else {
}
}

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}

function producePrompt(message, promptLocation, color) {
  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;
}

function burgermenu(x) {
  x.classList.toggle("change");
}

function burgerLinks() {
  var x = document.getElementById("burgerLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}