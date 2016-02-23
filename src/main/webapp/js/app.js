'use strict';

var app = angular.module('app', ['ngRoute','ngResource', 'ngCookies', 'ngDialog', 'ngAnimate', 'ui.router', 'ui.bootstrap', 'chart.js','pascalprecht.translate','summernote']);
var currentUser;
app
  .config(['$stateProvider', '$urlRouterProvider','$translateProvider', function ($stateProvider, $urlRouterProvider,$translateProvider,$http) {

  	$urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('admin', {
            templateUrl: 'template/admin.html',
            controller: 'UserController'
        })
        .state('admin.dashboard', {
            url: '/dashboard',
            templateUrl: 'template/admin.html',
            views: {
                '': {
                    templateUrl: 'template/dashboard.html',
                    controller: 'DashboardCtrl'
                }
            }
        })
        .state('admin.users', {
            url: '/users',
            templateUrl: 'template/admin.html',
            views: {
                '': {
                    templateUrl: 'template/dashboard.html'
                }
            }
        })
        .state('admin.analytics', {
            url: '/analytics',
            templateUrl: 'template/admin.html',
            views: {
                '': {
                     templateUrl: 'template/analytics.html',
                     controller: 'AnalyticsCtrl'
                }
            }
        })
        .state('admin.profile', {
            url: '/profile/:accId',
            templateUrl: 'template/charts.html',
            views: {
                '': {
                    templateUrl: 'js/modules/profile/profile.template.html',
                    controller: 'ProfileCtrl'
                }
            }
        })
        .state('admin.tasks', {
            url: '/tasks',
            templateUrl: 'template/tasks.html',
            views: {
                '': {
                    templateUrl: 'template/tasks.html',
                    controller: 'TasksCtrl'
                }
            }
        })
    	   .state('login', {
            url: '/login',
            templateUrl: 'js/modules/login/login.template.html',
            controller: 'LoginController'
        })
        .state('workspace', {
            url: '/workspace',
            templateUrl: 'template/workspace.html',
            controller: 'DataCtrl'
        });

        $translateProvider.useStaticFilesLoader({
            prefix: '/lang/',
            suffix: '.json'
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
