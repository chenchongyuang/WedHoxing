angular.module('app')
  .controller('pro_layoutController',['$scope','buymodal','$location','$state','$stateParams','$ionicPopup','API','$rootScope',function($scope,buymodal,$location,$state,$stateParams,$ionicPopup,API,$rootScope){
  	    $scope.id=null;
        $scope.selected=null;
        $scope.total=[];
        $scope.class_aindex='';
        $scope.pro_layout={
           quan:0,
           pro_img:'',
           title:'',
           city:'',
           reg:'',
           store_count:'',
           product_class:'',
           class:{},
           class_style:{},
           select:{},
           class_title:[],
           click:{},
           selected:[]
        }
        //点击选择添加背景的索引值
        $scope.aIndex ={
            aIndex0:'',
            aIndex1:'',
            aIndex2:'',
            aIndex3:'',
            aIndex4:''
        }
        //向后台发送请求,获取后台数据接口
  	    API.fetchGet('http://127.0.0.1:9000/product_data',{id:$stateParams.id})
          .then(function(data){
              $scope.pro_layout.pro_img = data.data[0].pimage;
              $scope.pro_layout.reg = data.data[0].market_price;
              $scope.pro_layout.store_count = data.data[0].store_count;
              $scope.pro_layout.title = data.data[0].goods_name;
              console.log($scope.pro_layout.store_count);
              let a=data.data[0].product_class.split(';')
              $scope.pro_layout.product_class=[];
                 //将总分类分割
                 for(let i=0;i<a.length;i++){
                     $scope.pro_layout.product_class.push(a[i].split(':'));
                 }
                 //获取个分类
                 for(let i=0;i<$scope.pro_layout.product_class.length;i++){
                     $scope.pro_layout.class_title.push($scope.pro_layout.product_class[i][0]);
                     $scope.pro_layout.class_style['style' + [i]] = $scope.pro_layout.product_class[i][1]; 
                 } 
                 //获取个详情分类数组
                 for(let i=0;i<$scope.pro_layout.product_class.length;i++){
                     $scope.pro_layout.select['a'+[i]] = $scope.pro_layout.class_style['style'+[i]].split(',');
                 }
                 //将所有分类存到一个数组,方便点击查询
                 for(let i=0;i<$scope.pro_layout.product_class.length;i++){
                  $scope.pro_layout.selected.push('');
                    for(let j=0;j<$scope.pro_layout.select['a'+[i]].length;j++){
                         $scope.total.push($scope.pro_layout.select['a' + i][j]);
                    }
                 }

                 //点击选择分类
                 for(let i=0;i<$scope.pro_layout.product_class.length;i++){
                     $scope.pro_layout.click['click'+i] = function($index,key){
                        var gg=$scope.total.indexOf(key);
                        var select=$scope.pro_layout.select;
                        var length1= select.a0.length + select.a1.length;
                        if(gg < select.a0.length ){
                             //索引值赋值
                             $scope.aIndex0 = $index;
                             //添加已选项
                             $scope.pro_layout.selected[0] = key;
                        }else if(gg >= select.a0.length && gg < length1){
                             //索引值赋值
                             $scope.aIndex1 = $index;
                             //添加已选项
                             $scope.pro_layout.selected[1] = key;
                        }else if(gg >= length1 && gg < length1 + select.a2.length){
                            //索引值赋值
                             $scope.aIndex2 = $index;
                             //添加已选项
                             $scope.pro_layout.selected[2] = key;
                        }else if(gg >= length1 + select.a2.length && gg < length1 + select.a3.length + select.a2.length){
                             //索引值赋值
                             $scope.aIndex3 = $index;
                             //添加已选项
                             $scope.pro_layout.selected[3] = key;
                        }else if(gg >=length1 + select.a2.length + select.a2.length && gg < length1 + select.a2.length + select.a3.length + select.a4.length){
                             //索引值赋值
                             $scope.aIndex4 = $index;
                             //添加已选项
                             $scope.pro_layout.selected[4] = key;
                        }
                     }
                 }
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
      
       //加入购物车
      $scope.join=function(){
        $scope.join_shopping = {
            image:$scope.pro_layout.pro_img,
            price:$scope.pro_layout.reg,
            sum:$scope.pro_layout.quan,
            name:$scope.pro_layout.title,
            uid:2
        }
        let aID=$scope.id;
         if(aID != null && $scope.pro_layout.quan >0){
          API.fetchGet('http://127.0.0.1:9000/join_shopping',$scope.join_shopping)
            .then(function(data){
              console.log(data);
              //$rootScope.prompt_box('成功加入购物车');
            })
            .catch(function(err){
              $rootScope.prompt_box('出错了');
              console.log(err);
            })
           //$state.go('layout.shopping');
           buymodal.closeModal($scope);
         }else{
          if(aID == null && $scope.pro_layout.quan > 0){
            $rootScope.prompt_box('请选择款式');
          }else if(aID != null && $scope.pro_layout.quan == 0){
            $rootScope.prompt_box('请添加件数');
          }else if(aID == null && $scope.pro_layout.quan == 0){
            $rootScope.prompt_box('请选择款式与添加件数');
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
             $rootScope.prompt_box('请选择款式');
          }else if($scope.selected != null && $scope.pro_layout.quan == 0){
           $rootScope.prompt_box('请添加件数');
          }else if($scope.selected == null && $scope.pro_layout.quan == 0){
           $rootScope.prompt_box('请选择款式与添加件数');
          }
        }
        console.log(buy_obj)
      }
      //----------------------------
  }])