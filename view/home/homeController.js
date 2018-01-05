angular.module('app')
  .controller('homeController',['$scope','$state','API',function($scope,$state,API){
       $scope.click=function(id){
          $state.go('pro_detaLayout.product_deta',{id:id});
       };
       $scope.abvImg=null;
       $scope.home_title=null;
       $scope.product={};
       API.fetchGet('http://127.0.0.1:9000/home')
       .then(function(data){
           var aClass=[];
           $scope.abvImg =data.data.banner;
           $scope.home_title=data.data.classify;
           for(let i=0;i<data.data.products.length;i++){
                var a = data.data.products[i].class;
                 if(aClass.indexOf(a) === -1){
                    aClass.push(a);
                 }
               
           };
         
           for(let j=0;j<aClass.length;j++){
               var p=[];
               for(let k=0;k<data.data.products.length;k++){
                    if(aClass[j] == data.data.products[k].class){
                      p.push(data.data.products[k]);
                    }
               }
                $scope.product['class' + aClass[j]] = p;
           }
       })
       .catch(function(err){
           console.log(err);
       })
  	   

  	   

  	  

  	  
     
  	   


  }])