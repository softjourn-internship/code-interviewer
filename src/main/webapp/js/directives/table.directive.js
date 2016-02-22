app.directive('tableMain', function() {
    return {
        restrict: 'E',
        templateUrl: 'template/table.html',
        scope: false,
        controller: 'TableCtrl'
    }
});