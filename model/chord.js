function Chord(name,notes,root,quality,extension){
  this.name=name;
  this.notes=notes;
  this.root=root;
  this.quality = (typeof quality === 'undefined') ? '' : quality; 
  this.extension = (typeof extension === 'undefined') ? '' : extension;
}

Chord.prototype = {
    constructor:Chord,
    getNotes:function(){
      return this.notes;
    },
    getName:function(){
      return this.name;
    },
    getRelation:function(anotherChord){
      return anotherChord.name;
    },
    getRoman:function(key){
      var theArray = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
      var index = theArray.indexOf(key);
      var distance = 1;
      while(theArray[index]!=this.root.substring(0,1)){
        distance++;
        index++;
        if(index > theArray.length - 1){
          index = 0;
        }
      }


      if(this.quality == 'm'){
        switch (distance){
        case 1:return 'i'+this.extension;
        case 2:return 'ii'+this.extension;
        case 3:return 'iii'+this.extension;
        case 4:return 'iv'+this.extension;
        case 5:return 'v'+this.extension;
        case 6:return 'vi'+this.extension;
        case 7:return 'vii'+this.extension;
        }
      }else {
        switch (distance){
        case 1:return 'I'+this.quality+this.extension;
        case 2:return 'II'+this.quality+this.extension;
        case 3:return 'III'+this.quality+this.extension;
        case 4:return 'IV'+this.quality+this.extension;
        case 5:return 'V'+this.quality+this.extension;
        case 6:return 'VI'+this.quality+this.extension;
        case 7:return 'VII'+this.quality+this.extension;
        }
      }

      return distance;
    }
};

module.exports = Chord;
