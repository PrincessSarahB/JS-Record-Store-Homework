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

  RecordCollector.prototype.sell = function (record) {
    let index = this.records.indexOf(record);
    if (index !== -1) {
    this.records.splice(index, 1);
  } this.cash += record.price;
    };


};

module.exports = RecordCollector;
