const passport  = require('passport');

module.exports = (app) => {
    /******     AUTHENTICATE USER WITH GOOGLE   *****/
    app.get(
        '/auth/google', 
        passport.authenticate('google', {                       // Refers to google strategy
            scope: ['profile', 'email']                         // What access we want to have in google's user profile
        })
    );

    /******     EXCHANGE THE CODE FOR THE USER PROFILE   *****/
    app.get('/auth/google/callback', passport.authenticate('google'));
};