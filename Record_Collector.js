var RecordCollector = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.records = [];
}

RecordCollector.prototype.buy = function (record) {
  if(this.cash >= record.price){
    this.cash -= record.price;
      this.records.push(record);
  };


};

module.exports = RecordCollector;
