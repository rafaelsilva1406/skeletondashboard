    var angular = require('angular'),
    uiRouter = require('angular-ui-router'),
    app = angular.module('app', [uiRouter]);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index',{
           url:'',
           templateUrl:'partials/test.html',
           controller:'MainController' 
        });
});
app.controller('MainController', function($scope) {
    $scope.message = 'Live change on reload view!';
});