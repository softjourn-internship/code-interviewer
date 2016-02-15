app.directive('popUpDialogData', function() {
    return {
        restrict: 'EA',
        templateUrl: 'template/popupdialog.data.html',
        scope: false,
        controller: 'PopUpDialogCtrl'
    }
});