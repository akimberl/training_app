require('dotenv').config();
const express = require('express');

const router = express.Router();

/* checking if user logged in (if username in req.session) */
const CheckUser = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
};

router.get('/:id', CheckUser, async (req, res) => {
  const key = process.env.WEATHER_KEY;
  res.render('profile', { key, user: res.locals.user, layout: false });
});

module.exports = router;
