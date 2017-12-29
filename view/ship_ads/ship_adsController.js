angular.module('app')
  .controller('ship_adsController',['$scope','$state','$stateParams',function($scope,$state,$stateParams){
  	  $scope.oPrev=function(){
  	  	window.history.go(-1);
  	  	console.log($stateParams);
  	  };
      $scope.click=function(url){
      	$state.go(url);
      };

      $scope.Add_select=[];
      $scope.plus=function(){
      	let arr=[];
      	for(key in $stateParams){
      		if($stateParams[key]){
      			arr.push(key);
      		}
      	}
      	if(arr.length >= 4){
      		let obj=$stateParams;
          $scope.Add_select.push(obj);
          console.log($scope.Add_select);
      	}
      }
      $scope.plus();
  }])