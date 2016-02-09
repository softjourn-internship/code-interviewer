'use strict';

app
  .factory('UsersService', function ($http){
    return {
      auth: function (data, successCallback, errorCallback) {
          return $http.post('/api/authentication', data).then(successCallback, errorCallback);
        }
      }
  });