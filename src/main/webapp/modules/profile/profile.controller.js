app.controller('ProfileCtrl',
	['$scope', '$location', '$http', '$stateParams', 'ngDialog', 'ParticipantService', 'UserService',
	function ($scope, $location, $http, $stateParams, ngDialog, ParticipantService, UserService) {
		var success = function (response) {
			$scope.account = response.data;
		}
		ParticipantService.GetById($stateParams.accId ,success);

		$scope.changeBackground = false;
		$scope.changeAvatar = false;

		$scope.scheduleDialog = function () {
			ngDialog.open({ template: 'modules/dialog/dialog.schedule.template.html'});
		};

	}]);
