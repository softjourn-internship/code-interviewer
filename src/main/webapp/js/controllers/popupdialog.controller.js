app.controller('PopUpDialogCtrl',
    ['$scope', '$location', 
    function ($scope, $location) {
        $scope.speciality = {
		    options:['Front-End Developer', 'Java Developer', '.NET Developer', 'JavaScript Developer'],
		    selected: ''
		  };
    }]);