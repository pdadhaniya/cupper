'use strict';

app.controller('PlayCtrl', function ($scope, $firebase, $location, $routeParams, Deck, User, FIREBASE_URL) {

	$scope.deck = [
		{
			suit: "Hearts",
			value: "King"
		},
		{
			suit: 'Hearts',
			value: "Queen",
		},
		{
			suit: 'Hearts',
			value: "Jack",
		},
		{
			suit: 'Hearts',
			value: "10",
		},
		{
			suit: 'Hearts',
			value: "9",
		},
		{
			suit: 'Hearts',
			value: "8",
		},
		{
			suit: 'Hearts',
			value: "7",
		},
		{
			suit: 'Hearts',
			value: "6",
		},
		{
			suit: 'Hearts',
			value: "5",
		},
		{
			suit: 'Hearts',
			value: "4",
		},
		{
			suit: 'Hearts',
			value: "3",
		},
		{
			suit: 'Hearts',
			value: "2",
		},
		{
			suit: 'Hearts',
			value: "Ace",
		},
		{
			suit: "Diamonds",
			value: "King"
		},
		{
			suit: 'Diamonds',
			value: "Queen",
		},
		{
			suit: 'Diamonds',
			value: "Jack",
		},
		{
			suit: 'Diamonds',
			value: "10",
		},
		{
			suit: 'Diamonds',
			value: "9",
		},
		{
			suit: 'Diamonds',
			value: "8",
		},
		{
			suit: 'Diamonds',
			value: "7",
		},
		{
			suit: 'Diamonds',
			value: "6",
		},
		{
			suit: 'Diamonds',
			value: "5",
		},
		{
			suit: 'Diamonds',
			value: "4",
		},
		{
			suit: 'Diamonds',
			value: "3",
		},
		{
			suit: 'Diamonds',
			value: "2",
		},
		{
			suit: 'Diamonds',
			value: "Ace",
		},
		{
			suit: "Spades",
			value: "King"
		},
		{
			suit: 'Spades',
			value: "Queen",
		},
		{
			suit: 'Spades',
			value: "Jack",
		},
		{
			suit: 'Spades',
			value: "10",
		},
		{
			suit: 'Spades',
			value: "9",
		},
		{
			suit: 'Spades',
			value: "8",
		},
		{
			suit: 'Spades',
			value: "7",
		},
		{
			suit: 'Spades',
			value: "6",
		},
		{
			suit: 'Spades',
			value: "5",
		},
		{
			suit: 'Spades',
			value: "4",
		},
		{
			suit: 'Spades',
			value: "3",
		},
		{
			suit: 'Spades',
			value: "2",
		},
		{
			suit: 'Spades',
			value: "Ace",
		},
		{
			suit: "Clubs",
			value: "King"
		},
		{
			suit: 'Clubs',
			value: "Queen",
		},
		{
			suit: 'Clubs',
			value: "Jack",
		},
		{
			suit: 'Clubs',
			value: "10",
		},
		{
			suit: 'Clubs',
			value: "9",
		},
		{
			suit: 'Clubs',
			value: "8",
		},
		{
			suit: 'Clubs',
			value: "7",
		},
		{
			suit: 'Clubs',
			value: "6",
		},
		{
			suit: 'Clubs',
			value: "5",
		},
		{
			suit: 'Clubs',
			value: "4",
		},
		{
			suit: 'Clubs',
			value: "3",
		},
		{
			suit: 'Clubs',
			value: "2",
		},
		{
			suit: 'Clubs',
			value: "Ace",
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