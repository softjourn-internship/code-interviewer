adminPanelApp.controller('TasksCtrl',['$scope','$http',function ($scope,$http){
      //CKEDITOR.replace( 'build-editor' );
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
        $scope.Visible=!$scope.Visible;
        document.getElementById("sendT").style.background = '#d9e8bb';
        $scope.anableButton=false;
        var taskObj;
        taskObj.title=$scope.titleTaskC;
        taskObj.id=$scope.idTaskForChange;
        taskObj.difficulty=$scope.diffTaskC;
        taskObj.technology=$scope.techTaskC;
        taskObj.task=$scope.TaskC;
      }
      $scope.delTask=function(taskId){
          $scope.taskIdDeleted=taskId-1;
          $scope.visibleMessageDel=true;
          for(var i=0;i<$scope.allTasks.length;i++){
          var obj = $scope.allTasks[i];
          if($scope.taskIdDeleted==i){
            $scope.titleTaskDel=obj.title;
            break;
          }
        }
      }
      $scope.deletedTask=function(){
        $scope.visibleMessageDel=!$scope.visibleMessageDel;
        console.log($scope.taskIdDeleted);
        var urlDel=$scope.taskIdDeleted+1;
        $http.delete('/api/tasks/'+urlDel).then(function (response) {
        $scope.allTasks.splice($scope.taskIdDeleted,1);
        });
      }
      $scope.options = {
        language: 'en'
      };
      $scope.changeFrame=function(taskId) {
        $scope.idTaskForChange=taskId;
        if(taskId!='empty'){
          for(var i=0;i<$scope.allTasks.length;i++){
          var obj = $scope.allTasks[i];
          if(taskId==i+1){
            $scope.titleTaskC=obj.title;
            $scope.diffTaskC=obj.difficulty;
            $scope.techTaskC=obj.technology;
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
