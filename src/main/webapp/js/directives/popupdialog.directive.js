app.directive('popUpDialog', function() {
    return {
        restrict: 'E',
        templateUrl: 'template/popupmenu.html',
        scope: false,
        controller: 'PopUpDialogCtrl'
    }
});