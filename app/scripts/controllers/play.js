'use strict';

app.controller('PlayCtrl', function ($scope, $firebase, $location, $routeParams, Deck, User, FIREBASE_URL) {

	$scope.deck = [
		{
			suit: "Hearts ♥",
			value: "♥ King",
			rule: "Make a Rule! Everyone must abide by the rule throughout the game!",
			pic: "https://lh4.googleusercontent.com/-E8gN0Z01VnQ/TXaNQf_SuSI/AAAAAAAAGCk/WGqKgnaudvo/w475-h689-no/king_of_hearts2.jpg",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ Queen",
			rule: "QuestionMaster! If anyone answers a question you ask, they must drink!",
			pic: "https://lh4.googleusercontent.com/-zSDh8RbqWUw/TXaNOaGgU4I/AAAAAAAAGAc/-T_ctxgV6JY/w475-h689-no/queen_of_hearts2.jpg",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ Jack",
			rule: "ThumbMaster! When you put your thumb down, every player must also. Last one drinks!",
			pic: "https://lh4.googleusercontent.com/-7l2LzpqpkoQ/TXaNMJAHHSI/AAAAAAAAF8k/5U0Ad_KqBTM/w475-h689-no/jack_of_hearts2.jpg",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 10",
			rule: "10 is Category! Every player must name something that falls in the chosen category!",
			pic: "https://lh6.googleusercontent.com/-2fJcMxXrdpU/TXC0ADmdQ-I/AAAAAAAAF-g/pqxZP6Ki58M/w475-h689-no/10_of_hearts.jpg",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 9",
			rule: "9 is Rhyme! Pick a word everyone must rhyme with!",
			pic: "https://lh4.googleusercontent.com/-cyM6xjEFug8/TXCz_j7XGaI/AAAAAAAAF-o/Ni-gR60fRxc/w475-h689-no/9_of_hearts.jpg",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 8",
			rule: "8 is Mate! When you drink, your mate must drink!",
			pic: "https://lh4.googleusercontent.com/-CgLYkTtPH8o/TXCz_Z6woTI/AAAAAAAAGFc/wqvEs-xB2Ew/w475-h689-no/8_of_hearts.jpg",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 7",
			rule: "7 is Heaven! Last one to throw their hands up drinks!",
			pic: "https://lh4.googleusercontent.com/-wnDqTQp-7_8/TXCz-4h4eCI/AAAAAAAAGCI/-uNFXsZwGAQ/w475-h689-no/7_of_hearts.jpg",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 6",
			rule: "6 is chicks! All females drink",
			pic: "https://lh5.googleusercontent.com/-cHNV0z_2HR4/TXCz-obkYzI/AAAAAAAAGCQ/7lfL5icSpHg/w475-h689-no/6_of_hearts.jpg",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 5",
			rule: "5 is guys! All males drink",
			pic: "https://lh4.googleusercontent.com/-VFknJRiUSxs/TXCz-Q7UhUI/AAAAAAAAGCE/jbfMls3M6jg/w475-h689-no/5_of_hearts.jpg",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 4",
			rule: "4 is Floor! Last to touch the floor drinks!",
			pic: "https://lh5.googleusercontent.com/-h5gjBgj7gBE/TXCz-AqoumI/AAAAAAAAGFU/0lpqNidFAFA/w475-h689-no/4_of_hearts.jpg",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 3",
			rule: "3 is Me! Take 3 sips.",
			pic: "https://lh4.googleusercontent.com/-hMng1rYWH3U/TXCz94e4hVI/AAAAAAAAF9o/OCJ4cVhXDNY/w475-h689-no/3_of_hearts.jpg",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ 2",
			rule: "2 is You! Take 2 sips.",
			pic: "https://lh6.googleusercontent.com/-kZr43eark4o/TXCz9ZDsqRI/AAAAAAAAF9s/mylF-bclyiY/w475-h689-no/2_of_hearts.jpg",
		},
		{
			suit: 'Hearts ♥',
			value: "♥ Ace",
			rule: "Waterfall! Ask the 2 players next to you a simple question to determine order.",
			pic: "https://lh5.googleusercontent.com/-19oLnSirf4k/TXCz8-IxH8I/AAAAAAAAF-A/gceDFWfsm6g/w475-h689-no/ace_of_hearts.jpg",
		},
		{
			suit: "Diamonds ♦",
			value: "♦ King",
			rule: "Make a Rule! Everyone must abide by the rule throughout the game!",
			pic: "https://lh6.googleusercontent.com/-W6X_3kFWROg/TXaNRQUW4mI/AAAAAAAAF9I/KDXOigSBjbk/w475-h689-no/king_of_diamonds2.jpg",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ Queen",
			rule: "QuestionMaster! If anyone answers a question you ask, they must drink!",
			pic: "https://lh5.googleusercontent.com/-T7QwPOa05hM/TXaNPVIdOgI/AAAAAAAAGAY/kFIT-1pBCaA/w475-h689-no/queen_of_diamonds2.jpg",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ Jack",
			rule: "ThumbMaster! When you put your thumb down, every player must also. Last one drinks!",
			pic: "https://lh3.googleusercontent.com/-B-1F7-IVdSw/TXaNNa5RuiI/AAAAAAAAF_w/doNCBpGWacU/w475-h689-no/jack_of_diamonds2.jpg",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 10",
			rule: "10 is Category! Every player must name something that falls in the chosen category!",
			pic: "https://lh3.googleusercontent.com/-pdoSjGwP6Xs/TXC0IIN2VzI/AAAAAAAAGBU/mpsDd0pthME/w475-h689-no/10_of_diamonds.jpg",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 9",
			rule: "9 is Rhyme! Pick a word everyone must rhyme with!",
			pic: "https://lh3.googleusercontent.com/-w0yapAcWY00/TXC0Hy2v6MI/AAAAAAAAGBQ/6LXFpR8F3i4/w475-h689-no/9_of_diamonds.jpg",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 8",
			rule: "8 is Mate! When you drink, your mate must drink!",
			pic: "https://lh4.googleusercontent.com/-AZFOGwAjMc0/TXC0HmPhusI/AAAAAAAAGDM/eELXjLrBwPc/w475-h689-no/8_of_diamonds.jpg",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 7",
			rule: "7 is Heaven! Last one to throw their hands up drinks!",
			pic: "https://lh4.googleusercontent.com/-Gy-vKYuvo-Q/TXC0HKX1ukI/AAAAAAAAGDE/0czbfLb2F9I/w475-h689-no/7_of_diamonds.jpg",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 6",
			rule: "6 is chicks! All females drink",
			pic: "https://lh3.googleusercontent.com/-VGjMufCoKsA/TXC0GycloYI/AAAAAAAAGDo/0BWX1YckZs4/w475-h689-no/6_of_diamonds.jpg",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 5",
			rule: "5 is guys! All males drink",
			pic: "https://lh6.googleusercontent.com/-_N1sd5hiDjE/TXC0GtqXgbI/AAAAAAAAGDs/QTEn1-SIeNQ/w475-h689-no/5_of_diamonds.jpg",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 4",
			rule: "4 is Floor! Last to touch the floor drinks!",
			pic: "https://lh6.googleusercontent.com/-eydz7tbeJPo/TXC0GSEUd6I/AAAAAAAAGDY/C-cMb32kTBA/w475-h689-no/4_of_diamonds.jpg",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 3",
			rule: "3 is Me! Take 3 sips.",
			pic: "https://lh4.googleusercontent.com/-rMNIvaeryys/TXC0F9w2izI/AAAAAAAAF_E/MCI8RG4Hsjc/w475-h689-no/3_of_diamonds.jpg",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ 2",
			rule: "2 is You! Take 2 sips.",
			pic: "https://lh5.googleusercontent.com/-WeLSpnK33Q4/TXC0FiBkFMI/AAAAAAAAF_A/n1e5Rk55pFs/w475-h689-no/2_of_diamonds.jpg",
		},
		{
			suit: 'Diamonds ♦',
			value: "♦ Ace",
			rule: "Waterfall! Ask the 2 players next to you a simple question to determine order.",
			pic: "https://lh5.googleusercontent.com/-pR3kP4MzVAA/TXC0Fc-P4YI/AAAAAAAAF0g/Ij4wPoOg9d0/w475-h689-no/ace_of_diamonds.jpg",
		},
		{
			suit: "Spades ♠",
			value: "♠ King",
			rule: "Make a Rule! Everyone must abide by the rule throughout the game!",
			pic: "https://lh5.googleusercontent.com/-dZwBwX6RDF8/TXaNPy1xj1I/AAAAAAAAGAE/pyDyndW-uoc/w475-h689-no/king_of_spades2.jpg",
		},
		{
			suit: 'Spades ♠',
			value: "♠ Queen",
			rule: "QuestionMaster! If anyone answers a question you ask, they must drink!",
			pic: "https://lh5.googleusercontent.com/-gye2N40dqMk/TXaNN6IXwgI/AAAAAAAAGAU/YY5Ng037LyU/w475-h689-no/queen_of_spades2.jpg",
		},
		{
			suit: 'Spades ♠',
			value: "♠ Jack",
			rule: "ThumbMaster! When you put your thumb down, every player must also. Last one drinks!",
			pic: "https://lh6.googleusercontent.com/-DTreFSNvfto/TXaNKswnu3I/AAAAAAAAF8Q/SOxJrLzhhuI/w475-h689-no/jack_of_spades2.jpg",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 10",
			rule: "10 is Category! Every player must name something that falls in the chosen category!",
			pic: "https://lh5.googleusercontent.com/-DYwKVEyAFgo/TXCz7FqQG_I/AAAAAAAAF9w/2aUVGQQ5QgM/w475-h689-no/10_of_spades.jpg",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 9",
			rule: "9 is Rhyme! Pick a word everyone must rhyme with!",
			pic: "https://lh4.googleusercontent.com/-jQPh0aLrrQo/TXCz6sTJyuI/AAAAAAAAF-E/epj4vwUAXfU/w475-h689-no/9_of_spades.jpg",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 8",
			rule: "8 is Mate! When you drink, your mate must drink!",
			pic: "https://lh3.googleusercontent.com/-v8r3z9a7wf8/TXCz5299c2I/AAAAAAAAGFE/7-Zyf-2jQUo/w475-h689-no/8_of_spades.jpg",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 7",
			rule: "7 is Heaven! Last one to throw their hands up drinks!",
			pic: "https://lh4.googleusercontent.com/-v5bv8moMJ0s/TXCz499Ug3I/AAAAAAAAGCw/8ZsxZpiOmlQ/w475-h689-no/7_of_spades.jpg",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 6",
			rule: "6 is chicks! All females drink",
			pic: "https://lh3.googleusercontent.com/-c-nln7HLY74/TXCz4D3IdbI/AAAAAAAAGC0/s39xmrfwrgI/w475-h689-no/6_of_spades.jpg",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 5",
			rule: "5 is guys! All males drink",
			pic: "https://lh3.googleusercontent.com/-VhiZgMjBz18/TXCz3BYsoiI/AAAAAAAAGCc/92AT1clYpSA/w475-h689-no/5_of_spades.jpg",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 4",
			rule: "4 is Floor! Last to touch the floor drinks!",
			pic: "https://lh3.googleusercontent.com/-u-qQVkPKAvk/TXCz1uOUdOI/AAAAAAAAF0o/HmHtBdu-D7w/w475-h689-no/4_of_spades.jpg",
		},
		{
			suit: 'Spades ♠',
			value: "♠ 3",
			rule: "3 is Me! Take 3 sips.",
			pic: "https://lh3.googleusercontent.com/-LTYf7Td-l3s/TXCz0zYDChI/AAAAAAAAF84/nqwp1EGsTLA/w475-h689-no/3_of_spades.jpg"
		},
		{
			suit: 'Spades ♠',
			value: "♠ 2",
			rule: "2 is You! Take 2 sips.",
			pic: "https://lh3.googleusercontent.com/-_5BTUtEpRNY/TXCz0BxYwyI/AAAAAAAAF9U/BVTf0rUaJoI/w475-h689-no/2_of_spades.jpg",
		},
		{
			suit: 'Spades ♠',
			value: "♠ Ace",
			rule: "Waterfall! Ask the 2 players next to you a simple question to determine order.",
			pic: "https://lh6.googleusercontent.com/-WouDRILpHk8/TXaNJLhzQ_I/AAAAAAAAF9M/o3GkN3xT_Fw/w475-h689-no/ace_of_spades2.jpg",
		},
		{
			suit: "Clubs ♣",
			value: "King",
			rule: "Make a Rule! Everyone must abide by the rule throughout the game!",
			pic: "https://lh4.googleusercontent.com/-6QS99r6kF8U/TXC0E96qkxI/AAAAAAAAGEs/5c_wNdOPhaw/w475-h689-no/king_of_clubs.jpg",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ Queen",
			rule: "QuestionMaster! If anyone answers a question you ask, they must drink!",
			pic: "https://lh3.googleusercontent.com/-4OM_es6nTSw/TXC0Esco1LI/AAAAAAAAGEk/_c9MuRVr8Hg/w475-h689-no/queen_of_clubs.jpg",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ Jack",
			rule: "ThumbMaster! When you put your thumb down, every player must also. Last one drinks!",
			pic: "https://lh6.googleusercontent.com/-4tk0zf89OXM/TXC0EbUK8PI/AAAAAAAAGEc/YBg-8gIGxqQ/w475-h689-no/jack_of_clubs.jpg",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 10",
			rule: "10 is Category! Every player must name something that falls in the chosen category!",
			pic: "https://lh4.googleusercontent.com/-gIzPBvKbnyM/TXC0EGp3wjI/AAAAAAAAF-8/8kdTPVFGa1M/w475-h689-no/10_of_clubs.jpg",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 9",
			rule: "9 is Rhyme! Pick a word everyone must rhyme with!",
			pic: "https://lh3.googleusercontent.com/-5_pigBzf_zU/TXC0D_rvstI/AAAAAAAAF_I/4qu5MoxTHVM/w475-h689-no/9_of_clubs.jpg",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 8",
			rule: "8 is Mate! When you drink, your mate must drink!",
			pic: "https://lh3.googleusercontent.com/-4YBFMnZnpfM/TXC0DQjhGLI/AAAAAAAAGBs/2alLrpUCHss/w475-h689-no/8_of_clubs.jpg",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 7",
			rule: "7 is Heaven! Last one to throw their hands up drinks!",
			pic: "https://lh4.googleusercontent.com/-5zl_tjOLh2Q/TXC0C1NQ_LI/AAAAAAAAGBA/HvJYppLWeJA/w475-h689-no/7_of_clubs.jpg",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 6",
			rule: "6 is chicks! All females drink",
			pic: "https://lh3.googleusercontent.com/-jaTUZq9UdIc/TXC0Ckq0rfI/AAAAAAAAGA4/6SqnXTPO2tY/w475-h689-no/6_of_clubs.jpg",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 5",
			rule: "5 is guys! All males drink",
			pic: "https://lh6.googleusercontent.com/-wXvCbTuXdZM/TXC0Ca-kFfI/AAAAAAAAGBE/GzsH5M54ekU/w475-h689-no/5_of_clubs.jpg",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 4",
			rule: "4 is Floor! Last to touch the floor drinks!",
			pic: "https://lh3.googleusercontent.com/-Mi-VC_ArgaM/TXC0Bzar6lI/AAAAAAAAGAs/9yZN0DJcZ8A/w475-h689-no/4_of_clubs.jpg",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 3",
			rule: "3 is Me! Take 3 sips.",
			pic: "https://lh6.googleusercontent.com/-L-FwCfFqcBQ/TXC0BZdkk4I/AAAAAAAAF-U/JXMXFTdWvxo/w475-h689-no/3_of_clubs.jpg",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ 2",
			rule: "2 is You! Take 2 sips.",
			pic: "https://lh6.googleusercontent.com/-y3aS1YHvmxg/TXC0BIiVNzI/AAAAAAAAF_M/0fbLnufxd2Y/w475-h689-no/2_of_clubs.jpg",
		},
		{
			suit: 'Clubs ♣',
			value: "♣ Ace",
			rule: "Waterfall! Ask the 2 players next to you a simple question to determine order.",
			pic: "https://lh4.googleusercontent.com/-5z9_ul2COnM/TXC0BO_T-YI/AAAAAAAAF_U/B_PN_riwNuk/w475-h689-no/ace_of_clubs.jpg",
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

	$('.rulebutton').click(function() {
		$('.rule').toggle("slow");
	});


});