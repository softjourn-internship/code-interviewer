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
            template: 'modules/tasks/changeOrCreateTask.template.html',
            controller: ['$scope', 'BufferService', function($scope, BufferService) {
              if(id<0){
                BufferService.resetDataForTask();
                //console.log(BufferService.getDataForTask());
              }
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
              //options for ckeditor
          $scope.options = {
            height: 215,
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
