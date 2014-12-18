// 'use strict';

// app.factory('User',
//   function ($firebase, FIREBASE_URL) {
//     var ref = new Firebase(FIREBASE_URL + 'users');
//     var users = $firebase(ref).$asArray();
//     return {
//       all: users,
//       create: function (user) {
//         return users.$add(user);
//       },
//       find: function (gameId, callback) {
//         users.$loaded().then(function() {
//           var matched = users.filter(function(user) {
//             return user.gameId === gameId;
//           })
//           if (callback) {
//             callback(matched);
//           }
//           return matched;
//         })
//       },
//       delete: function (user, gameId) {
//       }
//     };
// });
