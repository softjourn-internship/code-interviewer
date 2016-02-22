app.directive('popUpDialog', function() {
    return {
        restrict: 'EA',
        templateUrl: 'template/popupdialog.html',
        scope: {
     		show: "=show",
     		type: "@type"
    	},
        controller: 'PopUpDialogCtrl'
    }
});