var assert = require('assert');
var Record = require('../Record_Store.js');
var Record = require('../Record.js');

describe('RecordStore', function(){
  var recordStore;

  beforeEach(function(){
    recordStore = new RecordStore("Championship Vinyl", "Glasgow")
  });
