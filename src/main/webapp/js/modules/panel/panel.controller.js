app.controller('PanelCtrl',
  function ($scope, $location, $http, ngDialog, ParticipantService, UserService) {
    $scope.openDialog = function (module, typedialog) {
      ngDialog.open({ template: 'js/modules/' + module + '/dialog.' + typedialog + '.template.html'});
    };

    $scope.pathTemplate = 'js/modules/' + $scope.module + '/components/' + $scope.template + '.template.html';

  });
