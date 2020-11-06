const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  city: {
    type: String,
    required: true,
  },
  results: [{
    type: Object,
  }],
});

module.exports = mongoose.model('User', UserSchema);
