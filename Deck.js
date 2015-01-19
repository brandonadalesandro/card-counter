var Suits = {
	DIAMOND: 0,
	CLUB: 1,
	SPADE: 2,
	HEART: 3
};

function Card(suit, value) {
	this.suit = suit;
	this.value = value;
}


Card.prototype.toString = function() {
	var retStr = "";
	if (this.value <= 10) {
		retStr += this.value;
	} else {
		if (this.value === 11) {
			retStr += "jack";
		} else if (this.value === 12) {
			retStr += "queen";
		} else if (this.value === 13) {
			retStr += "king";
		} else {
			retStr += "ace";
		}
	}

	retStr += "_of_";

	if (this.suit === Suits.DIAMOND) {
		retStr += "diamonds";
	} else if (this.suit === Suits.CLUB) {
		retStr += "clubs";
	} else if (this.suit === Suits.SPADE) {
		retStr += "spades";
	} else if (this.suit === Suits.HEART) {
		retStr += "hearts";
	}

	return retStr;
};


function Deck() {
	this.curIndex = 0;
	this.cards = [];
	for (var i = 0; i < 13; i++) {
		for (var j = 0; j < 4; j++) {
			var suit = 0;
			if (j === 0) {
				suit = Suits.DIAMOND;
			} else if (j === 1) {
				suit = Suits.CLUB;
			} else if (j === 2) {
				suit = Suits.SPADE;
			} else {
				suit = Suits.HEART;
			}
			this.cards.push(new Card(suit, i + 2));
		}
	}
}

Deck.prototype.shuffle = function() {
	var array = this.cards;
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	this.cards = array;
};

Deck.prototype.next = function() {
	if (this.curIndex >= this.cards.length) {
		this.shuffle();
		this.currentIndex = 0;
	}
	return this.cards[this.curIndex++];
};

Deck.prototype.hasNext = function() {
	return this.curIndex < this.cards.length;
};
