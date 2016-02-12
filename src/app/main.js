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
    //libs
    require('angular-translate');
    require('angular-translate-loader-partial');
    require('ng-storage');
    
    //custom
    require('./core/modules/showerrors/module');
    
    //include module
    require('./dashboard/module');
    require('./login/module');
    
    //create module instance
    var app = angular.module('app', [require('angular-ui-router'),require('angular-sanitize'),'ui.bootstrap.showErrors','dashboard','login']);
    //setup routes
    app.config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    });
    //invoke module to document
    angular.bootstrap(document, ['app']);
 }));
 