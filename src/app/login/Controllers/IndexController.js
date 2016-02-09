module.exports = function($scope){
    $scope.master = {};
    $scope.$apply(function(){
       $scope.master.showInput = false; 
    });
    $scope.message = 'Live change on reload!';
};