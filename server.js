var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', function (req, res, next) {
  res.json([
    {title: 'Spirited Away'},
    {title: 'Central Station'},
    {title: 'Mad Max'},
    {title: 'Avatar'}
    ]);
});

var server = app.listen(8080, function() {
      console.log('I am da servah!');
    });