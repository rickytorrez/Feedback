/******     EXPRESS     *****/
const express           = require('express');
const passport          = require('passport');
const GoogleStrategy    = require('passport-google-oauth20').Strategy;
const keys              = require('./config/keys');
const app               = express();

/******     PASSPORT SET UP FOR GOOGLE     *****/
/******     STRATEGY     *****/
passport.use(
    new GoogleStrategy({
        clientID:       keys.googleClientID,
        clientSecret:   keys.googleClientSecret,
        callbackURL:    '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        console.log('access Token: ' + accessToken);
        console.log('refresh Token: ' + refreshToken);
        console.log('profile', profile);
        }
    )
);

/******     AUTHENTICATE USER WITH GOOGLE   *****/
app.get(
    '/auth/google', 
    passport.authenticate('google', {                       // Refers to google strategy
        scope: ['profile', 'email']                         // What access we want to have in google's user profile
    })
);

/******     EXCHANGE THE CODE FOR THE USER PROFILE   *****/
app.get('/auth/google/callback', passport.authenticate('google'));

/******     PORT   *****/
const PORT              = process.env.PORT || 5000;
app.listen(PORT); 