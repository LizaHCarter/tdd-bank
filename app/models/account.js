'use strict';

function Account(number, name, bal, type){
  this.number = parseInt(number);
  this.name = name;
  this.bal = parseInt(bal);
  this.type = type;
  this.dep = [];
  this.wit = [];
}

Account.prototype.deposit = function(deposit){
  this.bal += deposit;
  this.dep.push(deposit);
};

module.exports = Account;
