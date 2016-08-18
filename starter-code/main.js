console.log("JS file is connected to HTML! Woo!")

var cardOne   = "queen";
var cardTwo   = "queen";
var cardThree = "king";
var cardFour  = "king";

var gameBoard = document.getElementById('game-board') ;

var createBoard = function (x) {
	
	var numberOfCards = 4 ;

	for (var i = 0; i < numberOfCards ; i++) {
	  	
		var newCard = document.createElement('div');
		gameBoard.appendChild(newCard);
		newCard.className = 'card';
	}
}

// more code to come


// When a user clicks card

// Check if the cards match

// if the user choose (ONE and TWO) or (THREE and FOUR) then say WIN

// else the user failed

if ((cardOne == cardTwo) || (cardThree == cardFour)) {
  //document.write('Win');
}

else {
  //document.write("Those Cards Don't Match");
}