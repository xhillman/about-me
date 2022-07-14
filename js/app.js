'use strict';

let username = prompt('What is your name?');
let userScore = 0;
alert(`Welcome to my site ${username}! We're going to play a guessing game, okay?`);

let homeState = prompt('Am I from Massachusetts?\n Yes (y) or No (n)').toLowerCase();
if (homeState === 'y' || homeState === 'yes') {
  userScore++;
  alert('You got it! I\'m from Westfield, MA.');
} else if (homeState === 'n' || homeState === 'no') {
  alert('Yes I am! You should\'ve known that!');
} else {
  alert('I was looking for a yes or no answer but it\'s cool. On to the next question!');
}
console.log(`User Score: ${userScore}`);

let myCollege = prompt('Did I attend Harvard University?\n Yes (y) or No (n)').toLowerCase();
if (myCollege === 'y' || myCollege === 'yes') {
  alert('LOL I wish! I went to the University of Massachusetts - Dartmouth.');
} else if (myCollege === 'n' || myCollege === 'no') {
  userScore++;
  alert('How\'d you know?! I think I look pretty smart.');
} else {
  alert('I was looking for a yes or no answer but it\'s cool. On to the next question!');
}
console.log(`User Score: ${userScore}`);

let myPet = prompt('Do I have a pet parrot?\n Yes (y) or No (n)').toLowerCase();
if (myPet === 'y' || myPet === 'yes') {
  alert('Incorrect! They\'re way too loud!');
} else if (myPet === 'n' || myPet === 'no') {
  userScore++;
  alert('Correct! I have a dog named Reya. She\'s the best!');
} else {
  alert('I was looking for a yes or no answer but it\'s cool. On to the next question!');
}
console.log(`User Score: ${userScore}`);

let myJob = prompt('Am I coming directly from the aerospace industry?\n Yes (y) or No (n)').toLowerCase();
if (myJob === 'y' || myJob === 'yes') {
  alert('Wrong! I switched to real estate before pursuing software development.');
} else if (myJob === 'n' || myJob === 'no') {
  userScore++;
  alert('You know me so well! I\'m coming from the real estate industry.');
} else {
  alert('I was looking for a yes or no answer but it\'s cool. On to the next question!');
}
console.log(`User Score: ${userScore}`);

let pastCoding = prompt('Did I know any coding before I started Code 201?\n Yes (y) or No (n)').toLowerCase();
if (pastCoding === 'y' || pastCoding === 'yes') {
  userScore++;
  alert('Correct! I self taught for a few months and then took Code 102.');
} else if (pastCoding === 'n' || pastCoding === 'no') {
  alert('You expect too much from me. I did some self-teaching and took Code 102!');
} else {
  alert('I was looking for a yes or no answer but it\'s cool. On to the next question!');
}
console.log(`User Score: ${userScore}`);

let myNum = Math.floor(Math.random() * 25);
console.log(`Random Number: ${myNum}`);
let numGuesses = 1;
let userNum = prompt('Guess a number between 1 and 25! \nI\'ll give you 4 tries.');
if (userNum === myNum) {
  userScore++;
  alert(`You got it! My number was ${userNum}!`);
} else {
  while (userNum !== myNum && numGuesses < 4) {
    if (userNum > myNum) {
      numGuesses++;
      userNum = prompt(`Too high!\nYou have ${4 - numGuesses} left!`);
    } else if (userNum < myNum) {
      userNum = prompt(`Too Low!\nYou have ${4 - numGuesses} left!`);
      numGuesses++;
    } else {
      userNum = myNum;
      userScore++;
      alert(`You got it! My number was ${userNum}!`);
      break;
    }
  }
}
if (userNum !== myNum) {
  alert(`The number was ${myNum}!`);
}
console.log(`User Score: ${userScore}`);

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
console.log(`User Score: ${userScore}`);

alert(`Thanks for playing ${username}! You got ${userScore} out of 7 questions correct!\nMaybe next time you can ask me some questions!`);
