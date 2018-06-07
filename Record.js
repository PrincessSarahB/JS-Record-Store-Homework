var Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.toString = function() {
  var result = 'Title: ' + this.title + ', Artist: ' + this.artist + ', Genre: ' + this.genre + ', Price: £' + this.price.toFixed(2);
  return result;
};


module.exports = Record;
