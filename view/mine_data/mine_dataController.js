angular.module('app')
  .controller('mine_dataController',['$scope','$ionicPopup','API','$rootScope',function($scope,$ionicPopup,API,$rootScope){
  	$scope.oPrev=function(){
  		window.history.go(-1);
  	}

  	console.log($rootScope.userInfo);
  	
  	$scope.data = {
	  	wifi:$rootScope.userInfo.uname,
	  	ger:'',
	  	position:'广州',
	  	birthday:'1995.12.15'
	  };
     // $scope.data.wifi=$rootScope.userInfo.uname;
     console.log($scope.data.wifi);
	   
		 //修改昵称弹框
	  	$scope.name = function() {
  	  // 自定义弹窗
			  var myPopup = $ionicPopup.show({
			    template: '<input type="text" ng-model="data.wifi" >',
			    title: '请输入昵称',
			    scope:$scope,
			    buttons: [
			      { text: '取消' },
			      {
			        text: '<b>确定</b>',
			        type: 'button-positive'
			      }
			    ]
			  });
			 
			 };
    //修改性别弹框
    $scope.ger = function() {
  	  // 自定义弹窗
	  var myPopup = $ionicPopup.show({
	    title: '请选择性别',
	    scope:$scope,
	    buttons: [
	      { text: '<b>男</b>' ,
	        type: 'button-positive',
            onTap: function(e) {
	          $scope.data.ger='男';
	        }
	         },
	      {
	        text: '<b>女</b>',
	        type: 'button-assertive',
	        onTap: function(e) {
	          $scope.data.ger='女';
	        }
	      }
	    ]
	  });
	  myPopup.then(function(res) {
	  });
	 };

  }])