'use strict';

var app = angular.module('app', ['ngRoute','ngResource', 'ngCookies', 'ui.router', 'ui.bootstrap']);
var currentUser;
app
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  	$urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('admin', {
            url: '/dashboard/:dataTable',

            views: {
                '': {
                    templateUrl: 'template/admin.html',
                    controller: 'UserController'
                },
                'content@admin': {
                    templateUrl: 'template/data.html'
                    // controller: 'DataCtrl'
                }
            }
        })
    	.state('login', {
            url: '/login',
            templateUrl: 'template/login.html',
            controller: 'LoginController'
        })
        .state('charts', {
            url: '/charts',
            // templateUrl: 'template/charts.html',
            // controller: 'DataCtrl'
            views: {
                '': {
                    templateUrl: 'template/admin.html',
                    controller: 'UserController'
                },
                'content@admin': {
                    templateUrl: 'template/data.html'
                    // controller: 'DataCtrl'
                }
            }
        })
        .state('workspace', {
            url: '/workspace',
            templateUrl: 'template/workspace.html',
            controller: 'DataCtrl'
        });
  }
])
  .run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);