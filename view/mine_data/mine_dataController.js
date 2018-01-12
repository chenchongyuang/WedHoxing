angular.module('app')
  .controller('mine_dataController',['$scope','$ionicPopup','API','$rootScope',function($scope,$ionicPopup,API,$rootScope){
  	$scope.oPrev=function(){
  		API.fetchGet('http://127.0.0.1:9000/mine_data',{obj:$scope.data,val1:'u_address',val2:'uname',val3:'ger'})
        	.then(function(data){
        		console.log(data);
        	})
        	.catch(function(err){
        		console.log(err);
        	})
  		window.history.go(-1);
  	}
  	$scope.data = {
	  	uname:$rootScope.userInfo.uname,
	  	ger:$rootScope.userInfo.ger,
	  	u_address:$rootScope.userInfo.default_address,
	  	uid:$rootScope.userInfo.uid
	  };
		 //修改昵称弹框
	  	$scope.name = function() {
			  var myPopup = $ionicPopup.show({
			    template: '<input type="text" ng-model="data.uname" >',
			    title: '请输入昵称',
			    scope:$scope,
			    buttons: [
			      { text: '取消' },
			      {
			        text: '<b>确定</b>',
			        type: 'button-positive',
			        onTap:function(){
			        	/*API.fetchGet('http://127.0.0.1:9000/mine_data',{obj:$scope.data,val:'uname'})
			        	.then(function(data){
			        		console.log(data);
			        	})
			        	.catch(function(err){
			        		console.log(err);
			        	})*/
			        }
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
	         /* API.fetchGet('http://127.0.0.1:9000/mine_data',{obj:$scope.data,val:'ger'})
	        	.then(function(data){
	        		console.log(data);
	        	})
	        	.catch(function(err){
	        		console.log(err);
	        	})*/
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