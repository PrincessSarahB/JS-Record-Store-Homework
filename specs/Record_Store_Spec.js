var assert = require('assert');
var RecordStore = require('../Record_Store.js');
var Record = require('../Record.js');

describe('RecordStore', function(){
  var recordStore;

  beforeEach(function(){
    recordStore = new RecordStore("Championship Vinyl", "Glasgow")
  });

  it('should have a name', function(){
    assert.strictEqual(recordStore.name, "Championship Vinyl");
  });

});
