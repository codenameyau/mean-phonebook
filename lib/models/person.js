'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/*****************
 * Person Schema *
 *****************/
var PersonSchema = new Schema({
  firstName:   {type: String, required: true},
  lastName:    {type: String, required: true},
  phoneNumber: {type: String, match: /\d{3}-\d{3}-\d{4}/, required: true, unique: true},
  zipcode:     {type: Number, min: 0, max: 99999}
});


// Bind Person to mongoose
mongoose.model('Person', PersonSchema);
