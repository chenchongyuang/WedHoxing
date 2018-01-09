angular.module('app')
  .controller('shoppingController',['$scope','$state','$stateParams','API',function($scope,$state,$stateParams,API){
     
     
     $scope.shopping ={
         shopping_product:[],
         value:[false,false,false,false,false],
         quanbu:false,
         sum:0,
         recommend_product:[]

     }
     API.fetchGet('http://127.0.0.1:9000/shopping')
       .then(function(data){
        $scope.shopping.shopping_product = data.data[0];
        $scope.shopping.recommend_product = data.data[1];
        console.log(data);
       })
       .catch(function(err){
        console.log(err);
       })

  	 
  	 $scope.data = {
        showDelete: false
      };
      //跳转产品详情页
     
    //------------------------
     
    //添加宝贝的传参
    $scope.obj1=$stateParams;
    $scope.add_to=function(){
      let arr_obj=[];

      for(key in $scope.obj1){
        if($scope.obj1[key] != ''){
                arr_obj.push(key);
              }
       }
      if(arr_obj.length >=5){
        console.log($stateParams)
        $scope.shopping.push($stateParams);
      }
    }
    $scope.add_to();
  //---------------------------------
  //勾选按钮
  $scope.che_click=function(aa,$index){
        
         
         var Number_reg=Number($scope.shopping.shopping_product[$index].price);
         var Number_sum=Number($scope.shopping.shopping_product[$index].sum);
         var arr=[];
          if(aa){
              for(var i=0;i<$scope.shopping.value.length;i++){
                  
                  if($scope.shopping.value[i]){
                    arr.push($scope.shopping.value[i]);
                  }
              }
              $scope.shopping.sum = $scope.shopping.sum + (Number_sum * Number_reg); 
          }else{
             $scope.shopping.sum = $scope.shopping.sum - (Number_sum * Number_reg);  
          }
          if(arr.length === $scope.shopping.value.length){
                    $scope.shopping.quanbu=true;
                    
                }else{
                    $scope.shopping.quanbu=false;
                  
                }
  }
  //--------------------------
  //删除按钮
  $scope.onItemDelete = function(item,$index) {
    $scope.shopping.shopping_product.splice($scope.shopping.shopping_product.indexOf(item), 1);
       console.log(item.price);
       if($scope.shopping.value[$index]){
        $scope.shopping.sum = $scope.shopping.sum - Number( item.price * item.sum)
       }
  };
  //--------------------------
  //全选按钮与总数
  $scope.jiayu=function(value){
           
     if(value){
             $scope.shopping.sum = 0;
             for(let i=0;i<$scope.shopping.value.length;i++){
                  $scope.shopping.value[i] = true;
                  var Number_reg = Number($scope.shopping.shopping_product[i].price);
                  var Number_sum = Number($scope.shopping.shopping_product[i].sum);
                  $scope.shopping.sum =  $scope.shopping.sum + (Number_sum * Number_reg);
               }
           }else{
              for(let i=0;i<$scope.shopping.value.length;i++){
                  $scope.shopping.value[i]=false;
                  $scope.shopping.sum = 0;
               }
           }
  }  
  //--------------------------     
  }])