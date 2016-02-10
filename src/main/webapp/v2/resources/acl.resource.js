(function () {
	'use strict';

	angular.module('v2.main')
		.factory('main.aclResource', [
			'AclService',
			function (AclService) {

				var permissions = {
					// roles permissions
					ROLE_ADMIN: [
						'view_users_list',
						'create_users',
						'view_user_profile'
					],
					ROLE_MANAGER: [
						'view_tasks_list',
						'create_task',
						'edit_own_task',
						'view_tasks_list',
						'view_task',
						'view_candidates_list',
						'view_task_results',
						'set_reviewer',
						'schedule_task',
						'view_analytics'
					],
					ROLE_REVIEWER: [
						'view_tasks_list',
						'view_task',
						'create_task',
						'edit_own_task',
						'delete_own_task',
						'review_task',
						'set_task_status'
					],
					ROLE_INTERVIEWER: [],
					ROLE_RECRUITER: [
						'view_candidates_list',
						'create_candidate',
						'edit_candidate',
						'delete_candidate',
						'add_watchers_to_candidate'
					]
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
