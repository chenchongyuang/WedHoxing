angular.module('app')
 .controller('returnsController',['$scope','$state',function($scope,$state){
 	$scope.oPrev=function(){
 		window.history.go(-1);
 	};
 	$scope.click=function(){
        $state.go('pro_detaLayout.product_deta');
 	};
 	$scope.click_index=function(index){
        $scope.aIndex=index;
        console.log(1);
 	} 
 	$scope.aIndex=0;
 	$scope.title=[{
          txt:'全部'
 	},
 	{
          txt:'待用户处理'
 	}]
 	$scope.order_product=[{
              img:'./img/product_img9.png',
              txt:'SUPOR/苏泊尔 CFXB40FD8241-86家用4L升智能电饭煲电饭锅3-5-6人',
              reg:'￥:239',
              sum:'x1',
              btn1:'查看物流',
              btn2:'追加评论',
              btn3:'删除订单'
	 },
	 {        img:'./img/product_img12.png',
              txt:'Amoi/夏新 BP-150202电热水壶304不锈钢防烫电热壶烧水壶电水壶',
              reg:'￥:45',
              sum:'x1',
              btn1:'查看物流',
              btn2:'追加评论',
              btn3:'删除订单'
	 },
	 {        img:'./img/product_img6.png',
              txt:'惠能达家用电吹风大功率恒温离子不伤发吹风筒冷热风护发吹风机',
              reg:'￥:57',
              sum:'x1',
              btn1:'查看物流',
              btn2:'追加评论',
              btn3:'删除订单'
	 }];
 }])