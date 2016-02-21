app.controller('TasksCtrl',['$scope','$http','TasksService','$rootScope','ngDialog','BufferService',function ($scope,$rootScope,TasksService,$http,ngDialog,BufferService){
      $scope.Visible=true;
      $scope.visibleMessageDel=false;
      $scope.countTaskT;
      $scope.dateForFilter={};

      var success = function (response) {
          $scope.allTasks = response.data;
          $scope.totalItems = response.data.length;
          $scope.currentPage = 1;
          $scope.itemsPerPage = 10;
          $scope.maxSize = 5;
        };

      TasksService.GetAll(success);

        $scope.clickToTryDelTask = function (taskId) {
          BufferService.setTitleTaskDel($scope.allTasks,taskId);
          ngDialog.open({
            template: 'js/modules/tasks/responseBeforDelete.template.html',
            controller: ['$scope', 'BufferService', function($scope, BufferService) {
              $scope.titleTaskDel=BufferService.getTitleTaskDel();
              $scope.deletedTask=function(){
                TasksService.Delete(BufferService.getTaskIdDeleted());
                $scope.closeThisDialog('');
              }
            }]
          });
        };

        $scope.changeOrCreateTask=function (id,save){
          BufferService.setDataForTask($scope.allTasks,id);
          ngDialog.open({
            template: 'js/modules/tasks/changeOrCreateTask.template.html',
            controller: ['$scope', 'BufferService', function($scope, BufferService) {
              if(id<0){
                BufferService.resetDataForTask();
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
                }
                else{
                  TasksService.Create($scope.task);
                }
                $scope.closeThisDialog('');
              };
            }]
          });
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
