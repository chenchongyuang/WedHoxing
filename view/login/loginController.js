angular.module('app')
 .controller('loginController',['$scope','$http','API','tip','$state','$ionicPopup','$rootScope',function($scope,$http,API,tip,$state,$ionicPopup,$rootScope){
     
     //跳转页面
     $scope.click=function(url){
         $state.go(url);
     }
     $scope.login={
	     	phone:'',
	     	pwd:''
	     }
     $scope.reg = /^1[35678]\d{9}$/;
      //提示框
     $scope.prompt_box=function(name){
        $ionicPopup.show({
                 title:name,
                 scope:$scope,
                 buttons:[{text:'确定'}]
       })
     }
     $scope.verification=function(){
	     	if($scope.login.phone == '' ){
	              $scope.prompt_box('请输入账号');
	              return false;
	     	}else if(!$scope.reg.test($scope.login.phone)){
	     		      $scope.prompt_box('账号错误');
	     		      return false;
	     	}else if($scope.login.pwd == ''){
                $scope.prompt_box('请输入密码');
                return false;
	     	}else{
	     		     tip.loadTips.showLoading();
		     		   API.fetchPost('http://127.0.0.1:9000/login',$scope.login)
				           .then((function(data){
				                if(data.data.statusCode == 201){
				                	tip.loadTips.hideLoading();
				                	$scope.prompt_box(data.data.msg);
				                }else if(data.data.statusCode == 255){
				                	tip.loadTips.hideLoading();
				                	$scope.prompt_box(data.data.msg);
				                }else if(data.data.statusCode == 200){
				                	$rootScope.userInfo.phone = data.data.phone;
				                	$rootScope.userInfo.uname = data.data.uname;
				                	$rootScope.userInfo.default_address = data.data.default_address;
				                	$rootScope.userInfo.ger = data.data.ger;
				                	$rootScope.userInfo.uid = data.data.uid;
				                	$rootScope.userInfo.isLogin = true;
				                	console.log(data);
				                	tip.loadTips.hideLoading();
				                	$state.go('layout.home');
				                }
				           }))
				           .catch(function(err){
				           	   $scope.prompt_box('登陆失败');
				           })
	     	}
     }
}])