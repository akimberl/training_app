const express = require('express');
const Wod = require('../models/wod');

const router = express.Router();

/* checking if user logged in (if username in req.session) */
const CheckUser = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
};

router.get('/:id', CheckUser, async (req, res) => {
  const wods = await Wod.find({ type: req.params.id });
  res.render('wods', { user: res.locals.user, wods, layout: false });
});

module.exports = router;
