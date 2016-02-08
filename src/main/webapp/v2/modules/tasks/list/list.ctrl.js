(function () {
	'use strict';

	angular.module('v2.tasks')
		.controller('v2.tasks.listCtrl', listCtrl);

	listCtrl.$inject = ['tasksResource'];
	function listCtrl(tasksResource) {
		this.tasks = tasksResource.data;
	}
})();
