function Movie(name, releaseDate, rating) {
  this.movieName = name;
  this.releaseDate = releaseDate;
  this.rating = rating;
  this.showTimes = [];
};

var userName;
var userEmail;
var totalCost = 0;


var basePrice = 10;
var nowMilliseconds = new Date();
var nowDays = Math.floor(nowMilliseconds/8.64e7);
Movie.prototype.isNewRelease = function() {
  if (this.releaseDate < nowDays - 180) {
    return true;
  } else {
    return false;
  }
}

var movieTwo = new Movie("Action Two: Action Gets Bigger", 16950, "R");
var movieOne = new Movie("Action One: the Birth of Action", 16750, "PG-13");

Movie.prototype.price = function(userAge, showTime) {
  var ticketPrice;
  if (userAge >= 60) {
    ticketPrice = basePrice * 0.8;
  } else if (userAge <= 12) {
    ticketPrice = basePrice * 0.85;
  } else {
    ticketPrice = basePrice;
  }
  if (showTime < 16) {
    ticketPrice *= 0.6;
  }
  if (this.isNewRelease()) {
    ticketPrice --;
  }
  return ticketPrice;
}


$(document).ready(function() {

  $('#movie-2-form').submit(function(event) {
    event.preventDefault();
    userName = $('#movie-2-name').val();
    userEmail = $('#movie-2-email').val();
    var showTime = $('#movie-2-time option:selected').val();
    var age = $('input[name=movie-2-age]:checked').val();
    totalCost += movieTwo.price(age, showTime);
    console.log(totalCost);

  });



});
