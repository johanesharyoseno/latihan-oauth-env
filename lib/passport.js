const passport  = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '800111985353-28olkla5t0mgr6j1nv7nm0udv4osoa3n.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL:'http://localhost:3000/callback',
}, (accessToken, refreshToken, profile, done)=>{
    return done(null,profile);
}));

passport.serializeUser((user, done)=> {
    return done(null,user);
});

passport.deserializeUser((user,done)=>{
    return done(null,user);
});

module.exports = passport;