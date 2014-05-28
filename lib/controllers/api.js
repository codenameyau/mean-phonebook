'use strict';

var mongoose = require('mongoose'),
    Person = mongoose.model('Person');


/*******************
 * API Controllers *
 *******************/

// [GET]: all Persons
exports.getAllPersons = function(req, res) {
  return Person.find(function(error, persons) {
    if (!error)
      return res.json(persons);
    else
      return res.send(error);
  });
};

// [GET]: person by phone number
exports.getPerson = function(req, res) {
  var phone = req.param("phoneNumber");
  return Person.find({phoneNumber: phone}, function(error, person) {
    if (!error)
      return res.json(person);
    else
      return res.send(error);
  });
};

// [POST]: create new Person
exports.newPerson = function(req, res) {
  // Validate phone number match
  var phoneNumber = req.body.phoneNumber.match(/\d{3}-\d{3}-\d{4}/);
  if (!phoneNumber)
    res.send(400);

  // Create new Person
  var person = new Person({
      firstName   : req.body.firstName,
      lastName    : req.body.lastName,
      phoneNumber : req.body.phoneNumber,
      city        : req.body.city,
      zipcode     : req.body.zipcode
  });
  person.save(function(error){
    if (!error)
      return res.send(201);
    else
      return res.send(500);
  });
};
