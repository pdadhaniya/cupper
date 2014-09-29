'use strict';

app.controller('PlayCtrl', function ($scope, $firebase, $location, $routeParams, Deck, User, FIREBASE_URL) {

	$scope.deck = [
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
			rule: "2 is You! Take 2 sips.",
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
			rule: "2 is You! Take 2 sips.",
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
			rule: "2 is You! Take 2 sips.",
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
			rule: "2 is You! Take 2 sips.",
			pic: "images/clubs-two.png",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ Ace",
			rule: "Waterfall! Ask the 2 players next to you a simple question to determine order.",
			pic: "images/clubs-ace.png",
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

  	$('.topheight h3').show("fast");
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


 $('.rule-button').click(function() {
    $('.rule .lead').toggleClass('show');
  });

});