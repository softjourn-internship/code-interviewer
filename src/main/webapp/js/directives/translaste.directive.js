app.directive('translateButton', function() {
    return {
        restrict: 'E',
        template: '<button class="btn lang" ng-click="setLang()"></button>',
        scope: false,
        controller: 'TranslateCTRL'
    }
});
