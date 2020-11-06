const mongoose = require('mongoose');

const WodSchema = mongoose.Schema({
  type: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
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
  users: {
    type: mongoose.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Wod', WodSchema);
