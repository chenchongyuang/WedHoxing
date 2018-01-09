angular.module('app')
   .controller('product_detaController',['$scope','$ionicSlideBoxDelegate','$location','parameters_modal','$stateParams','API',function($scope,$ionicSlideBoxDelegate,$location,parameters_modal,$stateParams,API){
    
    //轮播图
    $scope.slide = {
            doesContinue: true,
            autoPlay: true,
            intervalTime: 2000,
            showPager: true
        };
     
     $scope.id=['id1','id2'];
     $scope.product_data={
          title:null,
          pro_banner:null,
          price:null,
          original_price:null,
          parameters:[],
          details_img:null
     }
     $scope.index=null;
     API.fetchGet('http://127.0.0.1:9000/product_data',{id:$stateParams.id})
       .then(function(data){
           $scope.product_data.pro_banner = data.data[0].banner.split(',');
           $scope.product_data.title = data.data[0].goods_name;
           $scope.product_data.price = data.data[0].market_price;
           $scope.product_data.original_price = Math.floor($scope.product_data.price / 0.7);
           $scope.product_data.details_img = data.data[0].product_details.split(',');
           let a = data.data[0].parameter.split(';');
           let a2 = [];
             for(let i=0;i<a.length;i++){
              a2.push(a[i].split(','));
             }
             for(let j=0;j<a.length;j++){
                  $scope.product_data.parameters.push({name:a2[j][0],title:a2[j][1]});   
             }
       })
       .catch(function(err){
        console.log('出错了');
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

    
    //-----------------------
    //跳转连接
   	$scope.oPrev=function(){
         	window.history.go(-1);
         };

    $scope.click=function(url){
      $location.path(url);
    }
    //---------------------------
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