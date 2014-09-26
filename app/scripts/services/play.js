'use strict';

app.factory('Deck', 
	function ($firebase, FIREBASE_URL) {
		var ref = new Firebase(FIREBASE_URL + 'decks');

		var decks = $firebase(ref).$asObject();

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
