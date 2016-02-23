app.directive('tableWithTasks', function() {
	return {
		restrict: 'E',
		templateUrl: 'modules/tasks/table.template.html',
		scope: false,
		controller: 'TasksCtrl'
	}
});
