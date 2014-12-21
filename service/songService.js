Note = require('../../model/note.js');
Chord = require('../../model/chord.js');

var allKey = ['C','G','D','A','E','B','F#','F','Bb','Eb','Ab','Db'];

var chordMap = new Map();
chordMap.set('D', new Chord('D', ['D','F#','A'],'D'));
chordMap.set('C', new Chord('C', ['C','E','G'],'C'));
chordMap.set('Cmaj7',new Chord('Cmaj7', ['C','E','G','B'],'C','','maj7'));
chordMap.set('C7', new Chord('C7', ['C','E','G','A#'],'C','','7'));
chordMap.set('Cm', new Chord('Cm', ['C','D#','G'],'C','m'));
chordMap.set('Cm7', new Chord('Cm7', ['C','D#','G','A#'],'C','m','7'));

chordMap.set('Dmaj7', new Chord('Dmaj7', ['D','F#','A','C#'],'D','','maj7'));
chordMap.set('D7', new Chord('D7', ['D','F#','A','C'],'D','','7'));
chordMap.set('Dm', new Chord('Dm', ['D','F','A'],'D','m'));
chordMap.set('Dm7', new Chord('Dm7', ['D','F','A','C'],'D','m','7'));

chordMap.set('E', new Chord('E', ['E','G#','B'],'E'));
chordMap.set('Emaj7', new Chord('Emaj7', ['E','G#','B','D#'],'E','','maj7'));
chordMap.set('E7', new Chord('E7', ['E','G#','B','D'],'E','','7'));
chordMap.set('Em', new Chord('Em', ['E','G','B'],'E','m'));
chordMap.set('Em7', new Chord('Em7', ['E','G','B','D'],'E','m','7'));

chordMap.set('F', new Chord('F', ['F','A','C'],'F'));
chordMap.set('Fmaj7', new Chord('Fmaj7', ['F','A','C','E'],'F','','maj7'));
chordMap.set('F7', new Chord('F7', ['F','A','C','D#'],'F','','7'));
chordMap.set('Fm', new Chord('Fm', ['F','G#','C'],'F','m'));
chordMap.set('Fm7', new Chord('Fm7', ['F','G#','C','D#'],'F','m','7'));

chordMap.set('G', new Chord('G', ['G','B','D'],'G'));
chordMap.set('Gmaj7', new Chord('Gmaj7', ['G','B','D','F#'],'G','','maj7'));
chordMap.set('G7', new Chord('G7', ['G','B','D','F'],'G','','7'));
chordMap.set('Gm', new Chord('Gm', ['G','A#','D'],'G','m'));
chordMap.set('Gm7', new Chord('Gm7', ['G','A#','D','F'],'G','m','7'));

chordMap.set('A', new Chord('A', ['A','C#','E'],'A'));
chordMap.set('Amaj7', new Chord('Amaj7', ['A','C#','E','G#'],'A','','maj7'));
chordMap.set('A7', new Chord('A7', ['A','C#','E','G'],'A','','7'));
chordMap.set('Am', new Chord('Am', ['A','C','E'],'A','m'));
chordMap.set('Am7', new Chord('Am7', ['A','C','E','G'],'A','m','7'));

chordMap.set('B', new Chord('B', ['B','D#','F#'],'B'));
chordMap.set('Bmaj7', new Chord('Bmaj7', ['B','D#','F#','A#'],'B','','maj7'));
chordMap.set('B7', new Chord('B7', ['B','D#','F#','A'],'B','','7'));
chordMap.set('Bm', new Chord('Bm', ['B','D','F#'],'B','m'));
chordMap.set('Bm7', new Chord('Bm7', ['B','D','F#','A'],'B','m','7'));

chordMap.set('C#', new Chord('C#', ['C#','F','G#'],'C#'));
chordMap.set('C#maj7', new Chord('C#maj7', ['C#','F','G#','C'],'C#','','maj7'));
chordMap.set('C#7', new Chord('C#7', ['C#','F','G#','B'],'C#','','7'));
chordMap.set('C#m', new Chord('C#m', ['C#','E','G#'],'C#','m'));
chordMap.set('C#m7', new Chord('C#m7', ['C#','E','G#','B']),'C#','m','7');

