'use strict';

let username = prompt('What is your name?');

alert(`Welcome to my site ${username}! We're going to play a guessing game, okay?`);

let homeState = prompt('Am I from Massachusetts?\n Yes (y) or No (n)').toLowerCase();

if (homeState === 'y' || homeState === 'yes') {
  alert('You got it! I\'m from Westfield, MA.');
} else if (homeState === 'n' || homeState === 'no') {
  alert('Yes I am! You should\'ve known that!');
} else {
  alert('I was looking for a yes or no answer but it\'s cool. On to the next question!');
}

let myCollege = prompt('Did I attend Harvard University?\n Yes (y) or No (n)').toLowerCase();

if (myCollege === 'y' || myCollege === 'yes') {
  alert('LOL I wish! I went to the University of Massachusetts - Dartmouth.');
} else if (myCollege === 'n' || myCollege === 'no') {
  alert('How\'d you know?! I think I look pretty smart.');
} else {
  alert('I was looking for a yes or no answer but it\'s cool. On to the next question!');
}

let myPet = prompt('Do I have a pet parrot?\n Yes (y) or No (n)').toLowerCase();

if (myPet === 'y' || myPet === 'yes') {
  alert('Incorrect! They\'re way too loud!');
} else if (myPet === 'n' || myPet === 'no') {
  alert('Correct! I have a dog named Reya. She\'s the best!');
} else {
  alert('I was looking for a yes or no answer but it\'s cool. On to the next question!');
}

let myJob = prompt('Am I coming directly from the aerospace industry?\n Yes (y) or No (n)').toLowerCase();

if (myJob === 'y' || myJob === 'yes') {
  alert('Wrong! I switched to real estate before pursuing software development.');
} else if (myJob === 'n' || myJob === 'no') {
  alert('You know me so well! I\'m coming from the real estate industry.');
} else {
  alert('I was looking for a yes or no answer but it\'s cool. On to the next question!');
}

let pastCoding = prompt('Did I know any coding before I started Code 201?\n Yes (y) or No (n)').toLowerCase();

if (pastCoding === 'y' || pastCoding === 'yes') {
  alert('Correct! I self taught for 6 months and then took Code 102.');
} else if (pastCoding === 'n' || pastCoding === 'no') {
  alert('You expect too much from me. I did some self-teaching and took Code 102!');
} else {
  alert('I was looking for a yes or no answer but it\'s cool. On to the next question!');
}
