angular.module('app')
   .controller('registeredController',['$scope','API','$ionicPopup',function($scope,API,$ionicPopup){
        $scope.code='';
       $scope.getCode =function(){
       	console.log(1);
       	

       	if($scope.phone.length < 11 && $scope.phone != '' ){
       			$scope.prompt_box('手机长度不正确');
       			return '手机长度不正确';
       		}else if($scope.phone.length == 0){
       			$scope.prompt_box('手机号码不能为空');
       			return 	'手机号码不能为空';
       		}
       		else if(!$scope.reg.test($scope.phone)){
                $scope.prompt_box('请输入有效手机号码');
                return 	'请输入有效手机号码';
       		}else{
       			 
		       		API.fetchGet('http://127.0.0.1:9000/message')
			       	.then((function(data){
                console.log(data);
			       		$scope.code=data.data.code;
			       		console.log($scope.code);
			       		
			       	}))
       		}
       } 
       $scope.phone=''; 
       $scope.name_length='';
       $scope.reg = /^1[35678]\d{9}$/;
       $scope.pwd='';
      
       $scope.code_value='';
       
       $scope.prompt_box=function(name){
	       	$ionicPopup.show({
	       	         title:name,
				       	   scope:$scope,
				       	   buttons:[{text:'确定'}]
	       })
       }
       
       	  
      

       $scope.get_fn=function(){
             let a = 0;
            if($scope.phone.length < 11 && $scope.phone != '' ){
       			$scope.prompt_box('手机长度不正确');
       			return '手机长度不正确';
       		}else if($scope.phone.length == 0){
       			$scope.prompt_box('手机号码不能为空');
       			return 	'手机号码不能为空';
       		}
       		else if(!$scope.reg.test($scope.phone)){
                $scope.prompt_box('请输入有效手机号码');
                return 	'请输入有效手机号码';
       		}

       		if($scope.name_length.length >13){
       			$scope.prompt_box('昵称必须在1-13个字');
                return '昵称必须在1-13个字';
       		}else if($scope.name_length.length == 0){
       			$scope.prompt_box('昵称不能为空');
                return '昵称不能为空';
       		}

       		if($scope.pwd.length > 13 || $scope.pwd.length < 6 && $scope.pwd.length != 0){
       			$scope.prompt_box('密码必须在1-13个字');
       			return '密码必须在1-13个字';
       		}else if($scope.pwd.length == 0){
       			$scope.prompt_box('密码不能为空');
       			return '密码不能为空';
       		}
       		if($scope.code_value.length == 0){
		             $scope.prompt_box('验证码不能为空');
		             return '验证码不能为空';
		       		}else if($scope.code_value != $scope.code){
		       			 console.log($scope.code);
		             $scope.prompt_box('验证码不正确');
		             return '验证码不正确';
		       		}

            $scope.prompt_box('注册成功');
            return '注册成功';
       	}
   }])