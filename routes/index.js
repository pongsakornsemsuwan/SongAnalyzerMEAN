var SongService = require('../service/SongService.js');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  //res.sendFile('index.html',options);
  res.render('index', { title: 'Express' });
});

router.get('/getkey', function(req, res){

  var path = require('path');
  res.sendFile(path.join(__dirname, '../public/html', 'getkey.html'));

});

router.get('/analyze', function(req, res){

  var path = require('path');
  res.sendFile(path.join(__dirname, '../public/html', 'analyze.html'));

});

module.exports = router;
