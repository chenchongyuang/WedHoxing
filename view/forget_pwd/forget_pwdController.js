angular.module('app')
   .controller('forget_pwdController',['$scope','API','$state','$rootScope','tip',function($scope,API,$state,$rootScope,tip){
   	   $scope.forget_pwd={
   	   	  phone:'',
   	   	  pwd:'',
   	   	  forget_pwd:'',
   	   	  code1:'',
          code2:''
   	   };
       $scope.reg=/^1[35678]\d{9}$/;
       //获取验证码
   	   $scope.obtain_code=function(){
   	   	  if( $scope.forget_pwd.phone == ''){
              $rootScope.prompt_box('手机号不能为空');
              return false;
   	   	  }else if(!$scope.reg.test($scope.forget_pwd.phone)){
   	   	  	  $rootScope.prompt_box('请输入正确的手机号码');
   	   	  	  return false;
   	   	  }else{
   	   	  	tip.loadTips.showLoading();
   	   	  	API.fetchPost('http://127.0.0.1:9000/message')
   	   	  	  .then(function(data){
   	   	  	  	tip.loadTips.hideLoading();
   	   	  	  	$scope.forget_pwd.code1 = data.data.code;
   	   	  	  	  console.log(data);
   	   	  	  })
   	   	  	  .catch(function(err){
   	   	  	  	tip.loadTips.hideLoading();
   	   	  	  	console.log(err);
   	   	  	  })
   	   	  	  return true;
   	   	  }
   	   }
       //修改密码
   	   $scope.obtain=function(){
   	   	   if($scope.forget_pwd.phone == ''){
	   	   	   	$rootScope.prompt_box('手机号不能为空');
	   	   	   	return false;
   	   	   }else if(!$scope.reg.test($scope.forget_pwd.phone)){
   	   	   	  $rootScope.prompt_box('请输入正确的手机号码');
   	   	  	  return false;
   	   	   }else if($scope.forget_pwd.code2 == ''){
              $rootScope.prompt_box('请输入验证码');
   	   	  	  return false;
   	   	   }else if($scope.forget_pwd.code2 != $scope.forget_pwd.code1){
              $rootScope.prompt_box('验证码不正确');
   	   	  	  return false;
   	   	   }else if($scope.forget_pwd.pwd == ''){
              $rootScope.prompt_box('填写新密码');
   	   	  	  return false;
   	   	   }else if($scope.forget_pwd.pwd.length >16 && $scope.forget_pwd.pwd.length < 6 ){
              $rootScope.prompt_box('密码须在6到16位数');
   	   	  	  return false;
   	   	   }else if($scope.forget_pwd.forget_pwd == '' ){
              $rootScope.prompt_box('请再次输入密码');
   	   	  	  return false;
   	   	   }else if($scope.forget_pwd.pwd != $scope.forget_pwd.forget_pwd ){
              $rootScope.prompt_box('两次密码不一致');
   	   	  	  return false;
   	   	   }else{
   	   	   	 tip.loadTips.showLoading();
             API.fetchPost('http://127.0.0.1:9000/forget_pwd',$scope.forget_pwd)
              .then(function(data){
              	 tip.loadTips.hideLoading();
              	 $rootScope.prompt_box(data.data);
                  $state.go('login');
              })
              .catch(function(err){
              	 tip.loadTips.hideLoading();
              	 
              	 console.log(err);
              })
   	   	   }
   	   }
   }])