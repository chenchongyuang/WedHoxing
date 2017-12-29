angular.module('app')
  .controller('collectionController',['$scope','$location',function($scope,$location){
  	$scope.click=function(url){
  		$location.path(url);
  	}
  	$scope.oPrev=function(){
  		window.history.go(-1);
  	};
  	$scope.Evaluation=[{
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
   $scope.delete=function(item){
       $scope.Evaluation.splice($scope.Evaluation.indexOf(item),1);
       console.log(1);
   }

  }])