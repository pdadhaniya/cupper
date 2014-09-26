'use strict';

app.controller('PlayCtrl', function ($scope, $location, $routeParams, Deck) {

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
		}
	];

	$scope.users = [
		{
			username: "Parag"
		},
		{
			username: "Jon"
		}
	];

	$scope.card = {value: '', suit: ''};

	$scope.allDecks = Deck.all;

	if ($routeParams.gameId) {
		$scope.game = Deck.find($routeParams.gameId, $routeParams.gameId);
	}

	var pIndex = 0;

	$scope.startGame = function() {
		Deck.create($scope.deck).then(function (ref) {
			console.log("added to db");
			$location.path('/play/' + ref.name());
		})
	}

	$scope.deleteCard = function(card) {
		Deck.delete(card, $routeParams.gameId);
	}

	$scope.nextCard = function(card) {

		if ($scope.game.length > 0) {
			var cIndex = Math.floor(Math.random()*$scope.game.length);

			$scope.currentCard = $scope.game[cIndex];
			
			Deck.delete(card, $routeParams.gameId);

			if (pIndex >= $scope.users.length-1 ) {
				pIndex = 0;
			} else {
				pIndex ++; 
			}

			$scope.currentPlayer = $scope.users[pIndex];
		}
		
	};


	// $scope.deleteDeck = function(card) {
	// 	Deck.delete(card);
	// }


	// $scope.addCard = function () {
	//   // Deck.create($scope.deck).then(function () {
	//   // 	console.log("added");
	//   // });
	// 	$scope.deck.push($scope.card);
	// 	$scope.card = {value: '', suit: ''};
	// };

	// $scope.deletePost = function (post) {
	// 	Post.delete(post);
	// }
});