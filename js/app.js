'use strict';

let username = prompt('What is your name?');
let userScore = 0;
alert(`Welcome to my site ${username}! We're going to play a guessing game, okay?`);

function questionOne() {
  let homeState = prompt('Am I from Massachusetts?\n Yes (y) or No (n)').toLowerCase();
  if (homeState === 'y' || homeState === 'yes') {
    userScore++;
    alert('You got it! I\'m from Westfield, MA.');
  } else if (homeState === 'n' || homeState === 'no') {
    alert('Yes I am! You should\'ve known that!');
  } else {
    alert('I was looking for a yes or no answer but it\'s cool. On to the next question!');
  }
}
questionOne();

function questionTwo() {
  let myCollege = prompt('Did I attend Harvard University?\n Yes (y) or No (n)').toLowerCase();
  if (myCollege === 'y' || myCollege === 'yes') {
    alert('LOL I wish! I went to the University of Massachusetts - Dartmouth.');
  } else if (myCollege === 'n' || myCollege === 'no') {
    userScore++;
    alert('How\'d you know?! I think I look pretty smart.');
  } else {
    alert('I was looking for a yes or no answer but it\'s cool. On to the next question!');
  }
}
questionTwo();

function questionThree() {
  let myPet = prompt('Do I have a pet parrot?\n Yes (y) or No (n)').toLowerCase();
  if (myPet === 'y' || myPet === 'yes') {
    alert('Incorrect! They\'re way too loud!');
  } else if (myPet === 'n' || myPet === 'no') {
    userScore++;
    alert('Correct! I have a dog named Reya. She\'s the best!');
  } else {
    alert('I was looking for a yes or no answer but it\'s cool. On to the next question!');
  }
}
questionThree();

function questionFour() {
  let myJob = prompt('Am I coming directly from the aerospace industry?\n Yes (y) or No (n)').toLowerCase();
  if (myJob === 'y' || myJob === 'yes') {
    alert('Wrong! I switched to real estate before pursuing software development.');
  } else if (myJob === 'n' || myJob === 'no') {
    userScore++;
    alert('You know me so well! I\'m coming from the real estate industry.');
  } else {
    alert('I was looking for a yes or no answer but it\'s cool. On to the next question!');
  }
}
questionFour();

function questionFive() {
  let pastCoding = prompt('Did I know any coding before I started Code 201?\n Yes (y) or No (n)').toLowerCase();
  if (pastCoding === 'y' || pastCoding === 'yes') {
    userScore++;
    alert('Correct! I self taught for a few months and then took Code 102.');
  } else if (pastCoding === 'n' || pastCoding === 'no') {
    alert('You expect too much from me. I did some self-teaching and took Code 102!');
  } else {
    alert('I was looking for a yes or no answer but it\'s cool. On to the next question!');
  }
}
questionFive();

function questionSix() {
  let myNum = Math.floor(Math.random() * 25);
  for (let i = 0; i < 4; i++) {
    let userNum = prompt('Guess a number from 1 to 25!');
    if (+userNum === myNum) {
      alert(`You got it! My number was ${myNum}!`);
      userScore++;
      break;
    } else if (+userNum > myNum) {
      alert('Too high!');
    } else if (+userNum < myNum) {
      alert('Too low!');
    }
    if (i === 3) {
      alert(`Awe man, I was thinking of the number ${myNum}!`);
    }
  }
}
questionSix();

function questionSeven() {
  let favColors = ['black', 'green', 'blue'];
  let numColorGuesses = 1;
  let userColorGuess = prompt('I have three favorite colors, can you guess at least one? You get 6 tries on this one.').toLowerCase();
  while (numColorGuesses < 6) {
    if (userColorGuess === favColors[0] || userColorGuess === favColors[1] || userColorGuess === favColors[2]) {
      userScore++;
      alert(`You got it! My favorite colors are ${favColors[0]}, ${favColors[1]} and ${favColors[2]}!`);
      break;
    } else {
      userColorGuess = prompt(`That wasn't one of them! You have ${6 - numColorGuesses} left!`).toLowerCase();
      numColorGuesses++;
    }
  }
  if (userColorGuess !== favColors[0] && userColorGuess !== favColors[1] && userColorGuess !== favColors[2]) {
    alert(`You tried your best! My three favorite colors are ${favColors[0]}, ${favColors[1]} and ${favColors[2]}!`);
  }
}
questionSeven();

alert(`Thanks for playing ${username}! You got ${userScore} out of 7 questions correct!\nMaybe next time you can ask me some questions!`);
