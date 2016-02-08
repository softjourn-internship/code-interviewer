(function () {
	'use strict';

	angular.module('main', [
			'ui.ace',
			'ngRoute',
			'ngResource',
			'googlechart',
			'ui.router',
			'pascalprecht.translate'
		])
		.config(configure);


	configure.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
	function configure($locationProvider, $stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('data', {
				url: '/data/:dataTable',
				templateUrl: 'template/data.html',
				controller: 'DataCtrl'
			})
			.state('participants', {
				url: '/participants/:clientId',
				templateUrl: 'template/profile.html',
				controller: function($scope, $http, $stateParams) {
					$scope.clientId = $stateParams.clientId;
					var url = 'api/participants/'+$stateParams.clientId;

					$http.get(url).success(function(data) {
						$scope.client = data;
					});
				}
			})
			.state('users', {
				url: '/users/:clientId',
				templateUrl: 'template/profile.html',
				// controller: 'DataCtrl'
				controller: function($scope, $http, $stateParams) {
					$scope.clientId = $stateParams.clientId;
					var url = 'api/users/'+$stateParams.clientId;

					$http.get(url).success(function(data) {
						$scope.client = data;
					});
				}
			})
			.state('statistics', {
				url: '/statistics',
				templateUrl: 'template/statistics.html',
				controller: 'ClientsChartsCtrl',
			})
			.state('tasks', {
				url: '/tasks',
				templateUrl: 'template/tasks.html',
				controller: 'TasksCtrl'
			});

		$locationProvider.html5Mode(true);
	}
})();
