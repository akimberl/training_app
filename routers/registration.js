const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('registration');
});

router.post('/', (req, res) => {
  const user = new User({ name: req.body.name, city: req.body.city });
  user.save()
    .then(() => {
      console.log('user saved');
      res.status(200).end();
    })
    .catch((err) => {
      console.log('duplicate', err);
      return res.status(401).end();
    });
});

module.exports = router;
