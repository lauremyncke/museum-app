const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('public'));

app.set("views", "views");
app.set("view engine", "ejs");

const dataFile = require('./data/art.json');

app.get('/', function(req, res){
  res.render('home', {
    art: dataFile.collection
  });
});

app.get('/collection', function(req, res){
  res.render('collection', {
    art: dataFile.collection
  });
});

// detailpagina van een blogbericht
app.get('/collection/:id', function(req,res){
  res.render('detail', {
    item: dataFile.collection[req.params.id]
  });
});

app.get("/contact", function(request, response){
  response.render('contact');
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.listen(app.get('port'), function() {

}));
