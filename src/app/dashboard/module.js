(function(root, factory){
    'use strict';
    //check for AMD loader
    if(typeof define === 'function' && define.amd){
       define(['angular'],factory); 
    }else if(typeof exports === 'object'){ //check for Node loader
        module.exports = factory(require('angular'));
    }else{ //all fails load to global angular
        root.returnExports = factory(root.angular);
    }
}(this, function (angular){
    'use strict';
    //create module instance
    var dashboard = angular.module('dashboard',[require('angular-ui-router')]);
    //setup routes
    dashboard.config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('index',{
                url:'',
                views:{
                    '':{
                        templateUrl: 'partials/dashboard.html',
                        controller:'DashboardController'
                    }
                }, 
        });
    });
    //invoke controller
    dashboard.controller('DashboardController',['$scope',require('./Controllers/IndexController')]);
}));