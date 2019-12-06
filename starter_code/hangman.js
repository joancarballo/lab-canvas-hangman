let hangman;

class Hangman {
  constructor() {
    this.words = ["ontinyent", "valencia", "madrid", "alcala"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[
      Math.floor(Math.random() * this.words.length)
    ].toUpperCase();
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      // Son los códigos de las letras A-Z en ASCII : https://bit.ly/2Ywxha4
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(key) {
    if (this.letters.includes(key)) {
      console.log("Esa letra ya la habías probado: " + key);
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(i) {
    console.log("Esa letra está: " + i);
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this.checkWinner();
  }

  addWrongLetter(letter) {
    console.log("Esta letra no está: " + letter);
    this.letters.push(letter);
    this.errorsLeft = this.errorsLeft - 1;
    this.checkGameOver();
  }

  checkGameOver() {
    if (this.errorsLeft == 0) {
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
    let attemptsCount = 0;
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.guessedLetter.includes(this.secretWord[i])) {
        attemptsCount++;
      }
    }

    if (attemptsCount === this.secretWord.length) {
      return true;
    }

    return false;
  }
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = e => {};
