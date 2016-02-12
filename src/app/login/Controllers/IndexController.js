module.exports = function($scope,UserService){
    $scope.defaults = {};
    $scope.user = {};
    
    if(!$scope.$$phase){ //fix for multiple digest or apply instance
        $scope.$apply(function(){
            $scope.defaults.showInput = false; 
        });
    }
    
    $scope.validate = function(user){
        $scope.$broadcast('show-errors-check-validity');

        if ($scope.loginForm.$valid){
            console.log(user);
        }
    };
    
    $scope.reset = function(){
        $scope.$broadcast('show-errors-reset');
        
        if(Object.keys($scope.user).length >= 0){
            $scope.user = {};    
        }
        
    };
    
    console.log(UserService.getStatus());
};