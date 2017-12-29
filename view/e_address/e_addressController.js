angular.module('app')
  .controller('e_addressController',['$scope','$state','$ionicPopup',function($scope,$state,$ionicPopup){
  	$scope.oPrev=function(){
  		window.history.go(-1);
  	};
  	$scope.e_address=[{
  		txt:'收货人：',
  		value:''
  	},
  	{
  		txt:'手机号：',
  		value:''
    },
    {
    	txt:'省市区：',
    	value:''
    },
    {
    	txt:'详细地址：',
    	value:''
    }];
    //提示框
     $scope.dishi=function(a){
        var myPopup=$ionicPopup.show({
           title:'请输入<strong>'+ a +'</strong>',
           scope:$scope,
           buttons:[{text:'确定'}]
        })
      }
      $scope.reg=/^1[34578]\d{9}$/;
    //---------------------------------
    //提交按钮
    $scope.fasho=function(url){
    	let arr=[];

    	for(let key in $scope.e_address){
    		if($scope.e_address[key].value){
    			arr.push($scope.e_address[key].value);
    		}
    	}
        if(arr.length == 4){
          if($scope.reg.test(arr[1])){
            $state.go(url,{name:$scope.e_address[0].value,phone:$scope.e_address[1].value,address:$scope.e_address[2].value,deta_address:$scope.e_address[3].value});
          }else{
            $scope.dishi('正确的手机号');
          }
        }else{
          let a=null;
          for(let i=0;i<$scope.e_address.length;i++){
              if($scope.e_address[i].value == ''){
                a=$scope.e_address[i].txt;
              }
          }
          $scope.dishi(a);
          }
        }
  }])