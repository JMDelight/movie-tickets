function Movie(name, releaseDate, rating) {
  this.movieName = name;
  this.releaseDate = releaseDate;
  this.rating = rating;
  this.showTimes = [];
};

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

var actionTwo = new Movie("Action Two: Action Gets Bigger", 16950, "R");
var actionOne = new Movie("Action One: the Birth of Action", 16750, "PG-13");

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

});
