var adminPanelApp = angular.module("adminPanelApp", ['ngRoute', 'ngResource','googlechart','ui.ace']);
var myAppModule = angular.module('MyApp', ['ui.ace']);

/* Controllers Admin*/
/************************************************************************************/

adminPanelApp.controller('ClientsListCtrl', ['$scope', '$http','$location',
  function ($scope, $http, $location) {
    $http.get('clients/clients.json').success(function(data) {
      $scope.clients = data;
    });
  }]);
// LOGIN
adminPanelApp.controller('loginCtrl',function($scope, $location) {
    document.getElementById("header").style.display = "none";
    document.getElementById("container").style.display = "none";

    $scope.sumbit = function() {
      var username = $scope.username;
      var password = $scope.password;

      function admin() {
          $location.path('/participants');
          // $scope.sideBarShow = false;
          document.getElementById("header").style.display = "block";
          document.getElementById("container").style.display = "none";
          document.getElementById("content").style.marginLeft = "0px";
      };

      function recruiter() {
          $location.path('/dashboard');
          // $scope.sideBarShow = true;
          document.getElementById("header").style.display = "block";
          document.getElementById("container").style.display = "block";
          document.getElementById("content").style.marginLeft = "180px";

      };

      function manager() {
          $location.path('/dashboard');
          // $scope.sideBarShow = true;
          document.getElementById("header").style.display = "block";
          document.getElementById("container").style.display = "block";
          document.getElementById("content").style.marginLeft = "180px";
      };

      if(username == 'admin' && password == 'admin'){ admin(); }
      else if(username == 'recruiter' && password == 'recruiter'){ recruiter(); }
      else if(username == 'manager' && password == 'manager'){ manager(); }
      else alert("Wrong staff");
    };
});
// CHARTS

adminPanelApp.controller('ClientsChartsCtrl', ['$scope', '$http','$location',
  function ($scope, $http, $location) {
    $http.get('data/chart-pie.json').success(function(data) {
      $scope.chartPie = data;
    });
    $http.get('data/chart-column.json').success(function(data) {
      $scope.chartColumn = data;
    });
    $http.get('data/chart-line.json').success(function(data) {
      $scope.chartLine = data;
    });

  }]);

// PROFILE
adminPanelApp.controller('ClientsProfileCtrl', ['$scope', '$http', '$location','$routeParams',
  function ($scope, $http, $location, $routeParams) {
        $scope.clientId = $routeParams.clientId;

        var url = 'clients/'+$routeParams.clientId+'.json';
        $http.get(url).success(function(data) {
          $scope.client = data;
        });

        var url = 'data/statistics/'+$routeParams.clientId+'.json';
        $http.get(url).success(function(data) {
          $scope.clientStatistics = data;
        });
  }]);

  //TASKS

  adminPanelApp.controller('TasksCtrl',['$scope','$http',function ($scope,$http){
      $scope.Visible=true;
      $scope.visibleMessageDel=false;
      $scope.getTaskList=function(){
      $http.get("data/AllTasks.json").then(function (response) {
        $scope.allTasks=response.data;
        var v=$scope.allTasks;
        //console.log(v);
      });
    };
      $scope.buttonTbox;
      $scope.CreateOrChangeTask=function(buttonTitle) {
        $scope.buttonTbox=buttonTitle;
      }
      $scope.changeButton=function(){
        document.getElementById("sendT").style.background = 'rgb(100, 135, 181)';
      }
      $scope.changeButtonBack=function(){
        document.getElementById("sendT").style.background = '#a2b57d';
      }
      $scope.delTask=function(taskId){
          $scope.visibleMessageDel=true;
          for(var i=0;i<$scope.allTasks.length;i++){
          var obj = $scope.allTasks[i];
          if(taskId==i){
            $scope.titleTaskDel=obj.title;
          }
        }
      }
      $scope.changeFrame=function(taskId) {
        if(taskId!='empty'){
          for(var i=0;i<$scope.allTasks.length;i++){
          var obj = $scope.allTasks[i];
          if(taskId==i){
            $scope.titleTaskC=obj.title;
            $scope.diffTaskC=obj.level;
            $scope.techTaskC=obj.language;
            $scope.TaskC=obj.task;
        }
      }
    }
    else{
      $scope.titleTaskC='';
      $scope.diffTaskC='';
      $scope.techTaskC='';
      $scope.TaskC='';
    }
      $scope.Visible=!$scope.Visible;
    }

  }]);


// config Admin Panel

adminPanelApp.config([
  '$routeProvider', '$locationProvider',
  function($routeProvide, $locationProvider){
    $routeProvide
        // .when('/',{
        //   templateUrl:'template/login.html',
        //   controller:'loginCtrl'
        // })
        .when('/',{
          templateUrl:'template/dashboard.html',
          controller:'ClientsListCtrl'
        })
        .when('/participants',{
          templateUrl:'template/participants.html',
          controller:'ClientsListCtrl'
        })
        .
        when('/clients/:clientId', {
            templateUrl: 'template/profile.html',
            controller: 'ClientsProfileCtrl'
         })
        .
        when('/statistics', {
            templateUrl: 'template/statistics.html',
            controller: 'ClientsChartsCtrl'
         })

         .when('/tasks', {
             templateUrl: 'template/tasks.html',
             controller: 'TasksCtrl'
          })
        .otherwise({
          redirectTo: '/'
        });
  }
]);


/* Controllers UsersWorkspace*/
/************************************************************************************/

myAppModule.controller('SelectTaskCtrl', function($scope,$http){
  $scope.NumberTask=1;
  var Timer;
  $http.get("data/tasks.json").then(function (response) {
      if ($scope.NumberTask==1){$scope.TaskShow=response.data.first;}
      if ($scope.NumberTask==2){$scope.TaskShow= response.data.second;}
      if ($scope.NumberTask==3){$scope.TaskShow= response.data.third;}
    });
  $scope.ShowTask=function(){
    $http.get("data/tasks.json").then(function (response) {
      if ($scope.NumberTask==1){$scope.TaskShow=response.data.first; console.log($scope.TaskShow);}
      if ($scope.NumberTask==2){$scope.TaskShow= response.data.second;}
      if ($scope.NumberTask==3){$scope.TaskShow= response.data.third;}

  });
}
    $scope.TaskListVisible=true;
});
myAppModule.controller("testEd",function($scope){
  $scope.code="";
})
