const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', async (req, res) => {
  const user = await User.findOne({ name: req.body.name });
  console.log(user);
  if (user && user.city === req.body.city) {
    req.session.user = user;
    console.log('user logged in');
    return res.status(200).end();
  }
  res.status(401).end();
});

module.exports = router;
