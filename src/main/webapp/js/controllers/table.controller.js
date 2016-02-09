app.controller('TableCtrl',
    ['$scope', '$location', '$http', 'ParticipantService', 'UserService',
    function ($scope, $location, $http, ParticipantService, UserService) {
        var success = function (response) {
            $scope.data = response.data;

            // Pagination
            $scope.viewby = 10;
            $scope.totalItems = $scope.data.length;
            $scope.currentPage = 1;
            $scope.itemsPerPage = $scope.viewby;
            $scope.maxSize = 5; //Number of pager buttons to show

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

            // Table columns
            $scope.infoTable = {
                title: 'participant',
                columns:['Name', 'Email', 'Sent', 'Returned', 'Taken']
            };

            //Sort
            $scope.sortField = undefined;
            $scope.reverse = false;

            $scope.sort = function(fieldName) {
              if ($scope.sortField === fieldName) {
                $scope.reverse = !$scope.reverse;
              }
              else {
                $scope.sortField = fieldName;
                $scope.reverse = false;
              }
            }

            $scope.isSortUp = function(fieldName) {
              return $scope.sortField === fieldName && !$scope.reverse;
            };

            $scope.isSortDown = function(fieldName) {
              return $scope.sortField === fieldName && $scope.reverse;
            };

        }
        
        ParticipantService.GetAll(success);

        var participant = {
          "firstName": '$scope.firstName',
          "lastName": '$scope.lastName',
          "city": '$scope.city',
          "speciality": '$scope.specialitySel',
          "englishLevel": 'value_engLevel',
          "email": '$scope.email',
          "sent":"2015-12-25","returned":
          "2015-12-26","taken":"done",
          "active":true,
          "image":'null',
          "background":'null'
        }

        var successPost = function (response) {
            alert(response.status);
        }

        $scope.newParticipant = function() {
              ParticipantService.Create(participant, successPost);
            };
        
        

        

    }]);