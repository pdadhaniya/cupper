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
			find: function (deckId, callback) {
				if (callback) {
					console.log('hey');
				}
				return $firebase(ref.child(deckId)).$asArray();
			},
			delete: function (card) {
				console.log("delete service");
				return decks.$remove(card);
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
