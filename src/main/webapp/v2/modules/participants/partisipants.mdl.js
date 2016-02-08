(function () {
	'use strict';

	angular.module('v2.participants', ['v2.main'])
		.config(configure);

	configure.$inject = ['$stateProvider'];
	function configure($stateProvider) {
		$stateProvider
			.state('main.participants', {
				url: '/participants/:clientId',
				templateUrl: 'template/profile.html',
				controller: function ($scope, $http, $stateParams) {
					$scope.clientId = $stateParams.clientId;
					var url = 'api/participants/' + $stateParams.clientId;

					$http.get(url).success(function (data) {
						$scope.client = data;
					});
				}
			});
	}
})();
