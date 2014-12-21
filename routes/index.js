var SongService = require('../service/SongService.js');

var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {

  //res.sendFile('index.html',options);
  //res.sendFile(path.join(__dirname, '../public/html', 'index.html'));
  res.render(path.join(__dirname, '../views', 'index'));
});

router.get('/getkey', function(req, res){

  //res.sendFile(path.join(__dirname, '../views', 'getkey.html'));
  res.render(path.join(__dirname, '../views', 'getkey'));

});

router.get('/analyze', function(req, res){

  //res.sendFile(path.join(__dirname, '../public/html', 'analyze.html'));
  res.render(path.join(__dirname, '../views', 'analyze'));

});

module.exports = router;
