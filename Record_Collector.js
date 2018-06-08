var RecordCollector = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.records = [];
}

RecordCollector.prototype.buy = function (record) {
  if(this.cash >= record.price){
    this.cash -= record.price;
      this.records.push(record);
  }
};
  RecordCollector.prototype.sell = function (record) {
    let index = this.records.indexOf(record);
    if (index !== -1) {
    this.records.splice(index, 1);
  } this.cash += record.price;
    };

    RecordCollector.prototype.valueOfCollection = function () {
      let total = 0;
    this.records.forEach(function(record){
      total += record.price;
    });
    return total;

    };

    RecordCollector.prototype.valueByGenre = function (genre) {
      let recordsByGenre = [];
      let total = 0;
  this.records.forEach(function(record){
    if(record.genre === genre){
      recordsByGenre.push(record);
      total += record.price;
    }
  });
   return total;
    };

    RecordCollector.prototype.sortRecordsByValueDescending = function(){
    return  this.records.sort(function(record1, record2){
        return record2.price - record1.price;
      });
    };

    RecordCollector.prototype.sortRecordsByValueAscending = function(){
    return  this.records.sort(function(record1, record2){
        return record1.price - record2.price;
      });
    };

RecordCollector.prototype.viewMostValuableRecord = function () {
  return this.sortRecordsByValueDescending()[0];
};

RecordCollector.prototype.compareValueOfCollections = function (recordCollector1, recordCollector2) {
  if(recordCollector1.valueOfCollection() > recordCollector2.valueOfCollection()){
    return recordCollector1.name + " has the most valuable collection worth " + recordCollector1.valueOfCollection().toFixed(2);
  }
  else {
    return recordCollector2.name + " has the most valuable collection worth " + recordCollector2.valueOfCollection().toFixed(2);;
  }
};






module.exports = RecordCollector;
