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
				if (gameId) {
					for (var i = 0; i < decks.length; i++) {
						if ((decks[i].$id) && (decks[i].$id === gameId)) {
							for (var y = 0; y < decks[i].length; y++) {
								if ((decks[i][y].suit) && (decks[i][y].suit === card.suit && decks[i][y].value === card.value)) {
									console.log(decks[i][y]);
									var itemRef = new Firebase(FIREBASE_URL + 'games' + '/' + gameId + '/' + y);
									itemRef.remove();
								}
							}
						}
					}
				}
				// return decks.child(gameId).$remove(card);
			}
		};

		return Deck;

		// var Post = {
		// 	all: posts,
		// 	create: function (post) {
		// 		return posts.$add(post);
		// 	},
		// 	find: function (postId) {
		// 		return $firebase(ref.child(postId)).$asObject();
		// 	},
		// 	delete: function (post) {
		// 		return posts.$remove(post);
		// 	}
		// };

		// return Post;

});
