'use strict';

var App = angular.module('Enroll', ['ui.router', 'ngMaterial']);

App.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/admin');

  $stateProvider
    .state('login',{
      url: '/login',
      templateUrl: 'app/views/login.view.html'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'app/views/admin.view.html'
    })
    .state('admin.create',{
      url: '/create',
      templateUrl: 'app/views/create.view.html'
    });
});