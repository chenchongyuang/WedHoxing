angular.module('app')
   .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
          $urlRouterProvider.otherwise('/home');
          $stateProvider
          //登录页
          .state('login',{
          	url:'/login',
          	templateUrl:'./view/login/login.html',
            controller:'loginController',
          	resolve:{
          		des:['$ocLazyLoad',function($ocLazyLoad){
          			return $ocLazyLoad.load('login');
          		}]
          	}
          })
          //---------------------------
          //注册页
          .state('registered',{
            url:'/registered',
            templateUrl:'./view/registered/registered.html',
            controller:'registeredController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('registered');
              }]
            }
          })
          //---------------------------
          //首页一级路由
          .state('layout',{
            url:'',
            abstruct:true,
            templateUrl:'./view/layout/layout.html',
            controller:'layoutController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('layout');
              }]
            }
          })
          //首页
          .state('layout.home',{
            url:'/home',
            templateUrl:'./view/home/home.html',
            controller:'homeController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('home');
              }]
            }
          })
          //产品页
          .state('layout.product',{
            url:'/product',
            templateUrl:'./view/product/product.html',
            controller:'productController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('product');
              }]
            }
          })
          //产品详情二级路由
          .state('pro_detaLayout',{
            params:{'id':null},
            url:'',
            abstruct:true,
            templateUrl:'./view/pro_detaLayout/pro_layout.html',
            controller:'pro_layoutController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('pro_layout');
              }]
            }
          })
          //产品详情页
          .state('pro_detaLayout.product_deta',{
            url:'/product_deta/:id',
            templateUrl:'./view/product_deta/product_deta.html',
            controller:'product_detaController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('product_deta');
              }]
            }
          })
          //产品评论页
          .state('pro_detaLayout.all_comment',{
            url:'/all_comment',
            templateUrl:'./view/all_comment/all_comment.html',
            controller:'all_commentController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('all_comment');
              }]
            }
          })
          //---------------------------------------------
          //购物车页
          .state('layout.shopping',{
            url:'/shopping:txt:img:sum:reg:title:value',
            templateUrl:'./view/shopping/shopping.html',
            controller:'shoppingController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('shopping');
              }]
            }
          })
          //---------------------------------------------
          //个人页
          .state('layout.mine',{
            url:'/mine',
            templateUrl:'./view/mine/mine.html',
            controller:'mineController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('mine');
              }]
            }
          })
          //---------------------------------------------
          //设置
          .state('set',{
            url:'/set',
            templateUrl:'./view/set/set.html',
            controller:'setController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('set');
              }]
            }
          })
          //---------------------------------------------
          //意见反馈
          .state('feed',{
            url:'/feed',
            templateUrl:'./view/feed/feed.html',
            controller:'feedController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('feed');
              }]
            }
          })
          //---------------------------------------------
          //关于商城
          .state('about',{
            url:'/about',
            templateUrl:'./view/about_app/about.html',
            controller:'aboutController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('about');
              }]
            }
          })
          //---------------------------------------------
          //客服
          .state('service',{
            url:'/service',
            templateUrl:'./view/service/service.html',
            controller:'serviceController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('service');
              }]
            }
          })
          //---------------------------------------------
          //管理收货地址
          .state('ship_ads',{
            url:'/ship_ads',
            templateUrl:'./view/ship_ads/ship_ads.html',
            controller:'ship_adsController',
            cache:false,
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('ship_ads');
              }]
            }
          })
          //---------------------------------------------
          //编辑地址
          .state('e_address',{
            url:'/e_address',
            templateUrl:'./view/e_address/e_address.html',
            controller:'e_addressController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('e_address');
              }]
            }
          })
          //---------------------------------------------
          //版权信息
           .state('copyright',{
            url:'/copyright',
            templateUrl:'./view/copyright/copyright.html',
            controller:'copyrightController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('copyright');
              }]
            }
          })
           //---------------------------------------------
           //订单
           .state('order',{
            url:'/order:index',
            templateUrl:'./view/order/order.html',
            controller:'orderController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('order');
              }]
            }
          })
          //------------------------------------------
          //订单搜索
           .state('seo_order',{
            url:'/seo_order',
            templateUrl:'./view/seo_order/seo_order.html',
            controller:'seo_orderController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('seo_order');
              }]
            }
          })
           //--------------------------------------------
           //收藏
            .state('collection',{
            url:'/collection',
            templateUrl:'./view/collection/collection.html',
            controller:'collectionController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('collection');
              }]
            }
          })
          //--------------------------------------------
          //引导页
          .state('guide_pages',{
            url:'/guide_pages',
            templateUrl:'./view/guide_pages/guide_pages.html',
            controller:'guide_pagesController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('guide_pages');
              }]
            }
          })
          //--------------------------------------------
          //个人资料
          .state('mine_data',{
            url:'/mine_data',
            templateUrl:'./view/mine_data/mine_data.html',
            controller:'mine_dataController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('mine_data');
              }]
            }
          })
          //--------------------------------------------
          //退货
          .state('returns',{
            url:'/returns',
            templateUrl:'./view/returns/returns.html',
            controller:'returnsController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('returns');
              }]
            }
          })
           //--------------------------------------------
          //足迹
          .state('Footprint',{
            url:'/Footprint',
            templateUrl:'./view/Footprint/Footprint.html',
            controller:'FootprintController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('Footprint');
              }]
            }
          })
           //--------------------------------------------
          //消息
          .state('news',{
            url:'/news',
            templateUrl:'./view/news/news.html',
            controller:'newsController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('news');
              }]
            }
          })//--------------------------------------------
          //修改密码
          .state('forget_pwd',{
            url:'/forget_pwd',
            templateUrl:'./view/forget_pwd/forget_pwd.html',
            controller:'forget_pwdController',
            resolve:{
              des:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load('forget_pwd');
              }]
            }
          })
   }])