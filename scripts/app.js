var app = angular.module('RadfordFootball', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/matchup', {
		templateUrl : 'scripts/matchup/matchupTmpl.html',
		controller : 'MatchupCtrl'
	})
	.otherwise('/');
}); // end app.config