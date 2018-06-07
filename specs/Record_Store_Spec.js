var assert = require('assert');
var RecordStore = require('../Record_Store.js');
var Record = require('../Record.js');

describe('RecordStore', function(){
  var recordStore;

  beforeEach(function(){
    recordStore = new RecordStore("Championship Vinyl", "Glasgow", 1000.00)
  });

  it('should have a name', function(){
    assert.strictEqual(recordStore.name, "Championship Vinyl");
  });

  it('should have a place', function(){
    assert.strictEqual(recordStore.place, "Glasgow");
  });

  it('should have an inventory that starts empty', function(){
    assert.deepStrictEqual(recordStore.inventory.length, 0);
  });

  it('should have a balance', function(){
    assert.strictEqual(recordStore.balance, 1000.00);
  });

});
