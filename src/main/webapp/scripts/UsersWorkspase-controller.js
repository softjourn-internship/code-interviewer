var myAppModule = angular.module('MyApp', ['ui.ace']);

myAppModule.controller('SelectTaskCtrl', function($scope,$http){
	$scope.NumberTask=1;
	$http.get("Data/Tasks.json").then(function (response) {
	  	if ($scope.NumberTask==1){$scope.TaskShow=response.data.first;}
	  	if ($scope.NumberTask==2){$scope.TaskShow= response.data.second;}
	  	if ($scope.NumberTask==3){$scope.TaskShow= response.data.third;}});
	$scope.ShowTask=function(){
		$http.get("Data/Tasks.json").then(function (response) {
	  	if ($scope.NumberTask==1){$scope.TaskShow=response.data.first; console.log($scope.TaskShow);}
	  	if ($scope.NumberTask==2){$scope.TaskShow= response.data.second;}
	  	if ($scope.NumberTask==3){$scope.TaskShow= response.data.third;}
	  	
	  	

  });
}
  	$scope.TaskListVisible=true;
	
	
});