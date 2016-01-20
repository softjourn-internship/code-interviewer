var adminPanelApp = angular.module("adminPanelApp", ['ngRoute', 'ngResource','googlechart','ui.ace']);




/* Controllers Admin*/
/************************************************************************************/
adminPanelApp.controller('UserCtrl', ['$scope', '$http','$location','$routeParams',
  function ($scope, $http, $location, $routeParams) {
    $http.get('api/users/current').success(function(data) {
      $scope.user = data;
      $scope.username = $routeParams.username;

      if (data.role == 'ROLE_ADMIN') {
          $scope.usersVisible=true;
          $scope.dashboardVisible=false;
          $scope.tasksVisible=false;
          $scope.statisticsVisible=false;
        };
      if (data.role == 'ROLE_MANAGER') {
          $scope.usersVisible=false;
          $scope.dashboardVisible=true;
          $scope.tasksVisible=true;
          $scope.statisticsVisible=true;
       };
      if (data.role == 'ROLE_RECRUITER') {
          $scope.usersVisible=false;
          $scope.dashboardVisible=true;
          $scope.tasksVisible=true;
          $scope.statisticsVisible=false;
      };

    });
}]);


adminPanelApp.controller('UsersListCtrl', ['$scope', '$http','$location','$routeParams',
  function ($scope, $http, $location, $routeParams) {
   $routeParams.dataTable = 'users'
}]);

adminPanelApp.controller('ClientsListCtrl', ['$scope', '$http','$location','$routeParams',
  function ($scope, $http, $location, $routeParams) {

    $http.get('clients/clients.json').success(function(data) {
      $scope.clients = data;
      data = $routeParams.clients;

      $scope.addRowAsyncAsJSON = function(){
        $scope.clients.push({'username': $scope.firstName});

        var dataObj = { username: $scope.firstName };

        var res = $http.post('/admin/new', dataObj);

        res.success(function (data, status, headers, config) {
          $scope.message = data;
        });

      };



  });
}]);



