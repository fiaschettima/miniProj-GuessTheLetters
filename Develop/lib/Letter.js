class Letter {
  constructor(letter){
    this.letter = letter;
    if(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(letter)){
      this.visible = true;
    }else{
      this.visible = false;
    }
  }
  visible(){
  
    return this.visible;
  }
  toString(){
    if(!this.visible){
      return '_';
    }else{
      return this.letter;
    }
  }
  guess(input){
    if(this.letter === input){
      // this.visible = true;
      return true;
    }
    return false;
  }
  getSolution(){
    return this.letter;
  }
}

module.exports = Letter;

