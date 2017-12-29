angular.module('app')
  .controller('pro_layoutController',['$scope','buymodal','$location','$state','$stateParams','$ionicPopup',function($scope,buymodal,$location,$state,$stateParams,$ionicPopup){
  	    $scope.id=null;
        $scope.quan=0;
        $scope.pro_img=['./img/product_img12.png','./img/product_img12.png'];
        $scope.reg='￥76';
        $scope.title='苏泊尔（SUPOR）喷气式家用电熨斗YD18A01A-12 五档控温蒸汽烫斗';
        $scope.selected=null;
        $scope.aIndex=null;
        $scope.city='广东省 广州市 天河区 车陂街道',
      //模态购买页----
  	  buymodal.initModal($scope);
  	  
  	  $scope.buy_on=function(){
  	  	buymodal.openModal($scope);
  	  };
      
      $scope.buy_off=function(){
      	buymodal.closeModal($scope);
      }
      //----------------------------
      $scope.click=function(url){
          $location.path(url);
      }
       $scope.fenlei=[{
          txt:'红白'
       },
       {
          txt:'蓝白'
       }
       ];


       //款式选择
       $scope.xzhong=function(index){
             $scope.aIndex=index;
             $scope.id=index;
             $scope.selected=$scope.fenlei[index].txt;
       }
       //----------------------------
       //跳转页面
       $scope.click1=function(url){
              $state.go(url);
              buymodal.closeModal($scope);
       }
      //-----------------------
      //添加件数
       $scope.puls=function(){
            if($scope.quan <= 5){
              $scope.quan=$scope.quan+1;
            }
       }
       //----------------------------
       //减少件数
       $scope.less=function(){
           if($scope.quan > 0){
             $scope.quan=$scope.quan-1;
           }
       }
       //----------------------------
       //提示框
      $scope.prompt=function(a){
          let myPopup=$ionicPopup.show({
            title:a,
            buttons:[{text:'确定'}]
          })
      }
       //加入购物车
      $scope.join=function(){
        let aID=$scope.id;
         if(aID != null && $scope.quan >0){
           $state.go('layout.shopping',{txt:$scope.title,img:$scope.pro_img[aID],sum:'x'+$scope.quan,reg:$scope.reg,title:$scope.fenlei[aID].txt,value:false});
           buymodal.closeModal($scope);
         }else{
          if(aID == null && $scope.quan > 0){
            $scope.prompt('请选择款式');
          }else if(aID != null && $scope.quan == 0){
            $scope.prompt('请添加件数');
          }else if(aID == null && $scope.quan == 0){
            $scope.prompt('请选择款式与添加件数');
          }
          
         }
      }
      $scope.buy=function(){
        let buy_obj={};
        if($scope.selected != null && $scope.quan > 0){
             buy_obj.txt=$scope.selected;
             buy_obj.quan=$scope.quan;
             buy_obj.img=$scope.pro_img[$scope.id];
             buy_obj.reg=$scope.reg;
             buy_obj.city=$scope.city;
             buymodal.closeModal($scope);
        }else{
          if($scope.selected == null && $scope.quan > 0){
             $scope.prompt('请选择款式');
          }else if($scope.selected != null && $scope.quan == 0){
           $scope.prompt('请添加件数');
          }else if($scope.selected == null && $scope.quan == 0){
           $scope.prompt('请选择款式与添加件数');
          }
        }
        console.log(buy_obj)
      }
      //----------------------------
  }])