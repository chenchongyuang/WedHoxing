angular.module('app')
  .controller('mine_dataController',['$scope','$ionicPopup','position_modal',function($scope,$ionicPopup,position_modal){
  	$scope.oPrev=function(){
  		window.history.go(-1);
  	}
  	$scope.data = {
	  	wifi:'Pro',
	  	ger:'',
	  	position:'广州',
	  	birthday:'1995.12.15'
	  };
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
	        type: 'button-positive',
	        onTap: function(e) {
	          if (!$scope.data.wifi) {
	              e.preventDefault();
	          } else {
	            return $scope.data.wifi;
	          }
	        }
	      }
	    ]
	  });
	  myPopup.then(function(res) {
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
    
    //模态
    position_modal.initModal($scope);
    $scope.on=function(){
    	position_modal.openModal($scope);
    };
    $scope.off=function(){
    	position_modal.closeModal($scope);
    };
    $scope.aa=function(){
    }
  }])