var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', function (req, res, next) {
  res.json([
    {title: 'Spirited Away', year:'2001'},
    {title: 'Central Station', year:'1983'},
    {title: 'Mad Max', year:'2015'},
    {title: 'Avatar', year:'2011'}
    ]);
});

var server = app.listen(8080, function() {
      console.log('I am da servah!');
    });