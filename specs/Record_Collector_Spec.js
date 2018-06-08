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

});
