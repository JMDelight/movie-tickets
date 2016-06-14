var userName;
var userEmail;
var userCreditCard;
var totalCost = 0;
var tickets = [];
var ticketType;
var basePrice = 10;
var nowMilliseconds = new Date();
var nowDays = Math.floor(nowMilliseconds/8.64e7);

function Movie(name, releaseDate, rating) {
  this.movieName = name;
  this.releaseDate = releaseDate;
  this.rating = rating;
  this.showTimes = [];
};

Movie.prototype.isNewRelease = function() {
  if (this.releaseDate < nowDays - 180) {
    return true;
  } else {
    return false;
  }
}

Movie.prototype.price = function(userAge, showTime) {
  var ticketPrice;
  if (userAge >= 60) {
    ticketPrice = basePrice * 0.8;
    ticketType = "Senior";
  } else if (userAge <= 12) {
    ticketPrice = basePrice * 0.85;
    ticketType = "Kid";
  } else {
    ticketPrice = basePrice;
    ticketType = "Normal";
  }
  if (showTime < 16) {
    ticketPrice *= 0.6;
  }
  if (this.isNewRelease()) {
    ticketPrice --;
  }
  return ticketPrice;
}

var movieTwo = new Movie("Action Two: Action Gets Bigger", 16950, "R");
var movieOne = new Movie("Action One: the Birth of Action", 16750, "PG-13");
var movieThree = new Movie("Bruce Willis: The True Story", 16770, "PG");

$(document).ready(function() {

  $('#movie-1-form').submit(function(event) {
    alert("One");
    event.preventDefault();
    userName = $('#movie-1-name').val();
    userEmail = $('#movie-1-email').val();
    var showTime = $('#movie-1-time option:selected').val();
    var age = $('input[name=movie-1-age]:checked').val();
    totalCost += movieOne.price(age, showTime);
    var ticket = "One " + ticketType + " ticket for " + movieOne.movieName + " at " + showTime;
    alert("One2")
    tickets.push(ticket);
    console.log(totalCost);
  });

  $('#movie-2-form').submit(function(event) {
    event.preventDefault();
    userName = $('#movie-2-name').val();
    userEmail = $('#movie-2-email').val();
    var showTime = $('#movie-2-time option:selected').val();
    var age = $('input[name=movie-2-age]:checked').val();
    totalCost += movieTwo.price(age, showTime);
    var ticket = "One " + ticketType + " ticket for " + movieTwo.movieName + " at " + showTime;
    tickets.push(ticket);
    console.log(totalCost);
  });

  $('#movie-3-form').submit(function(event) {
    event.preventDefault();
    userName = $('#movie-3-name').val();
    userEmail = $('#movie-3-email').val();
    var showTime = $('#movie-3-time option:selected').val();
    var age = $('input[name=movie-3-age]:checked').val();
    totalCost += movieThree.price(age, showTime);
    var ticket = "One " + ticketType + " ticket for " + movieThree.movieName + " at " + showTime;
    tickets.push(ticket);
    console.log(totalCost);
  });

  $('#shopping-cart-button').click(function() {
    $('#ticket-list').empty();
    tickets.forEach(function(ticket) {
      $('#ticket-list').append('<li>' + ticket + '</li>');
    });
  });

  $("#shopping-cart").submit(function(event) {
    event.preventDefault();
    userCreditCard = $('#credit-card').val();
    alert("Your tickets have been purchased successfully.");
    userName = "";
    userEmail = "";
    userCreditCard = "";
    totalCost = 0;
    tickets = [];

  });



});
