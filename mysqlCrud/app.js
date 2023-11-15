const express = require('express');
const app = express();
const router = require('./routes');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up method-override
app.use(methodOverride('_method'));

// Set up views
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Set up routes
app.use('/', router);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
