'use strict';
/* global app:true */

/**
 * @ngdoc overview
 * @name cupperApp
 * @description
 * # cupperApp
 *
 * Main module of the application.
 */


var app = angular.module("cupperApp", ["firebase", "ngCookies", "ngResource", "ngRoute", "ngSanitize"]);


  app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'PlayCtrl'
      })
      .when('/play/:gameId', {
        templateUrl: 'views/play.html',
        controller: 'PlayCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

  app.constant('FIREBASE_URL', 'https://amber-torch-2724.firebaseio.com/');


// 'use strict';

app.controller('PlayCtrl', ['$scope', '$firebase', '$location', '$routeParams', 'Deck', 'User', 'FIREBASE_URL',
	function($scope, $firebase, $location, $routeParams, Deck, User, FIREBASE_URL) {

	$scope.deck = Deck.standardDeck

	var shuffle  = function(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
	};

	// set up three way binding
	var gameRef = new Firebase(FIREBASE_URL + 'games/' + $routeParams.gameId);
  var gameSync = $firebase(gameRef);
  $scope.myDeck = gameSync.$asArray();

  var userRef = new Firebase(FIREBASE_URL + 'users/' + $routeParams.gameId);
  var userSync = $firebase(userRef);
  $scope.myUsers = userSync.$asArray();
  $scope.user = {username: ''};
  var userIndex = 0;
	$scope.gameReady = true;
	$scope.firstTurn = false;
	$scope.gameStarted = false;
	$scope.gameOver = true;
	$scope.cardRule = true;

  $scope.nextCard = function() {
  	$scope.cardRule = true;
  	if ($scope.myDeck.length === 1) {
  		$scope.myDeck.$remove(0);
  		$scope.gameOver = false;
  	} else if ($scope.myDeck.length === 52 && userIndex === 0) {
  		$scope.firstTurn = false;
  		$scope.gameStarted = true;
  		$scope.currentUser = $scope.myUsers[userIndex];
  		userIndex ++;
  	} else {
	  	$scope.firstTurn = false;
	  	$scope.gameStarted = true;
	  	$scope.myDeck.$remove(0);
	  	if (userIndex > $scope.myUsers.length -1) {
	  		userIndex = 0;
	  	}
	  	$scope.currentUser = $scope.myUsers[userIndex];
	  	userIndex ++;
  	}
  }

	$scope.startGame = function() {
		Deck.create(shuffle($scope.deck)).then(function (ref) {
			$location.path('/play/' + ref.name());
		});
	}

	$scope.addUser = function() {
		$scope.myUsers.$add($scope.user);
		$scope.user = {username: ''};
	};

	$scope.removeUser = function(name) {
		$scope.myUsers.$remove(name);
	}

	$scope.showRule = function() {
		if ($scope.cardRule) {
			$scope.cardRule = false;
		} else {
			$scope.cardRule = true;
		}
	}

	$scope.beginRound = function() {
		$scope.gameReady = false;
		$scope.firstTurn = true;
		$scope.currentUser = $scope.myUsers[0]
	}

}]);
'use strict';

app.factory('Deck', 
  ["$firebase", "FIREBASE_URL", function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'games');
    var decks = $firebase(ref).$asArray();
    return {
      all: decks,
      create: function (deck) {
        return decks.$add(deck);
      },
      standardDeck: [
        {
          suit: "Hearts ♥",
          value: "♥ King",
          rule: "Make a Rule! Everyone must abide by the rule throughout the game!",
          pic: 'images/hearts-king.png'
        },
        {
          suit: 'Hearts ♥',
          value: "♥ Queen",
          rule: "QuestionMaster! If anyone answers a question you ask, they must drink!",
          pic: 'images/hearts-queen.png'
        },
        {
          suit: 'Hearts ♥',
          value: "♥ Jack",
          rule: "ThumbMaster! When you put your thumb down, every player must also. Last one drinks!",
          pic: 'images/hearts-jack.png'
        },
        {
          suit: 'Hearts ♥',
          value: "♥ 10",
          rule: "10 is Category! Every player must name something that falls in the chosen category!",
          pic: 'images/hearts-ten.png'
        },
        {
          suit: 'Hearts ♥',
          value: "♥ 9",
          rule: "9 is Rhyme! Pick a word everyone must rhyme with!",
          pic: 'images/hearts-nine.png'
        },
        {
          suit: 'Hearts ♥',
          value: "♥ 8",
          rule: "8 is Mate! When you drink, your mate must drink!",
          pic: 'images/hearts-eight.png'
        },
        {
          suit: 'Hearts ♥',
          value: "♥ 7",
          rule: "7 is Heaven! Last one to throw their hands up drinks!",
          pic: 'images/hearts-seven.png'
        },
        {
          suit: 'Hearts ♥',
          value: "♥ 6",
          rule: "6 is chicks! All females drink",
          pic: 'images/hearts-six.png'
        },
        {
          suit: 'Hearts ♥',
          value: "♥ 5",
          rule: "5 is guys! All males drink",
          pic: 'images/hearts-five.png'
        },
        {
          suit: 'Hearts ♥',
          value: "♥ 4",
          rule: "4 is Floor! Last to touch the floor drinks!",
          pic: 'images/hearts-four.png'
        },
        {
          suit: 'Hearts ♥',
          value: "♥ 3",
          rule: "3 is Me! Take 3 sips.",
          pic: 'images/hearts-three.png'
        },
        {
          suit: 'Hearts ♥',
          value: "♥ 2",
          rule: "2 is You! Give 2 sips.",
          pic: 'images/hearts-two.png'
        },
        {
          suit: 'Hearts ♥',
          value: "♥ Ace",
          rule: "Waterfall! Ask the 2 players next to you a simple question to determine order.",
          pic: 'images/hearts-ace.png'
        },
        {
          suit: "Diamonds ♦",
          value: "♦ King",
          rule: "Make a Rule! Everyone must abide by the rule throughout the game!",
          pic: 'images/diamonds-king.png'
        },
        {
          suit: 'Diamonds ♦',
          value: "♦ Queen",
          rule: "QuestionMaster! If anyone answers a question you ask, they must drink!",
          pic: 'images/diamonds-queen.png'
        },
        {
          suit: 'Diamonds ♦',
          value: "♦ Jack",
          rule: "ThumbMaster! When you put your thumb down, every player must also. Last one drinks!",
          pic: 'images/diamonds-jack.png'
        },
        {
          suit: 'Diamonds ♦',
          value: "♦ 10",
          rule: "10 is Category! Every player must name something that falls in the chosen category!",
          pic: 'images/diamonds-ten.png'
        },
        {
          suit: 'Diamonds ♦',
          value: "♦ 9",
          rule: "9 is Rhyme! Pick a word everyone must rhyme with!",
          pic: 'images/diamonds-nine.png'
        },
        {
          suit: 'Diamonds ♦',
          value: "♦ 8",
          rule: "8 is Mate! When you drink, your mate must drink!",
          pic: 'images/diamonds-eight.png'
        },
        {
          suit: 'Diamonds ♦',
          value: "♦ 7",
          rule: "7 is Heaven! Last one to throw their hands up drinks!",
          pic: 'images/diamonds-seven.png'
        },
        {
          suit: 'Diamonds ♦',
          value: "♦ 6",
          rule: "6 is chicks! All females drink",
          pic: 'images/diamonds-six.png'
        },
        {
          suit: 'Diamonds ♦',
          value: "♦ 5",
          rule: "5 is guys! All males drink",
          pic: 'images/diamonds-five.png'
        },
        {
          suit: 'Diamonds ♦',
          value: "♦ 4",
          rule: "4 is Floor! Last to touch the floor drinks!",
          pic: 'images/diamonds-four.png'
        },
        {
          suit: 'Diamonds ♦',
          value: "♦ 3",
          rule: "3 is Me! Take 3 sips.",
          pic: 'images/diamonds-three.png'
        },
        {
          suit: 'Diamonds ♦',
          value: "♦ 2",
          rule: "2 is You! Give 2 sips.",
          pic: 'images/diamonds-two.png'
        },
        {
          suit: 'Diamonds ♦',
          value: "♦ Ace",
          rule: "Waterfall! Ask the 2 players next to you a simple question to determine order.",
          pic: 'images/diamonds-ace.png'
        },
        {
          suit: "Spades ♠",
          value: "♠ King",
          rule: "Make a Rule! Everyone must abide by the rule throughout the game!",
          pic: "images/spades-king.png",
        },
        {
          suit: 'Spades ♠',
          value: "♠ Queen",
          rule: "QuestionMaster! If anyone answers a question you ask, they must drink!",
          pic: "images/spades-queen.png",
        },
        {
          suit: 'Spades ♠',
          value: "♠ Jack",
          rule: "ThumbMaster! When you put your thumb down, every player must also. Last one drinks!",
          pic: "images/spades-jack.png",
        },
        {
          suit: 'Spades ♠',
          value: "♠ 10",
          rule: "10 is Category! Every player must name something that falls in the chosen category!",
          pic: "images/spades-ten.png",
        },
        {
          suit: 'Spades ♠',
          value: "♠ 9",
          rule: "9 is Rhyme! Pick a word everyone must rhyme with!",
          pic: "images/spades-nine.png",
        },
        {
          suit: 'Spades ♠',
          value: "♠ 8",
          rule: "8 is Mate! When you drink, your mate must drink!",
          pic: "images/spades-eight.png",
        },
        {
          suit: 'Spades ♠',
          value: "♠ 7",
          rule: "7 is Heaven! Last one to throw their hands up drinks!",
          pic: "images/spades-seven.png",
        },
        {
          suit: 'Spades ♠',
          value: "♠ 6",
          rule: "6 is chicks! All females drink",
          pic: "images/spades-six.png",
        },
        {
          suit: 'Spades ♠',
          value: "♠ 5",
          rule: "5 is guys! All males drink",
          pic: "images/spades-five.png",
        },
        {
          suit: 'Spades ♠',
          value: "♠ 4",
          rule: "4 is Floor! Last to touch the floor drinks!",
          pic: "images/spades-four.png",
        },
        {
          suit: 'Spades ♠',
          value: "♠ 3",
          rule: "3 is Me! Take 3 sips.",
          pic: "images/spades-three.png",
        },
        {
          suit: 'Spades ♠',
          value: "♠ 2",
          rule: "2 is You! Give 2 sips.",
          pic: "images/spades-two.png",
        },
        {
          suit: 'Spades ♠',
          value: "♠ Ace",
          rule: "Waterfall! Ask the 2 players next to you a simple question to determine order.",
          pic: "images/spades-ace.png",
        },
        {
          suit: "Clubs ♣",
          value: "King",
          rule: "Make a Rule! Everyone must abide by the rule throughout the game!",
          pic: "images/clubs-king.png",
        },
        {
          suit: 'Clubs ♣',
          value: "♣ Queen",
          rule: "QuestionMaster! If anyone answers a question you ask, they must drink!",
          pic: "images/clubs-queen.png",
        },
        {
          suit: 'Clubs ♣',
          value: "♣ Jack",
          rule: "ThumbMaster! When you put your thumb down, every player must also. Last one drinks!",
          pic: "images/clubs-jack.png",
        },
        {
          suit: 'Clubs ♣',
          value: "♣ 10",
          rule: "10 is Category! Every player must name something that falls in the chosen category!",
          pic: "images/clubs-ten.png",
        },
        {
          suit: 'Clubs ♣',
          value: "♣ 9",
          rule: "9 is Rhyme! Pick a word everyone must rhyme with!",
          pic: "images/clubs-nine.png",
        },
        {
          suit: 'Clubs ♣',
          value: "♣ 8",
          rule: "8 is Mate! When you drink, your mate must drink!",
          pic: "images/clubs-eight.png",
        },
        {
          suit: 'Clubs ♣',
          value: "♣ 7",
          rule: "7 is Heaven! Last one to throw their hands up drinks!",
          pic: "images/clubs-seven.png",
        },
        {
          suit: 'Clubs ♣',
          value: "♣ 6",
          rule: "6 is chicks! All females drink",
          pic: "images/clubs-six.png",
        },
        {
          suit: 'Clubs ♣',
          value: "♣ 5",
          rule: "5 is guys! All males drink",
          pic: "images/clubs-five.png",
        },
        {
          suit: 'Clubs ♣',
          value: "♣ 4",
          rule: "4 is Floor! Last to touch the floor drinks!",
          pic: "images/clubs-four.png",
        },
        {
          suit: 'Clubs ♣',
          value: "♣ 3",
          rule: "3 is Me! Take 3 sips.",
          pic: "images/clubs-three.png",
        },
        {
          suit: 'Clubs ♣',
          value: "♣ 2",
          rule: "2 is You! Give 2 sips.",
          pic: "images/clubs-two.png",
        },
        {
          suit: 'Clubs ♣',
          value: "♣ Ace",
          rule: "Waterfall! Ask the 2 players next to you a simple question to determine order.",
          pic: "images/clubs-ace.png",
        },
      ]
    };
}]);

app.factory('User',
	["$firebase", "FIREBASE_URL", function ($firebase, FIREBASE_URL) {
		var ref = new Firebase(FIREBASE_URL + 'users');
		var users = $firebase(ref).$asArray();
		return {
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
}]);