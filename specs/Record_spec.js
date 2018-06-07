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
})
