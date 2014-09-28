'use strict';

app.controller('PlayCtrl', function ($scope, $firebase, $location, $routeParams, Deck, User, FIREBASE_URL) {

	$scope.deck = [
		{
			suit: "Hearts ♥",
			value: "♥ King",
			rule: "Make a Rule! Everyone must abide by the rule throughout the game!",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ Queen",
			rule: "QuestionMaster! If anyone answers a question you ask, they must drink!",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ Jack",
			rule: "ThumbMaster! When you put your thumb down, every player must also. Last one drinks!",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 10",
			rule: "10 is Category! Every player must name something that falls in the chosen category!",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 9",
			rule: "9 is Rhyme! Pick a word everyone must rhyme with!",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 8",
			rule: "8 is Mate! When you drink, your mate must drink!",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 7",
			rule: "7 is Heaven! Last one to throw their hands up drinks!",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 6",
			rule: "6 is chicks! All females drink",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 5",
			rule: "5 is guys! All males drink",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 4",
			rule: "4 is Floor! Last to touch the floor drinks!",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 3",
			rule: "3 is Me! Take 3 sips.",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 2",
			rule: "2 is You! Take 2 sips.",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ Ace",
			rule: "Waterfall! Ask the 2 players next to you a simple question to determine order.",
		},
		{
			suit: "Diamonds ♦",
			value: "♦ King",
			rule: "Make a Rule! Everyone must abide by the rule throughout the game!",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ Queen",
			rule: "QuestionMaster! If anyone answers a question you ask, they must drink!",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ Jack",
			rule: "ThumbMaster! When you put your thumb down, every player must also. Last one drinks!",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 10",
			rule: "10 is Category! Every player must name something that falls in the chosen category!",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 9",
			rule: "9 is Rhyme! Pick a word everyone must rhyme with!",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 8",
			rule: "8 is Mate! When you drink, your mate must drink!",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 7",
			rule: "7 is Heaven! Last one to throw their hands up drinks!",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 6",
			rule: "6 is chicks! All females drink",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 5",
			rule: "5 is guys! All males drink",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 4",
			rule: "4 is Floor! Last to touch the floor drinks!",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 3",
			rule: "3 is Me! Take 3 sips.",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 2",
			rule: "2 is You! Take 2 sips.",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ Ace",
			rule: "Waterfall! Ask the 2 players next to you a simple question to determine order.",
		},
		{
			suit: "Spades ♠",
			value: "♠ King",
			rule: "Make a Rule! Everyone must abide by the rule throughout the game!",
		},
		{
			suit: 'Spades ♠',
			value: "♠ Queen",
			rule: "QuestionMaster! If anyone answers a question you ask, they must drink!",
		},
		{
			suit: 'Spades ♠',
			value: "♠ Jack",
			rule: "ThumbMaster! When you put your thumb down, every player must also. Last one drinks!",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 10",
			rule: "10 is Category! Every player must name something that falls in the chosen category!",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 9",
			rule: "9 is Rhyme! Pick a word everyone must rhyme with!",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 8",
			rule: "8 is Mate! When you drink, your mate must drink!",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 7",
			rule: "7 is Heaven! Last one to throw their hands up drinks!",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 6",
			rule: "6 is chicks! All females drink",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 5",
			rule: "5 is guys! All males drink",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 4",
			rule: "4 is Floor! Last to touch the floor drinks!",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 3",
			rule: "3 is Me! Take 3 sips.",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 2",
			rule: "2 is You! Take 2 sips.",
		},
		{
			suit: 'Spades ♠',
			value: "♠ Ace",
			rule: "Waterfall! Ask the 2 players next to you a simple question to determine order.",
		},
		{
			suit: "Clubs ♣",
			value: "King",
			rule: "Make a Rule! Everyone must abide by the rule throughout the game!",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ Queen",
			rule: "QuestionMaster! If anyone answers a question you ask, they must drink!",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ Jack",
			rule: "ThumbMaster! When you put your thumb down, every player must also. Last one drinks!",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 10",
			rule: "10 is Category! Every player must name something that falls in the chosen category!",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 9",
			rule: "9 is Rhyme! Pick a word everyone must rhyme with!",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 8",
			rule: "8 is Mate! When you drink, your mate must drink!",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 7",
			rule: "7 is Heaven! Last one to throw their hands up drinks!",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 6",
			rule: "6 is chicks! All females drink",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 5",
			rule: "5 is guys! All males drink",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 4",
			rule: "4 is Floor! Last to touch the floor drinks!",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 3",
			rule: "3 is Me! Take 3 sips.",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 2",
			rule: "2 is You! Take 2 sips.",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ Ace",
			rule: "Waterfall! Ask the 2 players next to you a simple question to determine order.",
		},
	];

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
  // set first user on page load
  $scope.myUsers.$loaded().then(function(){
  	console.log('setting first user');
		$scope.currentUser = $scope.myUsers[0];
  });

  $scope.quantity = 0;

  var userIndex = 1;

  $scope.nextCard = function() {
  	console.log('removing card from db');
  	$scope.myDeck.$remove(0);

  	$scope.quantity = 1;

  	if (userIndex > $scope.myUsers.length -1) {
  		userIndex = 0;
  	}

  	$scope.currentUser = $scope.myUsers[userIndex];

  	userIndex ++;
  	
  }

	$scope.startGame = function() {
		Deck.create(shuffle($scope.deck)).then(function (ref) {
			console.log("game added to database");
				$location.path('/play/' + ref.name());
		});
	}

	$scope.addUser = function() {
		$scope.myUsers.$add($scope.user);
		$scope.user = {username: ''};
	};

});