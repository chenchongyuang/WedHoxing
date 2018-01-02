angular.module('app')
  .factory('tip',['$ionicLoading',function($ionicLoading){
  	return {
	  		  loadTips:{
                   showLoading:function(){
                   	$ionicLoading.show({
                   		template:'<ion-spinner icon="spiral" class="spinner-energized"></ion-spinner>'
                   	})   
                   },
                   hideLoading:function(){
                    $ionicLoading.hide();
                   }
	  	      }
          }
  }])