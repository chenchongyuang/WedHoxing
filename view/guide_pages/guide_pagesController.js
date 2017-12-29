angular.module('app')
  .controller('guide_pagesController',['$scope','$location',function($scope,$location){
  	$scope.click=function(url){
  		$location.path(url);
  	};
  	$scope.page=['./img/page1.png','./img/page2.png','./img/page3.png','./img/page4.png'];
  }])