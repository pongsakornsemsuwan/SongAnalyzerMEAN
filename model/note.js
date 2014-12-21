function Note(name,octave){
  this.name = name;
  this.octave = octave;
}

Note.prototype = {
  constructor:Note,
  getFullName:function() {
    return this.name + this.octave;
  }
};

module.exports = Note;
