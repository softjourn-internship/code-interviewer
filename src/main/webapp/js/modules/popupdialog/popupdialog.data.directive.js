app.directive('popUpDialogData', function() {
    return {
        restrict: 'EA',
        templateUrl: 'js/modules/popupdialog/popupdialog.data.template.html',
        scope: false,
        controller: 'PopUpDialogCtrl'
    }
});