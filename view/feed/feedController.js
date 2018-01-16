angular.module('app')
  .controller('feedController',['$scope','$rootScope',function($scope,$rootScope){
  	$scope.icon=['icon ion-ios-arrow-left','icon ion-ios-arrow-right'];
  	
  	$scope.feed=[{
          problem:'功能异常',
          feed_txt:'不能正常使用现有功能'
  	},
  	{
          problem:'使用建议',
          feed_txt:'用的不满意的地方都提过来吧'
  	},
  	{
          problem:'功能需求',
          feed_txt:'现有功能不能满足'
  	},
  	{
          problem:'系统闪退',
          feed_txt:'APP意外退出，闪退'
  	}];
  }])