var SongService = require('../server/service/songService.js');

var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {

  //res.sendFile('index.html',options);
  //res.sendFile(path.join(__dirname, '../public/html', 'index.html'));

  console.log( path.join(__dirname, '../public/views', 'index') );
  res.render('index');
});

router.get('/getkey', function(req, res){

  //res.sendFile(path.join(__dirname, '../views', 'getkey.html'));
  res.render('getkey');

});

router.get('/analyze', function(req, res){

  //res.sendFile(path.join(__dirname, '../public/html', 'analyze.html'));
  res.render('analyze');

});

router.get('/dick', function(req, res){

  res.render('dick');

});

module.exports = router;
