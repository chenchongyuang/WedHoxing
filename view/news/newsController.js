angular.module('app')
  .controller('newsController',['$scope','$ionicSlideBoxDelegate','$rootScope',function($scope,$ionicSlideBoxDelegate,$rootScope){
  	
      $scope.slide={
        showPager:false
      }
  	  $scope.news_title=['交易物流','通知','互动'];
  	  $scope.aIndex=0;
  	  $scope.index_click=function(index){
  	  	$scope.aIndex=index;
        $ionicSlideBoxDelegate.slide($scope.aIndex);
  	  }
  }])