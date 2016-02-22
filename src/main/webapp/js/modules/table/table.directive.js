app.directive('tableMain', function() {
	return {
		restrict: 'EA',
		templateUrl: 'js/modules/table/table.template.html',
		scope: {
			datatable: '='
		},
		controller: 'TableCtrl'
	}
});