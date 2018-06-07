require('./Record.js')

var RecordStore = function(name, place, balance){
  this.name = name;
  this.place = place;
  this.balance = balance;
  this.inventory = [];

};

RecordStore.prototype.add = function (record) {
  this.inventory.push(record);
};

RecordStore.prototype.listInventory = function () {
  inventoryList = [];
  this.inventory.forEach(function (record){
    item = record.toString();
    inventoryList.push(item);
  });

  return inventoryList;

};

RecordStore.prototype.sell = function (record) {
  let index = this.inventory.indexOf(record);
  if (index !== -1) {
  this.inventory.splice(index, 1);
    } this.balance += record.price;
  };





module.exports = RecordStore;
