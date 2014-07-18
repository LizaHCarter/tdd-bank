'use strict';

/* global describe, it */

var expect = require('chai').expect;

var Bank = require('../../app/models/bank');

describe('Bank', function(){
  describe('constructor', function(){
    it('should create a bank', function (){
      var chase = new Bank('chase');

      expect(chase).to.be.instanceof(Bank);
      expect(chase.name).to.have.string('chase');
      expect(chase.accts).to.have.length(0);
    });
  });
});
