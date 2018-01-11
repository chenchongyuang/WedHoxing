angular.module('app')
   .controller('indexController',['$rootScope','$ionicPopup','$scope',function($rootScope,$ionicPopup,$scope){
   	   $rootScope.userInfo = {
		 	 	phone:'',
		 	 	isLogin:false,
		 	 	uname:'',
        default_addres:'',
        uid:2
		 	 };
       $rootScope.prompt_box=function(name){
          $ionicPopup.show({
                   title:name,
                   scope:$scope,
                   buttons:[{
                    text:'确定',
                    type:'button-balanced'
                  }]
         })
       }
   }])