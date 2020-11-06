const mongoose = require('mongoose');

const WodSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  rx: {
    type: String,
  },
  format: {
    type: String,
  },
  wod: [{
    type: String,
  }],
  results: [{
    type: Object,
  }],
});

module.exports = mongoose.model('Wod', WodSchema);
