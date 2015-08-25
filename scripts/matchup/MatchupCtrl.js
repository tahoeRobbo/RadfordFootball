var app = angular.module('RadfordFootball');

app.controller('MatchupCtrl', function($scope, MatchupService) {
	$scope.test = "MatchupCtrl test";

	$scope.getMatchup = function(){
		
		$scope.matchData = MatchupService.getMatchup($scope.team1, $scope.team2);
		console.log($scope.matchData, ' $scope.matchData');
	};
	
	
	
	
});// end MatchupCtrl