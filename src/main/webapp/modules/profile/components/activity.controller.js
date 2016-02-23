app.controller('ActivityCtrl',
  function ($scope, $location, $http, $stateParams, ngDialog, ParticipantService, UserService) {
  	var success = function (response) {
			$scope.account = response.data;
		}
	ParticipantService.GetById($stateParams.accId ,success);

  });
