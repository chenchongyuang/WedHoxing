angular.module('app')
 .controller('returnsController',['$scope','$state','$ionicSlideBoxDelegate','API',function($scope,$state,$ionicSlideBoxDelegate,API){
   $scope.order_product =[];
  //后台数据请求接口
  API.fetchGet('http://127.0.0.1:9000/returns')
    .then(function(data){
      $scope.order_product = data.data;
        console.log(data.data)
    })
    .catch(function(err){
      console.log(err);
    })

  //返回上一页
 	$scope.oPrev=function(){
 		window.history.go(-1);
 	};

  //跳转页面
 	$scope.click=function(id){
        $state.go('pro_detaLayout.product_deta',{id:id});
 	};

  //点击跳转滑块页面
 	$scope.click_index=function(index){
        $scope.aIndex=index;
        $ionicSlideBoxDelegate.slide($scope.aIndex);
        
 	} 
 	$scope.aIndex=0;

 	$scope.title=[{
          txt:'全部'
 	},
 	{
          txt:'待用户处理'
 	}]
 	
  $scope.Deleteing=function(item,id){
       $scope.order_product.splice($scope.order_product.indexOf(item),1);
       API.fetchGet('http://127.0.0.1:9000/Delete_order',{id:id})
         .then(function(data){
            console.log(data);
         })
         .catch(function(err){
            console.log(err);
         })
  }
 }])