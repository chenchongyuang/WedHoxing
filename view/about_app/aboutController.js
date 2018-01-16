angular.module('app')
  .controller('aboutController',['$scope','$location','$rootScope',function($scope,$location,$rootScope){
  	  
       $scope.click=function(url){
         $location.path(url);
       }
  	  $scope.txt=['关于商城','红星品牌商城 4.1.0801r1']
  	  $scope.img=['./img/login-logo.png'];
  	  $scope.icon=['icon ion-ios-arrow-left','icon ion-ios-arrow-right'];
  	  $scope.about=[{
             txt:'检查更新',
             url:''
  	  },
  	  {
             txt:'版权信息',
             url:'copyright'
  	  }];

  }])