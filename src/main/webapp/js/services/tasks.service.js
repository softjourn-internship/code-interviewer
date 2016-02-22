'use strict';

app.factory('TasksService',TasksService);
    TasksService.$inject = ['$http'];
    function TasksService($http) {
        var service = {};
        service.GetAll = GetAll;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll(handleSuccess) {
            return $http.get('/api/tasks').then(handleSuccess);
        }

        function Create(task) {
            return $http.post('/api/tasks', task).then();
        }

        function Update(task) {
            return $http.put('/api/tasks', task).then();
        }

        function Delete(Id) {
            return $http.delete('/api/tasks/' + Id);
        }

    }
