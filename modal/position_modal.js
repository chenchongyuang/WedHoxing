angular.module('app')
  .factory('position_modal',['$ionicModal',function($ionicModal){

  	  return {

  	  	initModal:function(scope){
            $ionicModal.fromTemplateUrl('./view/mine_data/position.html',{
            	scope:scope,
            	animation:'slide-in-up'
            }).then(function(m){
            	scope.m = m;
            })
  	  	},
  	  	openModal:function(scope){
  	  		scope.m.show();
  	  	},
  	  	closeModal:function(scope){
  	  		scope.m.hide();
  	  	}
  	  };
  }])

  