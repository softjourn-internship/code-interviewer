app.directive('panel', function() {
	return {
		restrict: 'EA',
		templateUrl: 'modules/panel/panel.template.html',
		scope: {
			tableData: '@tableData',
			chartData: '=',
			chartLabels: '=',
			chartSeries: '=',
			title: '@',
			module: '@',
			template: '@'
		},
		controller: 'PanelCtrl'
	}
});