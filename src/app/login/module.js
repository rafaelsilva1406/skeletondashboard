(function (root,factory){
    'use strict';
    //check for AMD loader
    if(typeof define === 'function' && define.amd){
       define(['angular'],factory); 
    }else if(typeof exports === 'object'){ //check for Node loader
        module.exports = factory(require('angular'));
    }else{ //all fails load to global angular
        root.returnExports = factory(root.angular);
    }
}(this, function(angular){
    'use strict';
    //create module instance
    var login = angular.module('login',[require('angular-ui-router')]);
    //setup routes
    login.config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('login',{
                url:'/login',
                views:{
                    'header':{
                        templateUrl: 'partials/header.html'
                     },
                     'login':{
                                templateUrl:'partials/login.html'      
                     } 
                },
                controller:'LoginController'
        });
     });
    //invoke controller
    login.controller('LoginController',['$scope',require('./Controllers/IndexController')]);
}));