angular.module('app')
  .controller('serviceController',['$scope',function($scope){
  	  $scope.oPrev=function(){
  	  	window.history.go(-1);
  	  }
  }])