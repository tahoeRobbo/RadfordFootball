var app = angular.module('RadfordFootball');

app.service('MatchupService', function($http) {
	this.getMatchup = function(team1, team2){
		$http({
			method : 'JSONP',
			url : 'https://collegefootballapi.com/api/1.0/matchup/' + team1 + '/' + team2
		}).success(function(data) {
			console.log(data, ' success');
						
		})
		.error(function(data){
			console.log(data, 'error')
		})
	};
	
	
});// end MatchupService