(function () {
	'use strict';

	angular.module('v2.statistics', ['v2.main'])
		.config(configure);
	configure.$inject = ['$stateProvider'];
	function configure($stateProvider) {
		$stateProvider
			.state('main.statistics', {
				url: '/statistics',
				templateUrl: 'template/statistics.html',
				controller: 'ClientsChartsCtrl'
			});
	}
})();
