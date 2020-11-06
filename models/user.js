const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  city: {
    type: String,
    require: true,
    unique: true,
  },
  results: [{
    type: mongoose.ObjectId,
    ref: 'Wod',
  }],
});

module.exports = mongoose.model('User', UserSchema);
