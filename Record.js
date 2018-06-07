var Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.toString = function() {
  var result = 'The album ' + this.title + ' is a ' + this.genre + ' album by ' + this.artist + ' and costs £' + this.price.toFixed(2);
  return result;
};


module.exports = Record;
