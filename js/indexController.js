angular.module('app')
   .controller('indexController',['$rootScope',function($rootScope){
   	   $rootScope.userInfo = {
		 	 	phone:'',
		 	 	isLogin:false,
		 	 	uname:''
		 	 };
       $rootScope.aa='aa';
   }])