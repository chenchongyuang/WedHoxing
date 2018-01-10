angular.module('app')
  .controller('ship_adsController',['$scope','$state','$stateParams','API','$rootScope',function($scope,$state,$stateParams,API,$rootScope){
  	  $scope.Add_select=[];
      $scope.address =[];
      //返回上一页
      $scope.oPrev=function(){
  	  	window.history.go(-1);
  	  	console.log($stateParams);
  	  };
      //页面跳转
      $scope.click=function(url){
      	$state.go(url);
      };
      //勾选按钮
      $scope.chengaa=function(index){
           for(let i=0;i<$scope.address.length;i++){
              if( i != index ){
                 $scope.address[i] = false;
              }
           }
      }
     
      //向后台发送请求,查询地址信息
      API.fetchGet('http://127.0.0.1:9000/ship_ads')
       .then(function(data){
        $scope.Add_select = data.data;
           for(let i=0;i<$scope.Add_select.length;i++){
              $scope.address.push(false);
           }
          console.log($scope.address);
       })
       .catch(function(err){
          console.log(err);
       })
       //确定选择地址
       $scope.deta=function(){
        let arr=[];
           for(let i=0;i<$scope.address.length;i++){
              if ($scope.address[i]) {
                $rootScope.userInfo.default_address = $scope.Add_select[i].area + $scope.Add_select[i].detailed_area;
                window.history.go(-1);
              }else{
                arr.push(i);
              }
           }
           if(arr.length == $scope.address.length){
              $rootScope.prompt_box('请选择地址');
           }
       }
  }])