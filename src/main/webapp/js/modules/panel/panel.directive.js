app.directive('panel', function() {
	return {
		restrict: 'EA',
		templateUrl: 'js/modules/panel/panel.template.html',
		scope: {
			tableData: '@tableData',
			chartData: '=',
			chartLabels: '=',
			title: '@',
			module: '@',
			template: '@'
		},
		controller: 'PanelCtrl'
	}
});