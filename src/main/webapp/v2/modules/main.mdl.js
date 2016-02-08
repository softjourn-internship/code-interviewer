(function () {
	'use strict';

	var main = angular.module('v2.main', [
			'mm.acl',
			'ui.ace',
			'ngRoute',
			'ngResource',
			'googlechart',
			'ui.router',
			'pascalprecht.translate',
			'v2.tasks'
		])
		.run(run)
		.config(configure);


	configure.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
	function configure($locationProvider, $stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise(function ($injector) {
			var $state = $injector.get("$state");
			$state.go('main.interviewer');
		});

		$stateProvider
			.state('main', {
				abstract: true,
				template: '<ui-view></ui-view>'
			})
			.state('main.interviewer', {
				url: '/',
				templateUrl: '/v2/templates/workspase.html',
				resolve: {
					'acl': ['$q', 'AclService', function ($q, AclService) {

						var defered = $q.defer();
						if (AclService.can('solve_tasks')) {
							return true;
						} else {
							// Does not have permission
							defered.reject('Unauthorized');
						}
						return defered.promise;
					}]
				}

			});

		$locationProvider.html5Mode(true);
	}

	run.$inject = ['$rootScope', '$location', '$state', 'AclService', 'main.aclResource', 'currentUser'];
	function run($rootScope, $location, $state, AclService, aclResource, currentUser) {

		AclService.setAbilities(aclResource.getPermissions());
		if (currentUser.role) {
			AclService.attachRole(currentUser.role);
			$rootScope.currentUser = currentUser;
		}

		$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
			event.preventDefault();
			if (error === 'Unauthorized') {
				$state.go(aclResource.getEntryRoute());
			}
		});

	}


	// init application manually
	fetchData().then(bootstrapApplication);

	function fetchData() {
		var initInjector = angular.injector(["ng"]);
		var $http = initInjector.get("$http");

		return $http.get("/api/users/current").then(function (response) {
			main.constant("currentUser", response.data);
		}, function (errorResponse) {
			// Handle error case
		});
	}

	function bootstrapApplication() {
		angular.element(document).ready(function () {
			angular.bootstrap(document, ["v2.main"]);
		});
	}
})();
