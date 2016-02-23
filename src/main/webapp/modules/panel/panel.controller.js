app.controller('PanelCtrl',
  function ($scope, $location, $http, ngDialog, ParticipantService, UserService) {
    $scope.openDialog = function (module, typedialog) {
      ngDialog.open({ template: 'modules/' + module + '/components/dialog.' + typedialog + '.template.html'});
    };

    $scope.pathTemplate = 'modules/' + $scope.module + '/components/' + $scope.template + '.template.html';

  });
