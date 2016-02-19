app.directive('tableMain', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/modules/table/table.template.html',
		scope: false,
		controller: 'TableCtrl'
	}
});