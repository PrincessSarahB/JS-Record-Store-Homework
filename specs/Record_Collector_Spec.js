var assert = require('assert');
var RecordCollector = require('../Record_Collector.js');
var Record = require('../Record.js');

describe('RecordStore', function(){
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
