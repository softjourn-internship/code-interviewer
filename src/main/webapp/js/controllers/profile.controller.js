app.controller('ProfileCtrl',
    ['$scope', '$location', '$http', '$stateParams', 'ParticipantService', 'UserService',
    function ($scope, $location, $http, $stateParams, ParticipantService, UserService) {
        var success = function (response) {
            $scope.account = response.data;
        }
        ParticipantService.GetById($stateParams.accId ,success);

    }]);
