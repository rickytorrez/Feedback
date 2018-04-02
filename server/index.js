/******     EXPRESS     *****/
const express       = require('express');
const mongoose      = require('mongoose');
const cookieSession = require('cookie-session');
const passport      = require('passport');
const keys          = require('./config/keys')
require('./models/User');                                   // Order of operations should create the model first
require('./services/passport');                             // So passport can use it once it's set up

mongoose.connect(keys.mongoURI);

const app           = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);                        // Returns function with the app object (second set of ())

/******     PORT   *****/
const PORT              = process.env.PORT || 5000;
app.listen(PORT); 