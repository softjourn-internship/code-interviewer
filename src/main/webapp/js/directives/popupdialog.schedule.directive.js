app.directive('popUpDialogSchedule', function() {
    return {
        restrict: 'EA',
        templateUrl: 'template/popupdialog.schedule.html',
        scope: false,
        controller: 'PopUpDialogCtrl'
    }
});