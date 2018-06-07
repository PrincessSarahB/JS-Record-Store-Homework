var assert = require('assert');
var RecordStore = require('../Record_Store.js');
var Record = require('../Record.js');

describe('RecordStore', function(){
  var recordStore;
  var record1;
  var record2;
  var record3;

  beforeEach(function(){
    recordStore = new RecordStore("Championship Vinyl", "Glasgow", 1000.00)
    record1 = new Record("Stereophonics", "Word Gets Around","Rock", 10.00);
    record2 = new Record("David Bowie","Low", "Rock", 55.00);
    record3 = new Record("Jimmy Eat World", "Futures",  20.00);
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

  it('should have some records in the store inventory', function(){
    recordStore.add(record1);
    recordStore.add(record2);
    recordStore.add(record3);
    assert.deepStrictEqual(recordStore.inventory.length, 3);
  });

  it('should list the inventory', function(){
    recordStore.add(record1);
    recordStore.add(record2);
    assert.deepStrictEqual(recordStore.listInventory(), ['Title: Word Gets Around, Artist: Stereophonics, Genre: Rock, Price: £10.00', 'Title: Low, Artist: David Bowie, Genre: Rock, Price: £55.00']);
  });

});
