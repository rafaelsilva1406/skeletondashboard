module.exports = function($localStorage){
  var remember = false,
      status = false;
      
  this.getRemember = function(){
      return remember;
  };
  this.setRemember = function(bool){
      remember = bool;
  }
  this.getStatus = function(){
      return $localStorage.userStatus;
  };
  this.setStatus = function(bool){
      $localStorage.userStatus = bool;
  };
};