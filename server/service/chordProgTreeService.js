TreeModel = require('tree-model');
var properties = require('properties');


var propMap = new Map();
var tree;

var ChordProgTreeService = function(){
  console.log('ChordProgTreeService construct');
};


ChordProgTreeService.getTree = function(){
  return tree;
};

ChordProgTreeService.getValue = function(key){
  console.log(propMap.get(key));
  return propMap.get(key);
};

ChordProgTreeService.loadProperties = function(path, callback){
  options = {
    path: true,
    include: true,
    namespaces: true,
    sections: true
  };

  properties.parse(path, options, function (error, p) {
    if (error) {
      return console.error(error);
    }

    buildTree(p);

    console.log('parse success');
    callback();

  });
};

function buildTree(p){

  console.log('p' + p);
  var treeModel = new TreeModel();
  var root = treeModel.parse({name: 'root'});

  for (i in p){
    if (typeof(p[i]) === 'object'  ){
      // console.log( i,p[i])
      root.addChild( buildChildren(i,p[i],i) );
    }

  }
  tree = root;
}

function buildChildren(i,p,key){
  var tree = new TreeModel();
  var node = tree.parse({name: i});
  for (i in p){
    if (typeof(p[i]) === 'object' ){
      //console.log( i,p[i])
      node.addChild( buildChildren(i,p[i], key + '.' + i) );
    } else if(typeof(p[i]) === 'string' ){
      //console.log(key +',' + p[i]);
      propMap.set(key,p[i]);


      propMap.set('please','dontmakemelaugh');
      //console.log(propMap.get(key));
    }

  }
  return node;
}

module.exports = ChordProgTreeService;