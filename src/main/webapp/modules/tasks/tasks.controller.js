app.controller('TasksCtrl',['$scope','$http','TasksService','$rootScope','ngDialog','BufferService',function ($scope,$rootScope,TasksService,$http,ngDialog,BufferService){
      $scope.Visible=true;
      $scope.visibleMessageDel=false;
      $scope.countTaskT;
      $scope.dateForFilter={};
      var refreshTaskList=function(){
        for(var l=0; l<=5;l++){
        var success = function (response) {
            $scope.allTasks = response.data;
            $scope.totalItems = response.data.length;
            $scope.currentPage = 1;
            $scope.itemsPerPage = 10;
            $scope.maxSize = 5;
          };
        TasksService.GetAll(success);
        }
      }

      refreshTaskList();
        $scope.clickToTryDelTask = function (taskId) {
          BufferService.setTitleTaskDel($scope.allTasks,taskId);
          ngDialog.open({
            template: 'modules/tasks/responseBeforDelete.template.html',
            controller: ['$scope', 'BufferService', function($scope, BufferService) {
              $scope.titleTaskDel=BufferService.getTitleTaskDel();
              $scope.deletedTask=function(){
                TasksService.Delete(BufferService.getTaskIdDeleted());
                refreshTaskList();
                refreshTaskList();
                $scope.closeThisDialog('');
              }
            }]
          });
        };

        $scope.changeOrCreateTask=function (id,save){
          BufferService.setDataForTask($scope.allTasks,id);
          ngDialog.open({
            showClose:false,
            className:'ngdialog-theme-for-editor',
            template: 'modules/tasks/changeOrCreateTask.template.html',
            controller: ['$scope', 'BufferService', function($scope, BufferService) {
              if(id<0){
                BufferService.resetDataForTask();
              }
              $scope.whatDo=true;
              $scope.changed={"a":false,"b":false,"c":false,"d":false};
              $scope.task=BufferService.getDataForTask();
              $scope.titleTask=$scope.task.title;
              $scope.diffTask=$scope.task.difficulty;
              $scope.techTask=$scope.task.technology;
              $scope.Task=$scope.task.task;
              $scope.saveTask=function(){
                $scope.task.title=$scope.titleTask;
                $scope.task.difficulty=$scope.diffTask;
                $scope.task.technology=$scope.techTask;
                $scope.task.task=$scope.Task;
                if(save){
                  TasksService.Update($scope.task);
                  refreshTaskList();
                }
                else{
                  TasksService.Create($scope.task);
                  refreshTaskList();
                }
                $scope.closeThisDialog('');
              };
              $scope.beenChanges= function(){
                if(id<0){
                  if($scope.changed.a && $scope.changed.b && $scope.changed.c && $scope.changed.d){$scope.whatDo=false;}
                }
                else{
                  if($scope.changed.a || $scope.changed.b || $scope.changed.c || $scope.changed.d){$scope.whatDo=false;}
                }
              };
              //options for summernote
          $scope.options = {
            height: 290,
            maxHeight: 290,
            minHeight: 290,
            toolbar: [
              ['style', ['bold', 'italic', 'underline', 'clear']],
              ['fontsize', ['fontsize']],
              ['color', ['color']],
              ['para', ['ul', 'ol', 'paragraph']],
              ['height', ['height']]
            ]
          };
            }]
          });
        };



        //sort
        $scope.sortType= '';
        $scope.sortReverse  = true;


  }]);
