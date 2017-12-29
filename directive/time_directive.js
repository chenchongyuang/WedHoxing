angular.module('app')
   .directive('ioTime',[function(){
   	  return {
   	  	  restrict:'E',
   	  	  replace:true,
   	  	  templateUrl:'./view/mine_data/time.html',
   	  	  }
   	
   }])