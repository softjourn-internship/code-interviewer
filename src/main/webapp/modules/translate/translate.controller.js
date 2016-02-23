app.controller('TranslateCTRL', ['$scope', '$translate', function($scope, $translate) {
  $translate.use('en');
  $scope.en=true;
  $scope.setLang = function() {
    if(!$scope.en){
        $translate.use('en');
        $scope.en=!$scope.en;
    } else{
      $translate.use('uk');
      $scope.en=!$scope.en;
    }
  };

}]);
