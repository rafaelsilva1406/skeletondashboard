    var angular = require('angular'),
    uiRouter = require('angular-ui-router'),
    app = angular.module('app', [uiRouter]);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index',{
           url:'',
           views:{
               'header':{
                   templateUrl: 'partials/header.html'
               },
               'login':{
                   templateUrl:'partials/login.html'      
               }
           },
           controller:'IndexController' 
        });
});
app.controller('IndexController', function($scope){
    $scope.master = {};
    $scope.$apply(function(){
       $scope.master.showInput = true; 
    });
    $scope.message = 'Live change on reload!';
});
angular.bootstrap(document, ['app']);