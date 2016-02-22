app.directive('tableWithTasks', function() {
    return {
        restrict: 'E',
        templateUrl: 'template/tableWithTasks.html',
        scope: false,
        controller: 'TasksCtrl'
    }
});