// LOGIN
adminPanelApp.controller('loginCtrl',function($scope, $location) {
    document.getElementById("header").style.display = "none";
    document.getElementById("container").style.display = "none";


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


adminPanelApp.controller('DataCtrl', ['$scope', '$http', '$location','$routeParams',
  function ($scope, $http, $location, $routeParams) {

        $scope.dataTable = $routeParams.dataTable;
        var url = 'data/'+$routeParams.dataTable+'.json';

        $http.get('data/chart-pie-'+$routeParams.dataTable+'.json').success(function(data) {
          $scope.chartPieData = data;
        });

        $http.get(url).success(function(data) {
          $scope.dataTableList = data;

        $scope.titleTable = $scope.dataTable;

        // Sort
        $scope.sortField = undefined;
        $scope.reverse = false;

        $scope.sort = function(fieldName) {
          if ($scope.sortField === fieldName) {
            $scope.reverse = !$scope.reverse;
          }
          else {
            $scope.sortField = fieldName;
            $scope.reverse = false;
          }
        };

        $scope.isSortUp = function(fieldName) {
          return $scope.sortField === fieldName && !$scope.reverse;
        };

        $scope.isSortDown = function(fieldName) {
          return $scope.sortField === fieldName && $scope.reverse;
        };

        if ($scope.dataTable == 'participants') {
            $scope.selectTakenVisible = true;
            $scope.selectRoleVisible = false;
        }
        if ($scope.dataTable == 'users') {
            $scope.selectTakenVisible = false;
            $scope.selectRoleVisible = true;
        }

        $scope.pageSizes = [5, 10, 15, 20];
        $scope.pageSize = $scope.pageSizes[1];
        $scope.currentPage = 0;
        $scope.pageNumber = Math.ceil($scope.dataTableList.length / $scope.pageSize);

        $scope.paging = function (type) {
          if (type == 0 && $scope.currentPage > 0) {
            --$scope.currentPage;
            document.getElementById("currentPage").style.color = "#222";
          }
          else if (type == 1 && $scope.currentPage < $scope.pageNumber-1){
            ++$scope.currentPage;
            document.getElementById("currentPage").style.color = "#222";
          }
      }

      $scope.changeAction = function () {
          $scope.currentPage = 0;
          $scope.pageNumber = Math.ceil($scope.dataTableList.length / $scope.pageSize);
      }

      $scope.changeActionFilter = function () {
          $scope.currentPage = 0;
          $scope.pageNumber = Math.ceil($scope.lengthClientsPA.length / $scope.pageSize);
          alert($scope.pageNumber+"\n"+$scope.lengthClientsPA.length+"\n"+$scope.pageSize);
      }
    });

    $scope.clearFields = function() {
        $scope.firstName = null;
        $scope.lastName = null;
      };
  }]);
  //TASKS

  adminPanelApp.controller('TasksCtrl',['$scope','$http',function ($scope,$http){
      $scope.Visible=true;
      $scope.visibleMessageDel=false;
      $scope.countTaskT;
      $scope.dateForFilter={};
      $scope.getTaskList=function(){
      $http.get("data/AllTasks.json").then(function (response) {
        $scope.allTasks=response.data;
        });
      };
      $scope.buttonTbox;
      $scope.CreateOrChangeTask=function(buttonTitle) {
        $scope.buttonTbox=buttonTitle;
      }
      $scope.changeButton=function(){
        document.getElementById("sendT").style.background = '#abdd48';
        $scope.anableButton=true;

      }
      $scope.changeButtonBack=function(){
        document.getElementById("sendT").style.background = '#d9e8bb';
        $scope.anableButton=false;
      }
      $scope.delTask=function(taskId){
          $scope.taskIdDeleted=taskId;
          $scope.visibleMessageDel=true;
          for(var i=0;i<$scope.allTasks.length;i++){
          var obj = $scope.allTasks[i];
          if(taskId==i){
            $scope.titleTaskDel=obj.title;
            break;
          }
        }
      }
      $scope.deletedTask=function(){
        $scope.allTasks.splice($scope.taskIdDeleted,1);
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
        $scope.dateEndFilter="";
    $scope.days=[];
    for (var q=1; q<32;q++){
      if(q>0 && q<10){
        $scope.days.push("0"+q);
      }
      else{
        $scope.days.push(q);
      }
    }

    //sort
    $scope.sortType= '';
    $scope.sortReverse  = true;

  }]);


// config Admin Panel

adminPanelApp.config([
  '$routeProvider', '$locationProvider',
  function($routeProvide, $locationProvider){
    // $locationProvider.html5Mode(true);

    $routeProvide
        // .when('/',{
        //   templateUrl:'template/login.html',
        //   controller:'loginCtrl'
        // })
        .when('/data/:dataTable',{
          templateUrl:'template/data.html',
          controller:'ClientsListCtrl'
        })
        .
        when('/participants/:clientId', {
            templateUrl: 'template/profile.html',
            controller: 'ClientsProfileCtrl'
         })
        .
        when('/statistics', {
            templateUrl: 'template/statistics.html',
            controller: 'ClientsChartsCtrl'
         })
        .
        when('/usersі', {
            templateUrl: 'template/users.html',
            controller: 'ClientsListCtrl'
        })
        .
        when('/user/:username', {
            templateUrl: 'template/profile.html',
            controller: 'ClientsListCtrl'
        })
        .
        when('/tasks', {
            templateUrl: 'template/tasks.html',
            controller: 'TasksCtrl'
        })
        .
        when('/login?logout', {})

        $locationProvider.html5Mode(true);
  }
]);
/*   PUSH ON SERVER   */

adminPanelApp.controller("PushDataCtrl", function ($scope, $http){
  $scope.taskName = null;

  $scope.createTask = function () {
    var data = { firstName: $scope.taskName };
    $http.post("/admin/new", data).success(function (data, status, headers){
      alert("Task added.");
        // $scope.tasks.push(data);
    });
  };

});

/* Controllers UsersWorkspace*/
/************************************************************************************/
var myAppModule = angular.module('MyApp', ['ui.ace']);

myAppModule.controller('mainCTRL',['$scope','$http',function($scope,$http){
    var anableLog=false;
    $scope.NumberTask=1;
    $http.get("data/tasks.json").then(function (response) {
        $scope.taskForUser=response.data;
        $scope.TaskShow=$scope.taskForUser[1].task;
        $scope.programText=$scope.taskForUser[1].program;
        $scope.testText=$scope.taskForUser[1].test;
        $scope.logText=$scope.taskForUser[1].log;
    });
    $scope.changeText=function(idTask){
      //console.log($scope.taskForUser[idTask].program);
      $scope.taskForUser[idTask].program=$scope.programText;
      $scope.taskForUser[idTask].test=$scope.testText;
      $scope.taskForUser[idTask].log=$scope.logText;
      //console.log($scope.taskForUser[idTask].program);
    };

    $scope.newText=function(idTask){
    $scope.programText=$scope.taskForUser[idTask].program;
    $scope.testText=$scope.taskForUser[idTask].test;
    $scope.logText=$scope.taskForUser[idTask].log;
  };

    $scope.ShowTask=function(){
        if ($scope.NumberTask==1){$scope.TaskShow=$scope.taskForUser[1].task;}
        if ($scope.NumberTask==2){$scope.TaskShow=$scope.taskForUser[2].task;}
        if ($scope.NumberTask==3){$scope.TaskShow=$scope.taskForUser[3].task;}
  }
      $scope.TaskListVisible=false;


    $scope.ShowTest = function() {
    	$('#testEditor').css("z-index",4);
    	$('#testEditor').css("width",'98%');
    	$('#testEditor').css("left",'0%');
    	$('#IconProg').css("scr","images/Icon1.jpg");
    }

    $scope.ShowPr = function() {
    	$('#testEditor').css("z-index",1);
    	$('#programEditor').css("width",'98%');
    }
    $scope.ShowAll= function(){

    	$('#testEditor').css("width",'48%');
    	$('#programEditor').css("width",'48%');
    	$('#testEditor').css("left",'50%');
    	$("#IconAll").attr("scr","images/Icon3active.jpg");
    }

    $scope.ShowLogMessage = function () {
    	if (!anableLog){
    		$('#testEditor').css("height",'65%');
    		$('#programEditor').css("height",'65%');
    		$('#logMess').css("z-index",7);
    		anableLog=true;}
    	else{
    		$('#testEditor').css("height",'96%');
    		$('#programEditor').css("height",'96%');
    		$('#logMess').css("z-index",-2);
    		anableLog=false;}
    }

}]);
myAppModule.directive("timer", function () {
    return function (scope, element, attrs) {
    var clock;
      $(document).ready(function() {
        var Timer;
        $.getJSON( "data/tasks.json", function( data ) {
           Timer=data[0].time;
          // console.log(Timer);
            var clock = $('.clock').FlipClock(Timer,{
                  clockFace: 'MinuteCounter',
                  autoStart: false,
                  callbacks: {
                    stop: function() {
                      $('.message').html('The clock has stopped!')
                    }
                  }
              });
              //clock.setTime(438);
              //console.log(Timer);
              clock.setCountdown(true);
              clock.start();
                });
          });
        }
});
