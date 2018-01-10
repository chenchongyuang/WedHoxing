angular.module('app')
  .controller('ship_adsController',['$scope','$state','$stateParams','API',function($scope,$state,$stateParams,API){
  	  $scope.oPrev=function(){
  	  	window.history.go(-1);
  	  	console.log($stateParams);
  	  };
      $scope.click=function(url){
      	$state.go(url);
      };

      $scope.Add_select=[];
      $scope.address =[];
      API.fetchGet('http://127.0.0.1:9000/ship_ads')
       .then(function(data){
          console.log(data);
       })
       .catch(function(err){
          console.log(err);
       })
  }])