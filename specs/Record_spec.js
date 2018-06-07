var assert = require('assert');
var Record = require('../Record.js');

describe('Record', function(){
  var record;

  beforeEach(function(){
    record = new Record("Stereophonics", "Word Gets Around","Rock", 10.00 )
  });

  it('should have an artist', function(){
    assert.strictEqual(record.artist, "Stereophonics");
  });

  it('should have a title', function(){
    assert.strictEqual(record.title, "Word Gets Around");
  });

  it('should have a genre', function(){
    assert.strictEqual(record.genre, "Rock");
  });

  it('should have a price', function(){
    assert.strictEqual(record.price, 10.00);
  });

  it('should print the record properties as a string', function(){
    assert.strictEqual(record.toString(), 'The album Word Gets Around is a Rock album by Stereophonics and costs £10.00');
  });
})
