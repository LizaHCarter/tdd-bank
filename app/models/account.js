'use strict';

function Account(number, name, bal, type){
  this.number = parseInt(number);
  this.name = name;
  this.bal = parseInt(bal);
  this.type = type;

  this.isSuspend = false;

  this.dep = [];
  this.wit = [];
  this.fee = [];
}

Account.prototype.deposit = function(deposit){
  if(this.isSuspend){
    return;
  }

    this.bal += deposit;
    this.dep.push(deposit);
  
};

Account.prototype.withdraw = function(withdraw){
  
  if(this.isSuspend){
    return;
  }

  this.bal -= withdraw;
  this.wit.push(withdraw);

  if(this.bal<0){
    this.bal -= 50;
    this.fee.push(1);
    
    if(this.fee.length>2){
      this.isSuspend = true;
    }
  }
};
module.exports = Account;
