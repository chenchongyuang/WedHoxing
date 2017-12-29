angular.module('app')
.controller('seo_orderController',['$scope','$location',function($scope,$location){
	$scope.click=function(url){
		$location.path(url);
	};
       $scope.oPrev=function(){
              window.history.go(-1);
       }
	 $scope.order_product=[{
              img:'./img/product_img9.png',
              txt:'SUPOR/苏泊尔 CFXB40FD8241-86家用4L升智能电饭煲电饭锅3-5-6人',
              reg:'￥:239',
              sum:'x1'
	 },
	 {        img:'./img/product_img12.png',
              txt:'Amoi/夏新 BP-150202电热水壶304不锈钢防烫电热壶烧水壶电水壶',
              reg:'￥:45',
              sum:'x1'
	 },
	 {        img:'./img/product_img6.png',
              txt:'惠能达家用电吹风大功率恒温离子不伤发吹风筒冷热风护发吹风机',
              reg:'￥:57',
              sum:'x1'
	 },
	 {        img:'./img/product_img11.png',
              txt:'飞利浦电熨斗 新款大功率大容量 蒸汽喷射手持式迷你电熨斗家用',
              reg:'￥:299',
              sum:'x1'
	 }];
	 $scope.txt=['搜订单','我常买的宝贝'];
}])