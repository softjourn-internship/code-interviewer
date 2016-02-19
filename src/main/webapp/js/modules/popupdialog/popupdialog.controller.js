app.controller('PopUpDialogCtrl',
    ['$scope', '$location', '$element',
    function ($scope, $location, $element) {
    	$scope.show = false;

    	switch ($scope.type.toString()) {
    		case 'data': {
    			$scope.title = 'Add participant'
    			$scope.btnTitle = 'Add';
    		}
    			break;
    		case 'schedule': {
    			$scope.title = 'Schedule test'
    			$scope.btnTitle = 'Schedule';
    		}
    			break;
    	}
    }]);