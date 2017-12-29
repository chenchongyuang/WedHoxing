angular.module('app')
  .controller('copyrightController',['$scope',function($scope){
  	$scope.oPrev=function(){
  		window.history.go(-1);
  	}
  }])