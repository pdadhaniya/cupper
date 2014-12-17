// 'use strict';

// app.factory('Deck', ['$firebase', 'FIREBASE_URL',
//   function($firebase, FIREBASE_URL) {
//     var ref = new Firebase(FIREBASE_URL + 'games');

//     var decks = $firebase(ref).$asArray();

//     var Deck = {
//       all: decks,
//       create: function (deck) {
//         return decks.$add(deck);
//       },
//     };

//     return Deck;
// }]);