chordMap.set('D#', new Chord('D#', ['D#','G','A#'],'D#'));
chordMap.set('D#maj7', new Chord('D#maj7', ['D#','G','A#','D'],'D#','','maj7'));
chordMap.set('D#7', new Chord('D#7', ['D#','G','A#','C#'],'D#','','7'));
chordMap.set('D#m', new Chord('D#m', ['D#','F#','A#'],'D#','m'));
chordMap.set('D#m7', new Chord('D#m7', ['D#','F#','A#','C#'],'D#','m','7'));

//ACTUALLY F
chordMap.set('E#', new Chord('E#', ['F','A','C'],'E#'));
chordMap.set('E#maj7', new Chord('E#maj7', ['F','A','C','E'],'E#','','maj7'));
chordMap.set('E#7', new Chord('E#7', ['F','A','C','D#'],'E#','','7'));
chordMap.set('E#m', new Chord('E#m', ['F','G#','C'],'E#','m'));
chordMap.set('E#m7', new Chord('E#m7', ['F','G#','C','D#'],'E#','m','7'));

chordMap.set('F#', new Chord('F#', ['F#','A#','C#'],'F#'));
chordMap.set('F#maj7', new Chord('F#maj7', ['F#','A#','C#','F'],'F#','','maj7'));
chordMap.set('F#7', new Chord('F#7', ['F#','A#','C#','E'],'F#','','7'));
chordMap.set('F#m', new Chord('F#m', ['F#','A','C#'],'F#','m'));
chordMap.set('F#m7', new Chord('F#m7', ['F#','A','C#','E'],'F#','m','7'));

chordMap.set('G#', new Chord('G#', ['G#','C','D#'],'G#'));
chordMap.set('G#maj7', new Chord('G#maj7', ['G#','C','D#','G'],'G#','','7'));
chordMap.set('G#7', new Chord('G#7', ['G#','C','D#','F#'],'G#','','7'));
chordMap.set('G#m', new Chord('G#m', ['G#','B','D#'],'G#','m'));
chordMap.set('G#m7', new Chord('G#m7', ['G#','B','D#','F#'],'G#','m','7'));

chordMap.set('A#', new Chord('A#', ['A#','D','F'],'A#'));
chordMap.set('A#maj7', new Chord('A#maj7', ['A#','D','F','A'],'A#','','maj7'));
chordMap.set('A#7', new Chord('A#7', ['A#','D','F','G#'],'A#','','7'));
chordMap.set('A#m', new Chord('A#m', ['A#','C#','F'],'A#','m'));
chordMap.set('A#m7', new Chord('A#m7', ['A#','C#','F','G#'],'A#','m','7'));

//ACTUALLY C
chordMap.set('B#', new Chord('B#', ['C','E','G'],'B#'));
chordMap.set('B#maj7', new Chord('B#maj7', ['C','E','G','B'],'B#','','maj7'));
chordMap.set('B#7', new Chord('B#7', ['C','E','G','A#'],'B#','','7'));
chordMap.set('B#m', new Chord('B#m', ['C','D#','G'],'B#','m'));
chordMap.set('B#m7', new Chord('B#m7', ['C','D#','G','A#'],'B#','m','7'));

var keyMap = new Map();
keyMap.set('C',['C','D','E','F','G','A','B']);
keyMap.set('G',['C','D','E','F#','G','A','B']);
keyMap.set('D',['C#','D','E','F#','G','A','B']);
keyMap.set('A',['C#','D','E','F#','G#','A','B']);
keyMap.set('E',['C#','D#','E','F#','G#','A','B']);
keyMap.set('B',['C#','D#','E','F#','G#','A#','B']);
keyMap.set('F#',['C#','D#','F','F#','G#','A#','B']);

keyMap.set('F',['C','D','E','F','G','A','A#']);
keyMap.set('Bb',['C','D','D#','F','G','A','A#']);
keyMap.set('Eb',['C','D','D#','F','G','G#','A#']);
keyMap.set('Ab',['C','D#','D#','F','G','G#','A#']);
keyMap.set('Db',['C','D#','D#','F','F#','G#','A#']);

var notesPool = [];

var flatToSharpMap = new Map();
flatToSharpMap.set('Db','C#');
flatToSharpMap.set('Eb','D#');
flatToSharpMap.set('Fb','E');
flatToSharpMap.set('Gb','F#');
flatToSharpMap.set('Ab','G#');
flatToSharpMap.set('Bb','A#');
flatToSharpMap.set('Cb','B');

