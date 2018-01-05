angular.module('app')
   .controller('product_detaController',['$scope','$ionicSlideBoxDelegate','$location','parameters_modal','$stateParams','API',function($scope,$ionicSlideBoxDelegate,$location,parameters_modal,$stateParams,API){
    
    //轮播图
    $scope.slide = {
            doesContinue: true,
            autoPlay: true,
            intervalTime: 2000,
            showPager: true
        };
     $scope.title='苏泊尔（SUPOR）喷气式家用电熨斗YD18A01A-12 五档控温蒸汽烫斗';
     $scope.id=['id1','id2'];
     $scope.index=null;

     API.fetchGet('http://127.0.0.1:9000/product_data',$stateParams.id)
       .then(function(data){
           console.log(data);
       })
       .catch(function(err){
        console.log(err);
       })
    //-----------------
    //
    //模态产品参数页----
    parameters_modal.initModal($scope);

    $scope.parameters_on=function(id){
         if( id == 1 ){
            $scope.index = $scope.id[0];
            console.log($scope.index);
         } else if(id == 2 ){
            $scope.index = $scope.id[1];
            console.log($scope.index);
         }
     parameters_modal.openModal($scope);
     
    };

    $scope.closeComment = function () {
    parameters_modal.closeModal($scope);
      }

    
     //-----------------
    $scope.parameters_title='产品参数';

    $scope.parameters=[{
             name:'电水壶品牌',
             txt:'Haier/海尔'
    }, 
    {
             name:'海尔电水壶型号',
             txt:'YD1618'
    }, 
    {
             name:'电水壶底板材质',
             txt:'顺滑贴衣底板'
    }, 
    {
             name:'电水壶最大功率',
             txt:'1000w(含）-1999w(含）'
    }, 
    {
             name:'电水壶档位选择',
             txt:'档以上'
    }, 
    {
             name:'颜色分类',
             txt:'红白'
    },
    {
             name:'是否迷你',
             txt:'迷你'
    },
    {
             name:'调温方式',
             txt:'机械调温'
    }];
    //-----------------------
    //跳转连接
   	$scope.oPrev=function(){
         	window.history.go(-1);
         };

    $scope.click=function(url){
      $location.path(url);
    }
    //---------------------------
    

   	
    
   
    $scope.details_img=[
      './img/details_img1.png',
      './img/details_img2.png',
      './img/details_img3.png',
      './img/details_img4.png'
    ];

    $scope.pro_banner=[{
          img:'./img/pro_deta_bannerimg1.png'
    },
    {
          img:'./img/pro_deta_bannerimg1.png'
    },
    {
          img:'./img/pro_deta_bannerimg1.png'
    }];
    //模态1内容
    $scope.modal1=[{
          img:'./img/icon13.png',
          title:'只换不修',
          txt:'小家电和数码产品质量问题365天只换不修'
    },
    {
          img:'./img/icon14.png',
          title:'电器延保',
          txt:'商城电器延保服务，全国联保结束后商城为电器继续延长服务保障其，为影响正常使用的性能故障提供维修'
    }];
    $scope.modal1_2=[
    {
          img:'./img/icon15.png',
          title:'闪电到家',
          txt:'提供当日达，次日达，预约配送等物流时效。未履约每个订单赔付10元。'
    },
    {
          img:'./img/icon16.png',
          title:'超值包邮',
          txt:'全场包邮,为您而省'
    },
    {
          img:'./img/icon17.png',
          title:'全国联保',
          txt:'商品在线报修，直达品牌售后'
    },
    {
          img:'./img/icon18.png',
          title:'正品保障',
          txt:'该商品由中国人保承保正品保证险'
    },
    {
          img:'./img/icon19.png',
          title:'公益宝贝',
          txt:'卖家为您购买的商品投保退货运费险'
    },
    {
          img:'./img/icon20.png',
          title:'急速退款',
          txt:'急速退款是为诚信会员提供的退款退货流程的专享特权额度是根据每个用户当前的信誉评级情况而定'
    },
    {
          img:'./img/icon21.png',
          title:'七天无理由退换',
          txt:'消费者在满足7天无理由退货申请条件的前提下，可以提出“7天无理由退货”的申请'
    }];
   }])