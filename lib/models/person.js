'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/*****************
 * Person Schema *
 *****************/
var PersonSchema = new Schema({
  firstName:   String,
  lastName:    String,
  phoneNumber: String,
  city:        String,
  zipcode:     Number
});


/*********************
 * Schema Validation *
 *********************/
PersonSchema.path('zipcode').validate(function (num) {
  return num >= 0 && num <= 99999;
}, 'Zipcode must be between 0 and 99999');


// Bind Person to mongoose
mongoose.model('Person', PersonSchema);
