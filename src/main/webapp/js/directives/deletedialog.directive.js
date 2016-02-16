app.directive('deleteDialog', function() {
    return {
        restrict: 'EA',
        templateUrl: 'template/deleteDialog.html',
        scope: {
     		show: "=show",
     		type: "@type"
    	},
        controller: 'TasksCtrl'
    }
});
