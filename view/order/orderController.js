angular.module('app')
  .controller('orderController',['$scope','$stateParams','$ionicSlideBoxDelegate','$state','API',function($scope,$stateParams,$ionicSlideBoxDelegate,$state,API){
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
  	  
      $scope.aIndex=$stateParams.index;
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

            console.log(data);
        })
        .catch(function(err){
          console.log(err);
        })
      $scope.index_click=function(index){
             $scope.aIndex=index;
             $ionicSlideBoxDelegate.slide($scope.aIndex);
      }
      $scope.click=function(url,id){
             $state.go(url,{id:id});
      }
    
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

	  	
	 $scope.recommend_pro=[{
           img:'./img/product_img1.png',
           txt:'干湿两用电熨斗',
           reg:'￥139',
           omitted:'...'
  	   },
  	   {
           img:'./img/product_img2.png',
           txt:'手持式吸尘器',
           reg:'￥425',
           omitted:'...'
  	   },
  	   {
           img:'./img/product_img3.png',
           txt:'大功率电吹风机',
           reg:'￥198',
           omitted:'...'
  	   },
		{
           img:'./img/product_img4.png',
           txt:'大功率电吹风',
           reg:'￥154',
           omitted:'...'
  	   },
  	   {
           img:'./img/product_img5.png',
           txt:'电热水壶',
           reg:'￥258',
           omitted:'...'
  	   },
  	   {
           img:'./img/product_img6.png',
           txt:'大功率电吹风机',
           reg:'￥325',
           omitted:'...'
  	   }]
  }])