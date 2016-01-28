adminPanelApp.config(['$translateProvider', function($translateProvider,$http){

  // Register a loader for the static files
  // So, the module will search missing translation tables under the specified urls.
  // Those urls are [prefix][langKey][suffix].
  $translateProvider.useStaticFilesLoader({
    prefix: '/scripts/providers/',
    suffix: '.json'
  });

  // Tell the module to store the language in the cookies
  //$translateProvider.preferredLanguage('en');
  //$translateProvider.useCookieStorage();

}])

adminPanelApp.controller('translateCTRL', ['$scope', '$translate', function($scope, $translate) {
  $scope.translateImageSrc="images/en.jpg";
  $translate.use('en');
  $scope.en=true;
  $scope.setLang = function() {
    if(!$scope.en){
        $scope.translateImageSrc="images/en.jpg";
        $translate.use('en');
        $scope.en=!$scope.en;
    } else{
      $scope.translateImageSrc="images/uk.png";
      $translate.use('uk');
      $scope.en=!$scope.en;
    }
  };

}]);
