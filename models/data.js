const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  isStudent: {
    type: Boolean,
    required: true
  },
  motherTongue: {
    type: String,
    required: true
  }
});

module.exports =  mongoose.model('Data', dataSchema);
