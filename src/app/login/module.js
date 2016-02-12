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
    var login = angular.module('login',['ngStorage','pascalprecht.translate']);
    login.config(function($stateProvider,$urlRouterProvider,$translateProvider,$translatePartialLoaderProvider,showErrorsConfigProvider){
        //setup routes
        $stateProvider
            .state('login',{
                url:'/login',
                views:{
                     '':{
                        templateUrl:'partials/login.html',
                        controller:'LoginController'      
                     } 
                }
        });
        
        //setup language
        $translatePartialLoaderProvider.addPart('login');
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '/language/{part}/locale-{lang}.json'
        });
        $translateProvider.preferredLanguage('en');
        //enable escaping of html
        $translateProvider.useSanitizeValueStrategy('sanitize');
        
        //setup form validation
        showErrorsConfigProvider.showSuccess(true);
     });
     //invoke service
     login.service('UserService',['$localStorage',require('./Services/UserService')]);
    //invoke controller
    login.controller('LoginController',['$scope','UserService',require('./Controllers/IndexController')]);
}));