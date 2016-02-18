app.controller('TasksCtrl',['$scope','$http','TasksService','$rootScope',function ($scope,$rootScope,TasksService,$http){
      $scope.Visible=true;
      $scope.visibleMessageDel=false;
      $scope.countTaskT;
      $scope.dateForFilter={};

      var success = function (response) {
          $scope.allTasks = response.data;

          $scope.viewby = 5;
          $scope.totalItems = response.data.length;
          $scope.currentPage = 1;
          $scope.itemsPerPage = $scope.viewby;
          $scope.maxSize = 5;
          $scope.setPage = function (pageNo) {
              $scope.currentPage = pageNo;
          };

          $scope.pageChanged = function() {
              console.log('Page changed to: ' + $scope.currentPage);
          };

          $scope.setItemsPerPage = function(num) {
              $scope.itemsPerPage = num;
              $scope.currentPage = 1; //reset to first paghe
          }
        };

      TasksService.GetAll(success);

      $scope.buttonTbox;
      $scope.CreateOrChangeTask=function(buttonTitle) {
        $scope.buttonTbox=buttonTitle;
      }

      $scope.changeButton=function(){
        $scope.anableButton=true;
      }

      $scope.changeButtonBack=function(){
        $scope.anableButton=false;
      }

      $scope.hideFrame=function() {
        $scope.visibleMessageDel=!$scope.visibleMessageDel;
      }

      $scope.delTask=function(taskId){
          $scope.taskIdDeleted=taskId;
          $scope.visibleMessageDel=true;
          for(var i=0;i<$scope.allTasks.length;i++){
          var obj = $scope.allTasks[i];
          if(taskId==obj.id){
            $scope.titleTaskDel=obj.title;
            $scope.numbetTaskDel=i;
            break;
          }
        }
      }

      $scope.deletedTask=function(){
        $scope.visibleMessageDel=!$scope.visibleMessageDel;
        TasksService.Delete($scope.taskIdDeleted);
        $scope.allTasks.splice($scope.numbetTaskDel,1);
      }

      $scope.changeFrame=function(taskId) {
        if(taskId!='empty'){
          for(var i=0;i<$scope.allTasks.length;i++){
          var obj = $scope.allTasks[i];
          if(taskId==obj.id){
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
    $scope.modityTask=function(buttonTbox){
        var taskForSend=[];
        taskForSend.title=$scope.titleTaskC;
        taskForSend.difficulty=$scope.diffTaskC;
        taskForSend.technology=$scope.techTaskC;
        taskForSend.task=$scope.TaskC;
        console.log(taskForSend);
          if(buttonTbox=='CHANGE_TASK'){
            TasksService.Update(taskForSend);
          } else{
            TasksService.Create(taskForSend);
          }
        };

        //options for ckeditor
        $scope.options = {
          language: 'en',
          allowedContent: true,
          entities: false
        };

        //sort
    $scope.sortType= '';
    $scope.sortReverse  = true;


  }]);
