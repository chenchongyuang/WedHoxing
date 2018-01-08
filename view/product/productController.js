angular.module('app')
  .controller('productController',['$scope','$state','API',function($scope,$state,API){
    
      $scope.title='挂烫机';
      $scope.product_arr = null;
  	  $scope.cate_arr= null;
      API.fetchGet('http://127.0.0.1:9000/product',)
         .then(function(data){
             $scope.product_arr = data.data[0];
             $scope.cate_arr = data.data[1];
         })
         .catch(function(err){
            console.log(err);
         })
  	 $scope.click=function(id){
      $state.go('pro_detaLayout.product_deta',{id:id});
    };

      $scope.click_title=function(index){
          $scope.title = $scope.cate_arr[index].name;
          $scope.product = $scope.product_arr[index];
      }
  }])