var keyCPoint = 0;
var keyGPoint = 0;
var keyDPoint = 0;
var keyAPoint = 0;
var keyEPoint = 0;
var keyFSharpPoint = 0;
var keyDbPoint = 0;
var keyAbPoint = 0;
var keyEbPoint = 0;
var keyBbPoint = 0;
var keyFPoint = 0;

var SongService = function(){
  
  console.log('songservice construct');
  
};

SongService.getKey = function( chordArray ){
  console.log('SongService.getKey' + chordArray);
  
  //trim chord
  chordArray = chordArray.map( function(element){
    return element.trim();
  });

  //convert 
  chordArray = chordArray.map( flatToSharp );

  resetPoint();
  
  try{
    chordArray.forEach(function(element){
      breakTheChord(element);
    });
  }
  catch(ex){
    throw ex;
  }
  
  allKey.forEach(function(key){
    notesPool.forEach( function(element,index,array){
      calculatePoints(element, key);
    }) ;
  });
  
  var pointSet = new Set();
  pointSet.add(keyCPoint);
  pointSet.add(keyGPoint);
  pointSet.add(keyDPoint);
  pointSet.add(keyAPoint);
  pointSet.add(keyEPoint);
  pointSet.add(keyFSharpPoint);
  pointSet.add(keyDbPoint);
  pointSet.add(keyAbPoint);
  pointSet.add(keyEbPoint);
  pointSet.add(keyBbPoint);
  pointSet.add(keyFPoint);


  var pointArray = [keyCPoint,keyGPoint,keyDPoint,keyAPoint,keyEPoint,
                    keyFSharpPoint,keyDbPoint,keyAbPoint,keyEbPoint,
                    keyBbPoint,keyFPoint];
  var sortedPointArray = [keyCPoint,keyGPoint,keyDPoint,keyAPoint,keyEPoint,
                          keyFSharpPoint,keyDbPoint,keyAbPoint,keyEbPoint,
                          keyBbPoint,keyFPoint];

  sortedPointArray.sort(function(a, b){return b-a});

  var key1,key2,key3,compat1,compat2,compat3;
  var max = sortedPointArray[0];
  var index = pointArray.indexOf(max);
  //remove point after use
  pointArray[index] = 0;
  switch(index){
  case 0: key1='C'; compat1=Number(keyCPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 1: key1='G'; compat1=Number(keyGPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 2: key1='D'; compat1=Number(keyDPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 3: key1='A'; compat1=Number(keyAPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 4: key1='E'; compat1=Number(keyEPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 5: key1='F#'; compat1=Number(keyFSharpPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 6: key1='Db'; compat1=Number(keyDbPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 7: key1='Ab'; compat1=Number(keyAbPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 8: key1='Eb'; compat1=Number(keyEbPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 9: key1='Bb'; compat1=Number(keyBbPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 10: key1='F'; compat1=Number(keyFPoint/notesPool.length*100).toFixed(2) + '%'; break;
  default:key1='Other';
  }

  max = sortedPointArray[1];
  var index2 = pointArray.indexOf(max);
  pointArray[index2] = 0;
  switch(index2){
  case 0: key2='C'; compat2=Number(keyCPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 1: key2='G'; compat2=Number(keyGPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 2: key2='D'; compat2=Number(keyDPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 3: key2='A'; compat2=Number(keyAPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 4: key2='E'; compat2=Number(keyEPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 5: key2='F#'; compat2=Number(keyFSharpPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 6: key2='Db'; compat2=Number(keyDbPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 7: key2='Ab'; compat2=Number(keyAbPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 8: key2='Eb'; compat2=Number(keyEbPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 9: key2='Bb'; compat2=Number(keyBbPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 10: key2='F'; compat2=Number(keyFPoint/notesPool.length*100).toFixed(2) + '%'; break;
  default:key2='Other';
  }

  max = sortedPointArray[2];
  var index3 = pointArray.indexOf(max);
  switch(index3){
  case 0: key3='C'; compat3=Number(keyCPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 1: key3='G'; compat3=Number(keyGPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 2: key3='D'; compat3=Number(keyDPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 3: key3='A'; compat3=Number(keyAPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 4: key3='E'; compat3=Number(keyEPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 5: key3='F#'; compat3=Number(keyFSharpPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 6: key3='Db'; compat3=Number(keyDbPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 7: key3='Ab'; compat3=Number(keyAbPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 8: key3='Eb'; compat3=Number(keyEbPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 9: key3='Bb'; compat3=Number(keyBbPoint/notesPool.length*100).toFixed(2) + '%'; break;
  case 10: key3='F'; compat3=Number(keyFPoint/notesPool.length*100).toFixed(2) + '%'; break;
  default:key3='Other';
  }
  
  console.log('C Compatibility : ' + keyCPoint/notesPool.length*100 + '% , points = ' + keyCPoint);
  console.log('G Compatibility : ' + keyGPoint/notesPool.length*100 + '% , points = ' + keyGPoint);
  console.log('D Compatibility : ' + keyDPoint/notesPool.length*100 + '% , points = ' + keyDPoint);
  console.log('A Compatibility : ' + keyAPoint/notesPool.length*100 + '% , points = ' + keyAPoint);
  console.log('E Compatibility : ' + keyEPoint/notesPool.length*100 + '% , points = ' + keyEPoint);
  console.log('F# Compatibility : ' + keyFSharpPoint/notesPool.length*100 + '% , points = ' + keyFSharpPoint);
  console.log('Db Compatibility : ' + keyDbPoint/notesPool.length*100 + '% , points = ' + keyDbPoint);
  console.log('Ab Compatibility : ' + keyAbPoint/notesPool.length*100 + '% , points = ' + keyAbPoint);
  console.log('Eb Compatibility : ' + keyEbPoint/notesPool.length*100 + '% , points = ' + keyEbPoint);
  console.log('Bb Compatibility : ' + keyBbPoint/notesPool.length*100 + '% , points = ' + keyBbPoint);
  console.log('F Compatibility : ' + keyFPoint/notesPool.length*100 + '% , points = ' + keyFPoint);
  
  var outArray = new Array();
  
  outArray.push({'key':key1, 'compat':compat1});
  outArray.push({'key':key2, 'compat':compat2});
  outArray.push({'key':key3, 'compat':compat3});
  
  return outArray;
}

SongService.getChord = function( chord ){
  return chordMap.get(chord);
}

function resetPoint(){
  console.log('resetPoint');
  console.log(keyCPoint);
  notesPool = [];
  keyCPoint = 0;
  keyGPoint = 0;
  keyDPoint = 0;
  keyAPoint = 0;
  keyEPoint = 0;
  keyFSharpPoint = 0;
  keyDbPoint = 0;
  keyAbPoint = 0;
  keyEbPoint = 0;
  keyBbPoint = 0;
  keyFPoint = 0;
}


/**
 * Break the chord into notes and put notes to the pool
 * @param chord
 */
function breakTheChord (chord){

  try{
    console.log('processing chord ' + chord);
    console.log(',break to ' + chordMap.get(chord).getNotes());
    var tmpChord = chordMap.get(chord);
    tmpChord.getNotes().forEach(function(element,index,array){
      notesPool.push(element);
    })
  }catch(ex){
    console.log('Er');
    throw(ex);
  }
}

function flatToSharp (chord){
  if(chord.substring(1,2) === 'b'){
    var flatChord = chord.substring(0,2);
    console.log(flatToSharpMap.get(flatChord) + chord.substring(2) );
    return flatToSharpMap.get(flatChord) + chord.substring(2);
  }else{
    return chord;
  }
}

function calculatePoints (element, key) {
  var tmpKey = keyMap.get(key);
  if(tmpKey.indexOf(element) > -1){
    if(key === 'C'){
      keyCPoint++;
    }
    if(key === 'G'){
      keyGPoint++;
    }
    if(key === 'D'){
      keyDPoint++;
    }
    if(key === 'A'){
      keyAPoint++;
    }
    if(key === 'E'){
      keyEPoint++;
    }
    if(key === 'F#'){
      keyFSharpPoint++;
    }
    if(key === 'Db'){
      keyDbPoint++;
    }
    if(key === 'Ab'){
      keyAbPoint++;
    }
    if(key === 'Eb'){
      keyEbPoint++;
    }
    if(key === 'Bb'){
      keyBbPoint++;
    }
    if(key === 'F'){
      keyFPoint++;
    }
  }
}

function secretFunction(){
  console.log('Shh... this is secret function');
}

SongService.goSecret = function(){
  secretFunction();
};

module.exports = SongService;