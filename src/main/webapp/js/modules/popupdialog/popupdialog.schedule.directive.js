app.directive('popUpDialogSchedule', function() {
	return {
		restrict: 'EA',
		templateUrl: 'js/modules/popupdialog/popupdialog.schedule.template.html',
		scope: false,
		controller: 'PopUpDialogCtrl'
	}
});