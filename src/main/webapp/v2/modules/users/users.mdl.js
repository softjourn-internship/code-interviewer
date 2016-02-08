(function () {
	'use strict';

	angular.module('v2.users', ['v2.main'])
		.config(configure);

	configure.$inject = ['$stateProvider'];
	function configure($stateProvider) {
		$stateProvider
			.state('users', {
				url: '/users/:clientId',
				templateUrl: 'template/profile.html',
				// controller: 'DataCtrl'
				controller: function ($scope, $http, $stateParams) {
					$scope.clientId = $stateParams.clientId;
					var url = 'api/users/' + $stateParams.clientId;

					$http.get(url).success(function (data) {
						$scope.client = data;
					});
				}
			});
	}
})();
