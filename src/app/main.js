 (function(root,factory){
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
    //include module
    require('./dashboard/module');
    //include module
    require('./login/module');
    
    //create module instance
    var app = angular.module('app', ['dashboard','login',require('angular-ui-router')]);
    //setup routes
    app.config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    });
    //invoke module to document
    angular.bootstrap(document, ['app']);
 }));