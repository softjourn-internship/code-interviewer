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
			})
			.state('main.tasks.list', {
				url: '',
				templateUrl: '/v2/modules/tasks/list/list.html',
				controller: 'v2.tasks.listCtrl as listCtrl',
				resolve: {
					acl: [
						'v2.AuthService',
						function (AuthService) {

							return AuthService.checkPermission('view_tasks_list');
						}
					],
					tasksCollection: [
						'v2.TaskModel',
						'acl',
						function (TaskModel, acl) {
							return TaskModel.getAll();
						}
					]
				}
			})
			.state('main.tasks.create', {
				url: '/create',
				templateUrl: '/v2/modules/tasks/create/create.html',
				controller: 'main.tasks.create.createCtrl as createCtrl',
				resolve: {
					acl: [
						'v2.AuthService',
						function (AuthService) {

							return AuthService.checkPermission('create_task');
						}
					],
					TaskModel: [
						'v2.TaskModel',
						'acl',
						function (TaskModel, acl) {
							console.log('here');
							return new TaskModel();
						}
					]
				}
			})
			.state('main.tasks.edit', {
				url: '/:taskId/edit',
				templateUrl: '/v2/modules/tasks/create/create.html',
				controller: 'main.tasks.create.createCtrl as createCtrl',
				resolve: {
					acl: [
						'v2.AuthService',
						function (AuthService) {

							return AuthService.checkPermission('edit_own_task');
						}
					],
					TaskModel: [
						'v2.TaskModel',
						'$stateParams',
						'acl',
						function (TaskModel, $stateParams, acl) {
							return TaskModel.getById($stateParams.taskId);
						}
					]
				}
			});
	}
})();
