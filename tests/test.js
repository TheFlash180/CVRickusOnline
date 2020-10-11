'use strict';

var test = require('unit.js');
var index = require('../index.js');

describe('Tests index', function() {
  it('verifies successful response', function(done) {
    index.get({ /* event */ }, { /* context */ }, (err, result) => {
      try {
        test.number(result.statusCode).is(200);
        test.value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});

var about = require('../about.js');

describe('Tests about', function() {
  it('verifies successful response', function(done) {
    about.get({ /* event */ }, { /* context */ }, (err, result) => {
      try {
        test.number(result.statusCode).is(200);
        test.value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});

var contact = require('../contact.js');

describe('Tests contact', function() {
  it('verifies successful response', function(done) {
    contact.get({ /* event */ }, { /* context */ }, (err, result) => {
      try {
        test.number(result.statusCode).is(200);
        test.value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});

var projects = require('../projects.js');

describe('Tests projects', function() {
  it('verifies successful response', function(done) {
    projects.get({ /* event */ }, { /* context */ }, (err, result) => {
      try {
        test.number(result.statusCode).is(200);
        test.value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});