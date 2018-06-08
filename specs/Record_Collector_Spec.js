var assert = require('assert');
var RecordCollector = require('../Record_Collector.js');
var Record = require('../Record.js');

describe('RecordCollector', function(){
  var recordCollector;
  var record1;
  var record2;
  var record3;

  beforeEach(function(){
    recordCollector = new RecordCollector("Bob", 50.00)
    record1 = new Record("Stereophonics", "Word Gets Around","Rock", 10.00);
    record2 = new Record("David Bowie","Low", "Rock", 55.00);
    record3 = new Record("Jimmy Eat World", "Futures", "Alternative", 20.00);
  });

  it('should have a name', function(){
    assert.strictEqual(recordCollector.name, "Bob");
  });

  it('should have cash', function(){
    assert.strictEqual(recordCollector.cash, 50.00);
  });

  it('should have collection of records, starts empty', function(){
    assert.deepStrictEqual(recordCollector.records.length, 0);
  });

  it('should be able to buy records, cash goes down, record collection increases', function(){
    recordCollector.buy(record1);
    assert.deepStrictEqual(recordCollector.records.length, 1);
    assert.deepStrictEqual(recordCollector.cash, 40.00);
  });
  it('should not be able to buy record if not enough cash', function(){
    recordCollector.buy(record3);
    recordCollector.buy(record2);
    assert.deepStrictEqual(recordCollector.records.length, 1);
    assert.deepStrictEqual(recordCollector.cash, 30.00);
  });

  it('should be able to sell records, cash goes up, collection decreases', function(){
    recordCollector.buy(record1);
    recordCollector.buy(record3);
    recordCollector.sell(record1);
    assert.deepStrictEqual(recordCollector.records.length, 1);
    assert.deepStrictEqual(recordCollector.cash, 30.00);
  });

});
