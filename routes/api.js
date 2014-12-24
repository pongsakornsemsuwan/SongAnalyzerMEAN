var SongService = require('../service/SongService.js');
var ChordProgTree = require('../service/chordProgTreeService.js');
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/getkey', function(req, res) {
  var chordArray = req.param('chord').split(',');
  var keyCompatArray = SongService.getKey(chordArray);
  console.log(keyCompatArray);
  res.send(keyCompatArray);
  //res.render('index', { title: 'Express' });
});

router.get('/analyze', function(req, res) {

  var key = req.param('key') || null;

  //String input
  //var intro = this.introIn = this.param('intro');
  var intro = req.param('intro') || '';
  var verse = req.param('verse') || '';
  var prechorus = req.param('prechorus') || '';
  var chorus = req.param('chorus') || '';
  var solo = req.param('solo') || '';
  var bridge = req.param('bridge') || '';
  var outro = req.param('outro') || '';

  //Array object for each section
  var introArray = [];
  var verseArray = [];
  var prechorusArray = [];
  var chorusArray = [];
  var soloArray = [];
  var bridgeArray = [];
  var outroArray = [];

  //split string to array of each section

  pushToItsOwnArray(intro, introArray);
  pushToItsOwnArray(verse, verseArray);
  pushToItsOwnArray(prechorus, prechorusArray);
  pushToItsOwnArray(chorus, chorusArray);
  pushToItsOwnArray(solo, soloArray);
  pushToItsOwnArray(bridge, bridgeArray);
  pushToItsOwnArray(outro, outroArray);

  if (key === null || key === '') {

    //whole song
    var chordArray = [];

    //concat whole song to chordArray --> to find the key
    if (introArray !== null)
      chordArray = chordArray.concat(introArray);
    if (verseArray !== null)
      chordArray = chordArray.concat(verseArray);
    if (prechorusArray !== null)
      chordArray = chordArray.concat(prechorusArray);
    if (chorusArray !== null)
      chordArray = chordArray.concat(chorusArray);
    if (soloArray !== null)
      chordArray = chordArray.concat(soloArray);
    if (bridgeArray !== null)
      chordArray = chordArray.concat(bridgeArray);
    if (outroArray !== null)
      chordArray = chordArray.concat(outroArray);

    key = SongService.getKey(chordArray)[0].key;
  }

  console.log('key=' + key);

  //convert each section to Roman, to analyze chord progression
  introArray = weCameAsRoman( introArray, key);
  verseArray = weCameAsRoman( verseArray, key);
  prechorusArray = weCameAsRoman( prechorusArray, key);
  chorusArray = weCameAsRoman( chorusArray, key);
  soloArray = weCameAsRoman( soloArray, key);
  bridgeArray = weCameAsRoman( bridgeArray, key);
  outroArray = weCameAsRoman( outroArray, key);


  ChordProgTree.loadProperties(path.join(__dirname, '../chordprog.properties'), render);

  function render(){
    console.log(ChordProgTree.getTree());

    var tree = ChordProgTree.getTree();

    var introOut = createProgressionChunk(introArray, tree);
    var verseOut = createProgressionChunk(verseArray, tree);
    var prechorusOut = createProgressionChunk(prechorusArray, tree);
    var chorusOut = createProgressionChunk(chorusArray, tree);
    var soloOut = createProgressionChunk(soloArray, tree);
    var bridgeOut = createProgressionChunk(bridgeArray, tree);
    var outroOut = createProgressionChunk(outroArray, tree);

    var resultMap = {};
    resultMap['key'] = key;
    resultMap['intro'] = introOut;
    resultMap['verse'] = verseOut;
    resultMap['prechorus'] = prechorusOut;
    resultMap['chorus'] = chorusOut;
    resultMap['solo'] = soloOut;
    resultMap['bridge'] = bridgeOut;
    resultMap['outro'] = outroOut;

    //console.log(ChordProgTree.getValue('I,V'));
    res.send(resultMap);
    //res.send(ChordProgTree.getTree().toString());

  }
});

function pushToItsOwnArray(input, array){
  console.log('input' + input);
  if(input!==null && input.trim() !== '' ){
    input.split(',').forEach(function pushToArray(element){
      array.push(element.trim());
    });
  }
}

function weCameAsRoman(array,key) {
  if ( array.length !== 0 ){
    array = array.map( function(element){
      return SongService.getChord(element).getRoman(key);
    });
    return array;
  }
  return [];
}

function findLongestMatch(node, sourceArray, index){
  console.log(node);
  var matchedArray = [];

  if( node.children ) {
    var childrenNodeArray = node.children;
    console.log(childrenNodeArray);
    var childrenArray = childrenNodeArray.map(function (element) {
      return element.name;
    });

    if (childrenArray.indexOf(sourceArray[index]) > -1) {
      console.log('found at index' + childrenArray.indexOf(sourceArray[index]));
      matchedArray.push(sourceArray[index]);

      var matchedNode = childrenNodeArray[childrenArray.indexOf(sourceArray[index])];

      console.log('here');
      return matchedArray.concat( findLongestMatch(matchedNode, sourceArray, index + 1) );

    } else {
      console.log('no match');
      return [];
    }
  } else {
    return [];
  }
}

function createProgressionChunk(sourceArray, tree) {

  var chordProgMap = [];
  var startIndex = 0;
  var outputIndex = 0;

  while (startIndex < sourceArray.length) {

    console.log(startIndex);
    var matchedArray = findLongestMatch(tree.model, sourceArray, startIndex);
    console.log('yoyo' + matchedArray);
    //if not match at all, move to next chord.
    if (matchedArray.length === 0) {
      console.log(sourceArray[startIndex] + ' not match');
      chordProgMap[outputIndex] = {name:sourceArray[startIndex],description:''};
      //chordProgMap[sourceArray[startIndex]] = '';
      outputIndex++;
      startIndex++;

    } else {
      while (typeof ChordProgTree.getValue(matchedArray.toString().replace(/,/g, '.')) === 'undefined' && matchedArray.length > 0 ) {
        console.log(matchedArray.length);
        matchedArray.splice(matchedArray.length - 1, 1);
      }

      if( matchedArray.length === 0){
        chordProgMap[outputIndex] = {name:sourceArray[startIndex],description:''};
        //chordProgMap[sourceArray[startIndex]] = '';
        startIndex++;
        outputIndex++;
      } else {

        var chordProgDesc = ChordProgTree.getValue(matchedArray.toString().replace(/,/g, '.'));
        console.log(matchedArray + ' match with' + chordProgDesc);

        var myString = matchedArray.toString();

        chordProgMap[outputIndex] = {name: myString, description: chordProgDesc};

        startIndex += matchedArray.length;
        outputIndex++;
      }
    }
  }

  return chordProgMap;
}


module.exports = router;