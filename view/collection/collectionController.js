angular.module('app')
  .controller('collectionController',['$scope','$state','API','$rootScope',function($scope,$state,API,$rootScope){
  	$scope.click=function(id){
  		$state.go('pro_detaLayout.product_deta',{id:id});
  	}
  	
    $scope.api=function(){
        API.fetchGet('http://127.0.0.1:9000/shopping')
          .then(function(data){
            console.log(data)
              $scope.Evaluation=data.data[0]
          })
          .catch(function(err){
              console.log(err);
          })
      }
      $scope.api();
   $scope.delete=function(item){
       $scope.Evaluation.splice($scope.Evaluation.indexOf(item),1);
       console.log(1);
   }

  }])