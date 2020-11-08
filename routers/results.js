require('dotenv').config();
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
  const wod = await Wod.findOne({ _id: req.params.id });
  res.render('results', { key: process.env.GOOGLE_API, wod });
});

router.post('/:id', CheckUser, async (req, res) => {
  const user = res.locals.user.name;
  const result = req.body.results;
  console.log(result);
  const obj = { user, result };
  const wod = await Wod.findOneAndUpdate({ _id: req.params.id }, { $push: { results: obj } });
  console.log('added result');
  res.redirect(`/results/${wod._id}`);
});

module.exports = router;
