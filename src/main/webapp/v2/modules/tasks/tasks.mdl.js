(function () {
	'use strict';

	angular.module('v2.tasks', [])
		.config(configure);

	configure.$inject = ['$stateProvider'];
	function configure($stateProvider) {
		$stateProvider
			.state('main.tasks', {
				abstract: true,
				url: 'tasks',
				templateUrl: '/v2/templates/dashboard.html'
				//resolve: {
				//	'acl': ['$q', 'AclService', function ($q, AclService) {
				//		if (AclService.can('view_tasks')) {
				//			return true;
				//		} else {
				//			// Does not have permission
				//			return $q.reject('Unauthorized');
				//		}
				//	}]
				//}
			})
			.state('main.tasks.list', {
				url: '',
				templateUrl: '/v2/modules/tasks/list/list.html',
				controller: 'v2.tasks.listCtrl as listCtrl',
				resolve: {
					tasksResource: [
						'$http',
						function ($http) {
							return $http.get("/api/tasks");
						}
					]
				}
			});
	}
})();
