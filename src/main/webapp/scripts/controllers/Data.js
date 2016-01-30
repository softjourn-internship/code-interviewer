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
        }

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
    

    $scope.clearFields = function() {
        $scope.firstName = null;
        $scope.lastName = null;
        $scope.city = null;
        $scope.email = null;
      };
      var current_id = null;
      $scope.currentItem = function(itemId, edit) {
        var url = 'api/participants/' + itemId;

        $http.get(url).success(function(data) {
          $scope.itemId = data.participantId;
          current_id = data.participantId;
          $scope.userName = data.username;
          $scope.firstName = data.firstName;
          $scope.lastName = data.lastName;
          $scope.city = data.city;
          titleSelect($scope.englishLevel, 'engLevel', false);
          titleSelect($scope.speciality, 'speciality', false);
          $scope.email = data.email;
          $scope.image = data.image;
        });

        if (edit) {$("div.send-test").fadeIn("fast"); $('div.box-item-info').hide();}
      }

    var validation = false;
    $scope.validationInput = function (id, pattern) {

      var text = document.getElementById(id).value;

      if (pattern.test(text) && text !== null) {$('input#' + id).css('border-color','#AEC785'); return true;}
      else {
        // $scope.firstName = $scope.firstName.replace(/[0-9]/g, '');
        $('input#' + id).css('border-color','#FA8564');
        $('input#' + id).focus();
        return false;
      }
    }

    notification = function(message) {
      $('div#notifPart').html('<div class="notification">' + message + '</div>');
      $(this).data('timeout', setTimeout( function () {
        $('div.notification').fadeIn('fast');
      }, 500));
      $(this).data('timeout', setTimeout( function () {
        $('div.notification').fadeOut();
      }, 2500));
    }

    $scope.validationSelect = function (id, value, failedValue) {

      if (value !== failedValue) {$('span#' + id).css('border-color','#AEC785'); return true;}
      else {
        $('span#' + id).css('border-color','#FA8564');
        return false;
      }
    }

    $scope.validation = function () {
      var valid_firstName = $scope.validationInput('firstName', /^[_a-zA-Zа-яА-Я ]+$/);
      var valid_lastName = $scope.validationInput('lastName', /^[_a-zA-Zа-яА-Я ]+$/);
      var valid_city = $scope.validationInput('city', /^[_a-zA-Zа-яА-Я ]+$/);
      var valid_value_engLevel = $scope.validationSelect('selectengLevel', value_engLevel, 'Select engLevel');
      var valid_value_speciality = $scope.validationSelect('selectspeciality', value_speciality, 'Select speciality');
      var valid_email = $scope.validationInput('email', /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/);

      if(valid_firstName && valid_lastName && valid_city && valid_value_engLevel && valid_value_speciality && valid_email) validation = true;
      else validation = false;
    }

    $scope.sumbit = function () {
      $scope.validation();
      var data;
      if (validation) {
        data = {
          "firstName": $scope.firstName,
          "lastName": $scope.lastName,
          "city": $scope.city,
          "speciality": value_speciality,
          "englishLevel": value_engLevel,
          "email": $scope.email,
          "sent":"2015-12-25","returned":
          "2015-12-26","taken":"done",
          "active":true,
          "image":null,
          "background":null
        }

        $http.post("/api/participants", data).success(function (data, status, headers){
          $("div.send-test").fadeOut("fast");
          notification('<b>' + $scope.firstName + ' ' + $scope.lastName + '</b> has been added');
        });
      }
    }
    });
  }]);