angular.module('app')
  .controller('all_commentController',['$scope',function($scope){
  	   $scope.oPrev=function(){
  	  	window.history.go(-1);
  	  };
  	   $scope.all_comment=[{
               avatar:'./img/icon7.png',
               name:'小仙女i',
               txt:'因为在南方天气潮湿，很小的时候就希望自己有一个电熨斗熨衣服！长大后喜欢穿衬衫了，真心觉得衣服皱皱巴巴的显得很旧....',
               time:'2017-09-04',
               style:'颜色分类：蓝白',
               img1:'./img/product_img6.png',
               img2:'./img/product_img7.png',
               img3:'./img/product_img8.png',
  	   },
  	   {
               avatar:'./img/icon7.png',
               name:'小仙女i',
               txt:'因为在南方天气潮湿，很小的时候就希望自己有一个电熨斗熨衣服！长大后喜欢穿衬衫了，真心觉得衣服皱皱巴巴的显得很旧....',
               time:'2017-09-04',
               style:'颜色分类：蓝白',
               img1:'./img/product_img6.png',
               img2:'./img/product_img7.png',
               img3:'./img/product_img8.png',
  	   }];
  }])