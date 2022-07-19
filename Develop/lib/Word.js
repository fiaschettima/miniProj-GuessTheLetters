const Letter = require("./Letter");

class Word {
  constructor (str){
    this.letters = str.split("").map((elem) => new Letter(elem))
  }
  guessLetter(char){
    for(let i =0; i < this.letters.length; i++){
        if(this.letters[i].guess(char)){
            return true
        }
    }
    return false
  }
  guessedCorrectly(){
    /*
    this.letters.forEach((char) =>{
        console.log(char.visible, char.char)
        if(!char.visible){
            console.log("reached")
            return false
        }
    })
    */
    for(let i =0; i < this.letters.length; i++){
        if(!this.letters[i].visible){
            return false
        }
    }
    return true
  }
}

module.exports = Word;