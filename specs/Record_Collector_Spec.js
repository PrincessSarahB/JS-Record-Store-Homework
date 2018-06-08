var assert = require('assert');
var RecordCollector = require('../Record_Collector.js');
var Record = require('../Record.js');

describe('RecordCollector', function(){
  var recordCollector;
  var record1;
  var record2;
  var record3;
  var record4;

  beforeEach(function(){
    recordCollector = new RecordCollector("Bob", 50.00)
    record1 = new Record("Stereophonics", "Word Gets Around","Rock", 10.00);
    record2 = new Record("David Bowie","Low", "Rock", 55.00);
    record3 = new Record("Jimmy Eat World", "Futures", "Alternative", 20.00);
    record4 = new Record("Foo Fighters", "The Colour and the Shape", "Rock", 15.00);
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

  it('should be able to view total value of collection', function(){
    recordCollector.buy(record1);
    recordCollector.buy(record3);
    assert.deepStrictEqual(recordCollector.valueOfCollection(), 30.00);
  });

  it('should be able to view value of records of a particular genre', function(){
    recordCollector.buy(record1);
    recordCollector.buy(record3);
    recordCollector.buy(record4);
    assert.deepStrictEqual(recordCollector.valueByGenre("Rock"), 25.00);
  });

  it('should be able to view their most valuable record', function(){
    recordCollector.buy(record1);
    recordCollector.buy(record3);
    recordCollector.buy(record4);
    assert.deepStrictEqual(recordCollector.viewMostValuableRecord(), record3);
  });

  it('should be able to sort records by value in descending order', function(){
    recordCollector.buy(record1);
    recordCollector.buy(record3);
    recordCollector.buy(record4);
    assert.deepStrictEqual(recordCollector.sortRecordsByValueDescending(), [record3, record4, record1]);
  });

  it('should be able to sort records by value in ascending order', function(){
    recordCollector.buy(record1);
    recordCollector.buy(record3);
    recordCollector.buy(record4);
    assert.deepStrictEqual(recordCollector.sortRecordsByValueAscending(), [record1, record4, record3]);
  });

  it('should be able to compare the value of collection with another record collector', function(){
    recordCollector2 = new RecordCollector("Sarah", 200.00);
    recordCollector.buy(record1);
    recordCollector.buy(record4);
    recordCollector2.buy(record2);
    recordCollector2.buy(record3);
    assert.deepStrictEqual(recordCollector.compareValueOfCollections(recordCollector, recordCollector2), "Sarah has the most valuable collection worth 75.00");
  });


});
