app.directive('popUpDialog', function() {
	return {
		restrict: 'EA',
		templateUrl: 'js/modules/popupdialog/popupdialog.template.html',
		scope: {
			show: "=show",
			type: "@type"
		},
		controller: 'PopUpDialogCtrl'
	}
});