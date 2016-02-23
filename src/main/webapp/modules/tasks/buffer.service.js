'use strict';

app.service('BufferService', function () {
   var titleTask;
   var taskIdDeleted;
   var task={};

   return {
       setTitleTaskDel: function (allTasks,id) {
         taskIdDeleted=id;
           for(var i=0;i<allTasks.length;i++){
             var obj = allTasks[i];
             if(id==obj.id){
               titleTask=obj.title;
               break;
             }
           }
        },
        setDataForTask: function(allTasks,id){
          for(var i=0;i<allTasks.length;i++){
            var ob=allTasks[i];
            if(id==ob.id){
              task = allTasks[i];
              break;
            }
          }
        },
        getTitleTaskDel: function () {
         return titleTask;
        },
        getTaskIdDeleted: function () {
          return taskIdDeleted;
        },
        getDataForTask: function () {
          return task;
        },
        resetDataForTask: function () {
          task.addedDate='';
          task.id='';
          task.difficulty='';
          task.technology='';
          task.task='';
          task.title='';
        }
}
});
