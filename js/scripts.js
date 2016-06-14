function Movie(name, releaseDate, rating) {
  this.movieName = name;
  this.releaseDate = releaseDate;
  this.rating = rating;
  this.showTimes = [];
};

var now = new Date();
var fullDaysSinceEpoch = Math.floor(now/8.64e7);

var actionTwo = new Movie("Action Two: Action Gets Bigger", 16950, "R");

Movie.prototype.price = function() {
  return "$10";
}


$(document).ready(function() {

});
