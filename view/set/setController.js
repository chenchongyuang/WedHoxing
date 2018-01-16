angular.module('app')
  .controller('setController',['$scope','$location','$rootScope','API','$state','tip',function($scope,$location,$rootScope,API,$state,tip){
         $scope.title='设置';
         $scope.txt=['关于商城','清除缓存','23.2MB','退出登录'];
         $scope.icon=['icon ion-ios-arrow-left','icon ion-ios-arrow-right'];
         $scope.click=function(url){
             $location.path(url);
         };
         $scope.drop_out=function(){
              tip.loadTips.showLoading();
              API.fetchGet('http://127.0.0.1:9000/drop_out',$rootScope.userInfo)
               .then(function(data){
                    console.log(data)
                    tip.loadTips.hideLoading();
                    $state.go('login');

               })
               .catch(function(err){
                     tip.loadTips.hideLoading();
                     console.log(err);
               })
         }
      
  }])