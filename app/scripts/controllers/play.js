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