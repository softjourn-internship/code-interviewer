(function () {
	'use strict';

	angular.module('v2.tasks')
		.controller('v2.tasks.listCtrl', listCtrl);

	listCtrl.$inject = ['tasksCollection'];
	function listCtrl(tasksCollection) {
		this.tasks = tasksCollection;

		this.deleteTask = function (task) {
			task.delete().then(function () {
				this.tasks.splice(this.tasks.indexOf(task), 1);
			}.bind(this));
		}.bind(this);
	}
})();
