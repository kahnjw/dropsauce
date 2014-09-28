'use strict';

var chai = require('chai');
var promiseHelpers = require('../src/index.js');
var wrap = promiseHelpers.wrap;
var notify = promiseHelpers.notify;
var insert = promiseHelpers.insert;
var log = promiseHelpers.log;
var dropsauce = require('../src/index');
var execSync = require('exec-sync');


chai.should();

describe('dropsauce', function() {
  describe('templates', function() {
    it('returns a header template', function() {
      dropsauce.header.should.be.a('string');
    });

    it('contains valid less', function() {
      execSync('lessc --lint src/less/main.less');
    });
  });
});