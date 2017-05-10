var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre = require('./models/genres');
Book = require('./models/books');
// Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/genres', function(req, res){
  Genre.getGenres(function(err, genres) {
    if(err){
      throw err;
    }
    res.json(genres);
  })
});

app.post('/genres', function(req, res){
  var genre = req.body;
  Genre.addGenre(genre, function(err, genre) {
    if(err){
      throw err;
    }
    res.json(genre);
  })
});

app.get('/books', function(req, res){
  Book.getBooks(function(err, books) {
    if(err){
      throw err;
    }
    res.json(books);
  })
});

app.post('/books', function(req, res){
  var book = req.body;
  Book.addBook(book, function(err, book) {
    if(err){
      throw err;
    }
    res.json(book);
  })
});

app.get('/books/:_id', function(req, res){
  Book.getBookById(req.params._id, function(err, book) {
    if(err){
      throw err;
    }
    res.json(book);
  })
});

app.listen(3000);
console.log("Running on port 3000");


var calcSum = function (a, b) {
  return a + b;
};

var add = calcSum(3,4);