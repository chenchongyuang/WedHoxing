angular.module('app')
  .controller('orderController',['$scope','$stateParams','$ionicSlideBoxDelegate','$state','API',function($scope,$stateParams,$ionicSlideBoxDelegate,$state,API){
  	  //返回上一页
      $scope.oPrev=function(){
  	  	window.history.go(-1);
  	  };
      $scope.order={
         title:'我的订单',
         comment:[],
         receiving:[],
         payment:[],
         ship:[]
      }
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
      $scope.aIndex=$stateParams.index;
      //后台数据获取接口
      API.fetchGet('http://127.0.0.1:9000/order')
        .then(function(data){
          $scope.recommend_pro = data.data[1];
          $scope.order_product = data.data[0];
            for(let key in $scope.order_product ){
              if($scope.order_product[key].status_s == 4){
                   //未评论
                $scope.order.comment.push($scope.order_product[key]);
              }else if($scope.order_product[key].status_s ==3){
                  //未收货
                $scope.order.receiving.push($scope.order_product[key]);
              }else if($scope.order_product[key].status_s ==2){
                 //未付款
                $scope.order.payment.push($scope.order_product[key]);
              }else if($scope.order_product[key].status_s ==1){
                 //未收货
                $scope.order.ship.push($scope.order_product[key]);
              } 
            }
        })
        .catch(function(err){
          console.log(err);
        })
      //目录点击跳转
      $scope.index_click=function(index){
             $scope.aIndex=index;
             $ionicSlideBoxDelegate.slide($scope.aIndex);
      }
      //跳转到产品详情页
      $scope.click=function(url,id){
             $state.go(url,{id:id});
      }
       //目录
  	  $scope.all_order=[{
	           txt:'全部'
	  	}, 
	  	{
	  		   txt:'待付款'
	  	},
	  	{
	           txt:'待发货'
	  	},
	  	{
	           txt:'待收货'
	  	},
	  	{
	           txt:'待评价'
	  	}];
  }])