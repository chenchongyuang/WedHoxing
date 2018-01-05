angular.module('app')
   .config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider ){

	  $ionicConfigProvider.platform.android.tabs.style('standard');
	  $ionicConfigProvider.platform.android.tabs.position('standard');


	  $ionicConfigProvider.platform.android.navBar.alignTitle('left');

	  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

	  $ionicConfigProvider.platform.android.views.transition('android');
   })
   .config(["$httpProvider", function ($httpProvider) {
　　//更改 Content-Type
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
    $httpProvider.defaults.headers.post["Accept"] = "*/*";
    $httpProvider.defaults.transformRequest = function (data) { 
    //把JSON数据转换成字符串形式
      if (data !== undefined) { 
        return $.param(data);
      }
        return data;
      };
  }])