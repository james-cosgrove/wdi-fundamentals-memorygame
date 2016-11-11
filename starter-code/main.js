
//var cards ['queen', 'queen', 'king', 'king']


var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";
/*
if (cardTwo === cardFour) {
	result = window.alert("You found a match!");
}  else {
	result = window.alert("Sorry, try again.")
}*/

var board = document.getElementById('game-board');

function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    board.appendChild(cardElement);
  }
}