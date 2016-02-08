(function () {
	'use strict';

	angular.module('v2.main')
		.factory('main.aclResource', [
			'AclService',
			function (AclService) {

				var permissions = {
					// roles permissions
					ROLE_ADMIN: ['view_tasks', 'create_tasks', 'edit_tasks', 'delete_tasks', 'view_participants'],
					ROLE_MANAGER: this.ROLE_ADMIN,
					ROLE_INTERVIEWER: ['solve_tasks'],
					ROLE_REVIEWER: [],
					ROLE_PARTICIPANT: [],
					ROLE_RECRUITER: ['create_tasks', 'edit_tasks', 'delete_tasks', 'view_participants']
				};

				var entry_routes = {
					ROLE_ADMIN: 'main.tasks.list',
					ROLE_MANAGER: 'main.tasks.list',
					ROLE_INTERVIEWER: 'main.interviewer',
					ROLE_REVIEWER: 'main.tasks.list',
					ROLE_PARTICIPANT: 'main.tasks.list',
					ROLE_RECRUITER: 'main.tasks.list',
					ROLE_GUEST: 'main.tasks.list'
				};

				return {
					getPermissions: function () {
						return permissions;
					},
					getEntryRoute: function () {
						var role = AclService.getRoles()[0] || 'ROLE_GUEST';
						return entry_routes[role] || 'login'
					}
				};
			}]);
})();
