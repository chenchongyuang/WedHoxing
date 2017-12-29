angular.module('app')
   .config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider ){

	  $ionicConfigProvider.platform.android.tabs.style('standard');
	  $ionicConfigProvider.platform.android.tabs.position('standard');


	  $ionicConfigProvider.platform.android.navBar.alignTitle('left');

	  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

	  $ionicConfigProvider.platform.android.views.transition('android');
   })