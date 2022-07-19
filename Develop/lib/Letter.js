class Letter {
  constructor(letter){
    this.char = letter;
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
      return this.char;
    }
  }
  guess(input){
    if(this.char === input){
      this.visible = true;
      return true;
    }
    return false;
  }
  getSolution(){
    return this.char;
  }
}

module.exports = Letter;

