app.directive('tableMain', function() {
	return {
		restrict: 'EA',
		templateUrl: 'modules/table/table.template.html',
		scope: {
			datatable: '=',
			module: '@',
			typedialog: '@'
		},
		controller: 'TableCtrl'
	}
});