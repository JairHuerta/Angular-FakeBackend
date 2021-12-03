// app.use(express.static('./dist/angular-registration-login-example'));

// app.get('/*', (req, res) => {
//     res.sendFile('index.html', {root: 'dist/angular-registration-login-example/'})
// });

// app.listen(process.env.PORT || 8080);

const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/angular-registration-login-example'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/angular-registration-login-example/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 8080);