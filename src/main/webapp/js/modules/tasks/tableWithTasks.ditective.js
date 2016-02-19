app.directive('tableWithTasks', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/modules/tasks/table.template.html',
		scope: false,
		controller: 'TasksCtrl'
	}
});
