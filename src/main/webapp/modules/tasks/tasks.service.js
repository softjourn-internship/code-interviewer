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
            return $http.get('/task').then(handleSuccess);
        }

        function Create(task) {
            return $http.post('/task', task).then();
        }

        function Update(task) {
            return $http.put('/task', task).then();
        }

        function Delete(Id) {
            return $http.delete('/task/' + Id);
        }

    }
