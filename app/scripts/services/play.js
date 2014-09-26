'use strict';

app.factory('Deck', 
	function ($firebase, FIREBASE_URL) {
		var ref = new Firebase(FIREBASE_URL + 'games');

		var decks = $firebase(ref).$asArray();

		var Deck = {
			all: decks,
			create: function (deck) {
				return decks.$add(deck);
			},
			find: function (deckId, gameId) {
				if (gameId) {
					console.log(gameId);
				}
				return $firebase(ref.child(deckId)).$asArray();
			},
			delete: function (card, gameId) {

				if(gameId) {
					var itemRef = new Firebase(FIREBASE_URL + 'games/' + gameId + '/' + card.$id)
					itemRef.remove();
				}			
			}
		};

		return Deck;


});
