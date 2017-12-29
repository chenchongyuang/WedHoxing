angular.module('app')
  .controller('setController',['$scope','$location',function($scope,$location){
         $scope.title='设置';
         $scope.txt=['关于商城','清除缓存','23.2MB','退出登录'];
         $scope.icon=['icon ion-ios-arrow-left','icon ion-ios-arrow-right'];
         $scope.click=function(url){
             $location.path(url);
         };
         $scope.oPrev=function(){
         	window.history.go(-1);
         }
  }])