angular.module('app')
   .controller('mineController',['$scope','$location','$state',function($scope,$location,$state){
        $scope.click=function(url,aIndex){
         $state.go(url,{index:aIndex})
          
        }
   	  $scope.mine_arr=[{
            ionic:'icon ion-chatbubble-working',
            txt:'消息',
            url:'news'
   	  },
   	  {
            ionic:'icon ion-heart',
            txt:'收藏',
            url:'collection'
   	  },
   	  {
            ionic:'icon ion-ios-paw',
            txt:'足迹',
            url:'Footprint'
   	  }];
   	  $scope.mine_order=[{
            icon:'icon ion-ios-printer-outline',
            txt:'待付款',
            url:'order',
            aIndex:1
   	  },
   	  {
            icon:'icon ion-android-open',
            txt:'待发货',
            url:'order',
            aIndex:2
   	  },
   	  {
            icon:'icon ion-ios-folder-outline',
            txt:'待收货',
            url:'order',
            aIndex:3
   	  },
   	  {
            icon:'icon ion-android-create',
            txt:'待评价',
            url:'order',
            aIndex:4
   	  },
   	  {
            icon:'icon ion-android-happy',
            txt:'售后',
            url:'returns',
            aIndex:5
   	  }];
   	  $scope.mine_list=[{
            icon:'icon ion-android-call',
            txt:'客服与帮助',
            btn:'icon ion-ios-arrow-right',
            url:'service'
   	  },
   	  {
            icon:'icon ion-ios-chatboxes-outline',
            txt:'意见反馈',
            btn:'icon ion-ios-arrow-right',
            url:'feed'
   	  },
   	  {
            icon:'icon ion-ios-location-outline',
            txt:'收货地址',
            btn:'icon ion-ios-arrow-right',
            url:'ship_ads'
   	  },
   	  {
            icon:'icon ion-ios-gear-outline',
            txt:'设置',
            btn:'icon ion-ios-arrow-right',
            url:'set'
   	  }];
   }])