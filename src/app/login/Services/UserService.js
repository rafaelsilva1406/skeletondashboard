module.exports = function(){
  var status = false;
  this.getStatus = function(){
      return status;
  };
  this.setStatus = function(bool){
      status = bool;
  }; 
};