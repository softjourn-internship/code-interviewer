adminPanelApp.controller('DataCtrl', ['$scope', '$http', '$location','$routeParams', '$stateParams',
  function ($scope, $http, $location, $routeParams, $stateParams) {

        $scope.dataTable = $stateParams.dataTable;
        var url = 'api/'+$stateParams.dataTable;

        $http.get('data/chart-pie-'+$stateParams.dataTable+'.json').success(function(data) {
          $scope.chartPieData = data;
        });

        $http.get(url).success(function(data) {
          $scope.dataTableList = data;

        $scope.titleTable = $scope.dataTable;

        // Sort
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
        };

        $scope.isSortUp = function(fieldName) {
          return $scope.sortField === fieldName && !$scope.reverse;
        };

        $scope.isSortDown = function(fieldName) {
          return $scope.sortField === fieldName && $scope.reverse;
        };

        if ($scope.dataTable == 'participants') {
            $scope.selectTakenVisible = true;
            $scope.selectRoleVisible = false;
        }
        if ($scope.dataTable == 'users') {
            $scope.selectTakenVisible = false;
            $scope.selectRoleVisible = true;
        }

        $scope.pageSizes = [5, 10, 15, 20];
        $scope.pageSize = $scope.pageSizes[1];
        $scope.currentPage = 0;
        $scope.pageNumber = Math.ceil($scope.dataTableList.length / $scope.pageSize);

        $scope.paging = function (type) {
          if (type == 0 && $scope.currentPage > 0) {
            --$scope.currentPage;
            document.getElementById("currentPage").style.color = "#222";
          }
          else if (type == 1 && $scope.currentPage < $scope.pageNumber-1){
            ++$scope.currentPage;
            document.getElementById("currentPage").style.color = "#222";
          }
      }

      $scope.changeAction = function () {
          $scope.currentPage = 0;
          $scope.pageNumber = Math.ceil($scope.dataTableList.length / $scope.pageSize);
      }

      $scope.changeActionFilter = function () {
          $scope.currentPage = 0;
          $scope.pageNumber = Math.ceil($scope.lengthClientsPA.length / $scope.pageSize);
          alert($scope.pageNumber+"\n"+$scope.lengthClientsPA.length+"\n"+$scope.pageSize);
      }
    });

    $scope.clearFields = function() {
        $scope.firstName = null;
        $scope.lastName = null;
        $scope.city = null;
        $scope.email = null;
      };

      $scope.currentItem = function(itemId, edit) {
        var url = 'api/participants/' + itemId;

        $http.get(url).success(function(data) {
          $scope.itemId = data.participantId;
          $scope.firstName = data.firstName;
          $scope.lastName = data.lastName;
          $scope.city = data.city;
          $scope.email = data.email;
          $scope.image = data.image;
        });

        if (edit) {$("div.send-test").fadeIn("fast"); $('div.box-item-info').hide();}
      }

    var validation = false;
    $scope.validationInput = function (id, pattern) {

      var text = document.getElementById(id).value;

      if (pattern.test(text) && text !== null) {$('input#' + id).css('border-color','#AEC785'); validation = true;}
      else {
        // $scope.firstName = $scope.firstName.replace(/[0-9]/g, '');
        $('input#' + id).css('border-color','#FA8564');
        $('input#' + id).focus();
        validation = false;
      }
    }

    $scope.validationSelect = function (id, value, failedValue) {

      if (value !== failedValue) {$('span#' + id).css('border-color','#AEC785'); validation = true;}
      else {
        $('span#' + id).css('border-color','#FA8564');
        validation = false;
      }
    }

    $scope.validation = function () {
      $scope.validationInput('firstName', /^[_a-zA-Zа-яА-Я ]+$/);
      $scope.validationInput('lastName', /^[_a-zA-Zа-яА-Я ]+$/);
      $scope.validationInput('city', /^[_a-zA-Zа-яА-Я ]+$/);
      $scope.validationSelect('selectengLevel', value_engLevel, 'Select engLevel');
      $scope.validationSelect('selectspeciality', value_speciality, 'Select speciality');
      $scope.validationInput('email', /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/);
    }

    $scope.sumbit = function () {
      $scope.validation();

      if (validation) {
        alert('Sent');
      }
    }
  }]);