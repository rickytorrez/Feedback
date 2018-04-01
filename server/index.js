/******     EXPRESS     *****/
const express   = require('express');
require('./services/passport');

const app       = express();

require('./routes/authRoutes')(app);                        // Returns function with the app object (second set of ())

/******     PORT   *****/
const PORT              = process.env.PORT || 5000;
app.listen(PORT); 