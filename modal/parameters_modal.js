angular.module('app')
  .factory('parameters_modal',['$ionicModal',function($ionicModal){

  	   return {

        initModal:function(scope){
          $ionicModal.fromTemplateUrl('./view/product_deta/parameters.html',{
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