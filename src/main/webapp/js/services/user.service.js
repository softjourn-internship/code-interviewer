'use strict';

app
.factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll(handleSuccess) {
            return $http.get('/user').then(handleSuccess, handleError('Error getting all user'));
        }

        function GetById(id, handleSuccess) {
            return $http.get('/user/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
            return $http.get('/user/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function Create(user) {
            return $http.post('/user', user).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put('/user/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('/user/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions

        function handleError (error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }
