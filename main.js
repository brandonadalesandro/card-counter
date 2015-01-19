var curDeck = null;
var curCount = 0;
var curCard = null;

function cardArrives(card) {
	if (card.value >= 2 && card.value <= 6)  {
		curCount += 1;
	} else if (card.value >= 10) {
		curCount -= 1;
	}
}

document.getElementById("startGame").onclick = function() {
	curDeck = new Deck();
	curDeck.shuffle();
	curCard = curDeck.next();
	document.getElementById("card").src = "cards/" + curCard.toString() + ".png";
	cardArrives(curCard);
};

document.getElementById("nextCard").onclick = function() {
	curCard = curDeck.next();
	document.getElementById("card").src = "cards/" + curCard.toString() + ".png";
	cardArrives(curCard);
};

document.getElementById("showCount").onclick = function() {
	alert("count is: " + curCount);
};
