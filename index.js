require('dotenv').config
const express = require('express');
const session = require('express-session');

const router = require('./router');
const passport = require('./lib/passport');



const port = process.env.PORT || 3000;
const app = express ();

app.use(session({
    secret: process.env.APP_SECRET,
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
app.set('view engine','ejs');
app.use(router)

app.listen(port,()=> {
    console.log('server is running');
});