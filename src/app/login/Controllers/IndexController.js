module.exports = function($scope,UserService){
    $scope.master = {};
    if(!$scope.$$phase){ //fix for multiple digest or apply instance
        $scope.$apply(function(){
            $scope.master.showInput = false; 
        });
    }
    $scope.message = 'Live change on reload!';
    console.log(UserService.getStatus());
};