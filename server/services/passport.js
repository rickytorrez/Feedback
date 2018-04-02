const passport          = require('passport');
const GoogleStrategy    = require('passport-google-oauth20').Strategy;
const mongoose          = require('mongoose');
const keys              = require('../config/keys');

const User              = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        })
});


/******     PASSPORT SET UP FOR GOOGLE     *****/
/******     STRATEGY     *****/
passport.use(
    new GoogleStrategy({
        clientID:       keys.googleClientID,
        clientSecret:   keys.googleClientSecret,
        callbackURL:    '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })                                      // Look through users collection, find the first record of a googleID equals to the profileID
            .then((existingUser) => {                                               // Model instance that represents if a user was found
                if (existingUser) {                                                 // We already have a record with the given profileID
                    done(null, existingUser);
                } else {                                                            // We don't have a user record with this ID, make a new record 
                    new User ({ googleId: profile.id })                             // Creates a new model instance of a user and 
                        .save()                                                     // Saves to the database
                        .then(user => done(null, user))
                }
            });
        }
    )
);