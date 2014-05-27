'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Person = mongoose.model('Person');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

// GET: gets all Persons
exports.getAllPersons = function(req, res) {
  return Person.find(function(error, persons) {
    if (!error)
      return res.json(persons);
    else
      return res.send(error);
  });
};
