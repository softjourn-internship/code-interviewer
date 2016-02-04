adminPanelApp.controller('TasksCtrl',['$scope','$http',function ($scope,$http){
      $scope.Visible=true;
      $scope.visibleMessageDel=false;
      $scope.countTaskT;
      $scope.dateForFilter={};
      $scope.getTaskList=function(){
      $http.get("/api/tasks").then(function (response) {
        console.log(response.data);
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
        $scope.visibleMessageDel=!$scope.visibleMessageDel;
        console.log($scope.visibleMessageDel);
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
