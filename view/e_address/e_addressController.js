angular.module('app')
  .controller('e_addressController',['$scope','$state','$ionicPopup','API','$rootScope',function($scope,$state,$ionicPopup,API,$rootScope){
  	//返回上一页
    $scope.e_address_value = ['','','',''];
    $scope.oPrev=function(){
  		window.history.go(-1);
  	};

  	$scope.e_address=[{
  		txt:'收货人：'
  	},
  	{
  		txt:'手机号：'
    },
    {
    	txt:'省市区：'
    },
    {
    	txt:'详细地址：'
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
    //提交地址按钮,向后台t_address表插入地址数据
    
    $scope.fasho=function(){

      $scope.obj={
        uname:$rootScope.userInfo.uname,
        aname:$scope.e_address_value[0],
        aphone:$scope.e_address_value[1],
        area:$scope.e_address_value[2],
        detailed_area:$scope.e_address_value[3],
        uphone:$rootScope.userInfo.phone
      }
      if ($scope.e_address_value[0] == '') {
           $scope.dishi('请输入收货人姓名');
      }else if($scope.e_address_value[1] == ''){
           $scope.dishi('请输入收货人手机号码');
      }else if(!$scope.reg.test($scope.e_address_value[1])){
           $scope.dishi('请输入正确手机号码');
      }else if($scope.e_address_value[2] == ''){
           $scope.dishi('请输入省市区');
      }else if($scope.e_address_value[3] == ''){
           $scope.dishi('请输入详细地址');
      }else{
            API.fetchGet('http://127.0.0.1:9000/address',$scope.obj)
              .then(function(data){
                 $state.go('ship_ads');
              })
              .catch(function(err){
                console.log(err);
              })
              }
        }
  }])