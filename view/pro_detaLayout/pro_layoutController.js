angular.module('app')
  .controller('pro_layoutController',['$scope','buymodal','$location','$state','$stateParams','$ionicPopup','API',function($scope,buymodal,$location,$state,$stateParams,$ionicPopup,API){
  	    $scope.id=null;
        $scope.reg='￥76';
        $scope.selected=null;
        $scope.aIndex=null;
        $scope.pro_layout={
           quan:0,
           pro_img:'',
           title:'',
           city:'',
           reg:'',
           store_count:''
        }
        console.log($stateParams);
  	    API.fetchGet('http://127.0.0.1:9000/product_data',{id:$stateParams.id})
          .then(function(data){
              $scope.pro_layout.pro_img = data.data[0].pimage;
              $scope.pro_layout.reg = data.data[0].market_price;
              $scope.pro_layout.store_count = data.data[0].store_count;
              $scope.pro_layout.title = data.data[0].goods_name;
              console.log(data.data[0]);
          })
          .catch(function(err){
            console.log(err);
          })
        

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
            if($scope.pro_layout.quan <= 5){
              $scope.pro_layout.quan=$scope.pro_layout.quan+1;
            }
       }
       //----------------------------
       //减少件数
       $scope.less=function(){
           if($scope.pro_layout.quan > 0){
             $scope.pro_layout.quan=$scope.pro_layout.quan-1;
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
         if(aID != null && $scope.pro_layout.quan >0){
           $state.go('layout.shopping',{txt:$scope.pro_layout.title,img:$scope.pro_layout.pro_img,sum:'x'+$scope.pro_layout.quan,reg:$scope.pro_layout.reg,title:$scope.fenlei[aID].txt,value:false});
           buymodal.closeModal($scope);
         }else{
          if(aID == null && $scope.pro_layout.quan > 0){
            $scope.prompt('请选择款式');
          }else if(aID != null && $scope.pro_layout.quan == 0){
            $scope.prompt('请添加件数');
          }else if(aID == null && $scope.pro_layout.quan == 0){
            $scope.prompt('请选择款式与添加件数');
          }
          
         }
      }
      $scope.buy=function(){
        let buy_obj={};
        if($scope.selected != null && $scope.pro_layout.quan > 0){
             buy_obj.txt=$scope.selected;
             buy_obj.quan=$scope.pro_layout.quan;
             buy_obj.img=$scope.pro_layout.pro_img;
             buy_obj.reg=$scope.pro_layout.reg;
             buy_obj.city=$scope.pro_layout.city;
             buymodal.closeModal($scope);
        }else{
          if($scope.selected == null && $scope.pro_layout.quan > 0){
             $scope.prompt('请选择款式');
          }else if($scope.selected != null && $scope.pro_layout.quan == 0){
           $scope.prompt('请添加件数');
          }else if($scope.selected == null && $scope.pro_layout.quan == 0){
           $scope.prompt('请选择款式与添加件数');
          }
        }
        console.log(buy_obj)
      }
      //----------------------------
  }])