require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const hbs = require('hbs');

// import routers
const indexRouter = require('./routers/index');
const loginRouter = require('./routers/login');
const regRouter = require('./routers/registration');
const wodsRouter = require('./routers/wods');

// middleware for reslocals
function resLocal(app) {
  app.use((req, res, next) => {
    res.locals.user = req.session?.user;
    next();
  });
}

// routers
function routers(app) {
  app.use('/', indexRouter);
  app.use('/login', loginRouter);
  app.use('/registration', regRouter);
  app.use('/wods', wodsRouter);
  app.get('/logout', (req, res, next) => {
    req.session.destroy();
    res.redirect('/');
  });
}

// connecting to the mongoose
function dbconnect() {
  mongoose.connect(`${process.env.DB_HOST}`, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false }, () => console.log('Mongoose connected'));
}

// session storage
const month = 1000 * 60 * 60 * 24 * 30; // variable with month in milesecond
function sessionStore(app) {
  app.use(session({
    store: new MongoStore({
      mongooseConnection: mongoose.createConnection(`${process.env.DB_HOST}`, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false }),
    }),
    secret: `${process.env.DB_SECRET}`,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: month, httpOnly: false },
  }));
}

// initial settings
function initialSet(app) {
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, 'views'));

  app.use(express.static(path.join(__dirname, 'public')));

  // register partials
  hbs.registerPartials(`${__dirname}/views/partials`);

  // parse through post request
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
}

// handling error
const port = process.env.PORT ?? 3000;
function ErrorHandler(app) {
  // 404
  app.use((req, res, next) => {
    console.log(`>>>>>${req.url}<<<<< This ROUTE not FOUND 4-0-4`);
    next();
  });
  // error
  app.use((err, req, res, next) => {
    console.error(err);
    next();
  });
}

// hosting
function host(app) {
  app.listen(port, () => console.log(`hosting on ${port}`));
}
module.exports = {
  dbconnect, sessionStore, initialSet, ErrorHandler, host, routers, resLocal,
};
