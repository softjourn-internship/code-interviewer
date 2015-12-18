/* Controllers */
var adminPanelApp = angular.module("adminPanelApp", []); 

adminPanelApp.controller('myCtrl', 
	function($scope, $http) {
  		$http.get("http://www.w3schools.com/angular/customers.php").then(function (response) {$scope.names = response.data.records;});
});

adminPanelApp.controller('PhoneListCtrl', function ($scope, $http) {
  
  // $http.get('clients/clients.json').succes(function(data){
  // 	$scope.clients = data;
  // });

  $scope.clients = [
    {
    	'id': 1,
     	'name': 'Dmytro',
     	'surname': 'Kutsaniuk',
     	'middlename': 'Volodymyrovych',
     	'email':'kutsaniuk@gmail.com',
     	'status':'Done',
     	'statusClass':'done',
     	'testSent':'17.12.2015',
     	'testReturn':'18.12.2015'
     },
    {
    	'id': 2,
     	'name': 'Yura',
     	'surname': 'Demkiv',
     	'middlename': 'Volodymyrovych',
     	'email':'demkiv@gmail.com',
     	'status':'Done',
     	'statusClass':'done',
     	'testSent':'13.01.2015',
     	'testReturn':'18.01.2015'
     },
     {
    	'id': 3,
     	'name': 'Ivan',
     	'surname': 'Arabchuk',
     	'middlename': 'Volodymyrovych',
     	'email':'arabchuk@gmail.com',
     	'status':'In progress',
     	'statusClass':'in-progress',
     	'testSent':'18.06.2015',
     	'testReturn':'20.06.2015'
     }
  ];

  // $scope.orderProp = 'age';
});
