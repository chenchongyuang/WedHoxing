angular.module('app')
   .controller('registeredController',['$scope','API','$ionicPopup','formatTime','tip','$state','$interval',function($scope,API,$ionicPopup,formatTime,tip,$state,$interval){
        $scope.arr={
          phone:'',
          name_length:'',
          pwd:'',
          code:'',
          code_value:'',
          Time:'',
          Countdown:90,
          disabled:false,
          index:false
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

       //获取验证码
       $scope.getCode =function(){

         	if($scope.arr.phone.length < 11 && $scope.arr.phone != '' ){
         			$scope.prompt_box('手机长度不正确');
         			return '手机长度不正确';
         		}else if($scope.arr.phone.length == 0){
         			$scope.prompt_box('手机号码不能为空');
         			return 	'手机号码不能为空';
         		}
         		else if(!$scope.reg.test($scope.arr.phone)){
                  $scope.prompt_box('请输入有效手机号码');
                  return 	'请输入有效手机号码';
         		}else{
                  tip.loadTips.showLoading();
    		       		API.fetchPost('http://127.0.0.1:9000/message',{phone:$scope.arr.phone})
    			       	.then((function(data){
    			       		$scope.code=data.data.code;
                    console.log(data);
                    $scope.arr.disabled=true;
                    tip.loadTips.hideLoading();
                     $scope.Countdown_fn();
    			       	}))
           		}
            } 

       //验证码倒计时90秒
       $scope.Countdown_fn=function(){
            $interval.cancel(Time);
            var Time = $interval(function(){
               if($scope.arr.Countdown == 0 ){
                  $scope.arr.disabled=false;
                  $scope.arr.Countdown=90;
                  $interval.cancel(Time); 
                  $scope.code ='';
               }else{
                $scope.arr.Countdown=$scope.arr.Countdown-1;
               }
            },1000);    
       }
       //注册按钮验证
       $scope.get_fn=function(){


                  let a = 0;
                  if($scope.arr.phone.length < 11 && $scope.arr.phone != '' ){
               			$scope.prompt_box('手机长度不正确');
               			return '手机长度不正确';
               		}else if($scope.arr.phone.length == 0){
               			$scope.prompt_box('手机号码不能为空');
               			return 	'手机号码不能为空';
               		}
               		else if(!$scope.reg.test($scope.arr.phone)){
                        $scope.prompt_box('请输入有效手机号码');
                        return 	'请输入有效手机号码';
               		}

               		if($scope.arr.name_length.length >13){
               			$scope.prompt_box('昵称必须在1-13个字');
                        return '昵称必须在1-13个字';
               		}else if($scope.arr.name_length.length == 0){
               			$scope.prompt_box('昵称不能为空');
                        return '昵称不能为空';
               		}

               		if($scope.arr.pwd.length > 13 || $scope.arr.pwd.length < 6 && $scope.arr.pwd.length != 0){
               			$scope.prompt_box('密码必须在1-13个字');
               			return '密码必须在1-13个字';
               		}else if($scope.arr.pwd.length == 0){
               			$scope.prompt_box('密码不能为空');
               			return '密码不能为空';
               		}
               		if($scope.arr.code_value.length == 0){
        		             $scope.prompt_box('验证码不能为空');
        		             return '验证码不能为空';
        		       		}else if($scope.arr.code_value != $scope.code){
        		             $scope.prompt_box('验证码不正确');
        		             return '验证码不正确';
        		       		}
                  
                    $scope.arr.Time=formatTime.format(new Date(),'yyyy-MM-dd hh:mm:ss');
                    tip.loadTips.showLoading();
                    API.fetchPost('http://127.0.0.1:9000/register',$scope.arr)
                     .then((function(data){
                      console.log(data);
                      if(data.data.statusCode == 201){
                        $scope.prompt_box(data.data.msg);
                      }else if(data.data.statusCode == 255){
                        $scope.prompt_box(data.data.msg);
                      }else if(data.data.statusCode == 200){
                        $state.go('login');
                      }
                     tip.loadTips.hideLoading();
                     }))
                     .catch(function (err) {
                      console.log(err);
                      tip.loadTips.hideLoading();
                    })

                  
                  return '注册成功';
            }
   }])