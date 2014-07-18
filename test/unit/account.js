'use strict';

/*global describe, it*/

var expect = require('chai').expect;

var Account = require('../../app/models/account.js');

describe('Account', function(){
  describe('constructor', function(){
    it('should create an account', function(){
      var acct = new Account(3,'Sara', 1500, 'savings');

      expect(acct).to.be.instanceof(Account);
      expect(acct.number).to.equal(3);
      expect(acct.name).to.have.string('Sara');
      expect(acct.bal).to.equal(1500);
      expect(acct.type).to.have.string('savings');
      expect(acct.dep).to.have.length(0);
      expect(acct.wit).to.have.length(0);
    });
  });
  describe('#deposit', function(){
    it('should deposit money in account', function(){
      var acct = new Account(3,'Sara', 1500, 'savings');

      acct.deposit(5000);
      expect(acct.bal).to.equal(6500);
      expect(acct.dep).to.have.length(1);
    });
  });
});
