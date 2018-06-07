var RecordStore = function(name, place, balance){
  this.name = name;
  this.place = place;
  this.balance = balance;
  this.inventory = [];

};

RecordStore.prototype.add = function (record) {
  this.inventory.push(record);
};

module.exports = RecordStore;
