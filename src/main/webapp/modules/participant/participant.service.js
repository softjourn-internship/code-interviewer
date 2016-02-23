'use strict';

app
.factory('ParticipantService', ParticipantService)
    ParticipantService.$inject = ['$http'];
    function ParticipantService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll(handleSuccess) {
            return $http.get('/participant').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id, handleSuccess) {
            return $http.get('/participant/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
            return $http.get('/participant/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function Create(user, handleSuccess) {
            return $http.post('/participant', user).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put('/participant/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('/participant/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions

        function handleError (error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }
