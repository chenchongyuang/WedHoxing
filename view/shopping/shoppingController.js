angular.module('app')
  .controller('shoppingController',['$scope','$state','$stateParams',function($scope,$state,$stateParams){
     $scope.quanbu=false;
     $scope.sum=0;
  	 $scope.shopping=[{
             txt:'【买一送三】 【以换代修】清风手持式挂烫机电熨斗',
             img:'./img/avatar_img1.png',
             reg:'￥86',
             sum:'x1',
             value:false

  	 },
  	 {
             txt:'进口发廊家用理发店专用大功率300w冷热风电吹风',
             img:'./img/avatar_img2.png',
             reg:'￥54',
             sum:'x1',
             value:false
  	 },
  	 {
  	 				 txt:'3D立体巡航送风/人工智能/断电记海尔 BCD-258WDPM',
             img:'./img/avatar_img3.png',
             reg:'￥1320',
             sum:'x1',
             value:false
  	 },
  	 {
             txt:'球斧内胆/精孔火候/狐面立体加热苏泊尔 CFXB40FC835-75',
             img:'./img/avatar_img4.png',
             reg:'￥280',
             sum:'x1',
             value:false
  	 },
  	 {
             txt:'家用大功率/干湿吹三用/超静音小狗 D-807家用大功率/干湿吹三用/超静音小狗 D-807家用大功率/干湿吹三用/超静音小狗 D-807',
             img:'./img/avatar_img5.png',
             reg:'￥385',
             sum:'x1',
             value:false
  	 }];
  	 $scope.data = {
        showDelete: false
      };
      //跳转产品详情页
     $scope.click=function(){
         $state.go('pro_detaLayout.product_deta');
     }
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
  

  $scope.shopping_product=[{
        img:'./img/product_img6',
        txt:'大功率电吹风',
        reg:'￥154',
        omitted:'...'
        
  },
  {
        img:'./img/product_img5',
        txt:'电热水壶',
        reg:'￥258',
        omitted:'...'
        
  },
  {
        img:'./img/product_img4',
        txt:'强力吸尘器',
        reg:'￥325',
        omitted:'...'
       
  }];
 

  //勾选按钮
  $scope.che_click=function(key,aa,$index){

         $scope.shopping[$index].value=aa;
         var Number_reg=Number($scope.shopping[$index].reg.substring(1));
         var Number_sum=Number($scope.shopping[$index].sum.substring(1));
         var arr=[];
          if(aa){
            for(var obj in $scope.shopping){
                if($scope.shopping[obj].value){
                  arr.push($scope.shopping[obj].value);
                }
            }
           $scope.sum =$scope.sum + (Number_sum * Number_reg); 
          }else{
             $scope.sum =$scope.sum - (Number_sum * Number_reg);  
          }
          if(arr.length === $scope.shopping.length){
                    $scope.quanbu=true;
                    
                }else{
                    $scope.quanbu=false;
                  
                }
  }
  //--------------------------
  //提示框
  $scope.onItemDelete = function(item) {
    $scope.shopping.splice($scope.shopping.indexOf(item), 1);
     console.log(item.value)
       if(item.value){
        $scope.sum=$scope.sum - Number(item.reg.substring(1))
       }
  };
  //--------------------------
  //全选按钮与总数
  $scope.jiayu=function(value){
           
           if(value){
            $scope.sum = 0;
             for(let i=0;i<$scope.shopping.length;i++){
                  $scope.shopping[i].value=true;
                   var Number_reg=Number($scope.shopping[i].reg.substring(1));
                   var Number_sum=Number($scope.shopping[i].sum.substring(1));
                  $scope.sum =  $scope.sum+(Number_sum * Number_reg);
               }
               
           }else{
              for(let i=0;i<$scope.shopping.length;i++){
                  $scope.shopping[i].value=false;
                  $scope.sum = 0;
               }
           }
  }  
  //--------------------------     
  }])