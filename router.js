const router = require('express').Router();
const passport = require('./lib/passport');
const auth = require('./controllers/auth-controllers')
router.get ('/oauth', passport.authenticate('google', {scope: ['email', 'profile']
}));

router.get('/callback', passport.authenticate('google',{
    successRedirect: '/dashboard',
    failureRedirect: '/login',
}));
router.get('/login',auth.loginPage)
module.exports = router;