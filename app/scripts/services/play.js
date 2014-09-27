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
		};

		return Deck;
});

app.factory('User',
	function ($firebase, FIREBASE_URL) {
		var ref = new Firebase(FIREBASE_URL + 'users');

		var users = $firebase(ref).$asArray();

		var User = {
			all: users,
			create: function (user) {
				return users.$add(user);
			},
			find: function (gameId, callback) {
				users.$loaded().then(function() {
					var matched = users.filter(function(user) {
						return user.gameId === gameId;
					})

					if (callback) {
						callback(matched);
					}

					return matched;
				})
			},
			delete: function (user, gameId) {

			}
		};

		return User;

});
