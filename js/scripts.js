function Movie(name, releaseDate, rating) {
  this.movieName = name;
  this.releaseDate = releaseDate;
  this.rating = rating;
  this.showTimes = [];
};

var basePrice = 10;
var now = new Date();
var fullDaysSinceEpoch = Math.floor(now/8.64e7);

var actionTwo = new Movie("Action Two: Action Gets Bigger", 16950, "R");

Movie.prototype.price = function(userAge) {
  var ticketPrice;
  if (userAge >= 60) {
    ticketPrice = basePrice * 0.8;
  } else if (userAge <= 12) {
    ticketPrice = basePrice * 0.85;
  } else {
    ticketPrice = basePrice;
  }
  return ticketPrice;
}


$(document).ready(function() {

});
