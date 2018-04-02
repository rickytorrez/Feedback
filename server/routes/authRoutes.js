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
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google')
    );

    /******     LOGS USER OUT   *****/
    app.get(
        '/api/logout', 
        (req, res) => {
        req.logout();
        res.send(req.user);
        }
    );

    /******     AUTHENTICATION ROUTE ONCE USER LOGS IN   *****/
    app.get(
        '/api/current_user', 
        (req, res) => {
            res.send(req.user);
        }
    );
};