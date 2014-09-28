'use strict';

var chai = require('chai');
var promiseHelpers = require('../src/index.js');
var wrap = promiseHelpers.wrap;
var notify = promiseHelpers.notify;
var insert = promiseHelpers.insert;
var log = promiseHelpers.log;
var dropsauce = require('../src/index');


chai.should();

describe('dropsauce', function() {
  describe('templates', function() {
    it('returns a header template', function() {
      dropsauce.header.should.be.a.string;
    });
  });
});