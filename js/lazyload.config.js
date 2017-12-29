(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
		 		{
			 		name: 'login',
			 		files: [
			 			'./view/login/loginController.js',
			 			'./view/login/login.css'
			 		]
			 	},
			 	{
			 		name: 'registered',
			 		files: [
			 			'./view/registered/registeredController.js',
			 			'./view/registered/registered.css'
			 		]
			 	},
			 	{
			 		name:'layout',
			 		files:[
                       './view/layout/layoutController.js'
			 		]
			 	},
			 	{
			 		name: 'home',
			 		files: [
			 			'./view/home/homeController.js',
			 			'./view/home/home.css'
			 		]
			 	},
			 	{
			 		name: 'product',
			 		files: [
			 			'./view/product/productController.js',
			 			'./view/product/product.css'
			 		]
			 	},
			 	{
			 		name: 'mine',
			 		files: [
			 			'./view/mine/mineController.js',
			 			'./view/mine/mine.css',
			 		]
			 	},
			 	{
			 		name: 'shopping',
			 		files: [
			 			'./view/shopping/shoppingController.js',
			 			'./view/shopping/shopping.css',
			 		]
			 	},
			 	{
			 		name: 'set',
			 		files: [
			 			'./view/set/setController.js',
			 			'./view/set/set.css',
			 			
			 		]
			 	},
			 	{
			 		name: 'feed',
			 		files: [
			 			'./view/feed/feedController.js',
			 			'./view/feed/feed.css',
			 			
			 		]
			 	},
			 	{
			 		name: 'about',
			 		files: [
			 			'./view/about_app/aboutController.js',
			 			'./view/about_app/about.css'
			 			
			 		]
			 	},
			 	{
			 		name: 'ship_ads',
			 		files: [
			 			'./view/ship_ads/ship_adsController.js',
			 			'./view/ship_ads/ship_ads.css'
			 			
			 		]
			 	},
			 	{
			 		name: 'service',
			 		files: [
			 			'./view/service/serviceController.js',
			 			'./view/service/service.css'
			 			
			 		]
			 	},
			 	{
			 		name: 'e_address',
			 		files: [
			 			'./view/e_address/e_addressController.js',
			 			'./view/e_address/e_address.css'
			 			
			 		]
			 	},
			 	{
			 		name: 'product_deta',
			 		files: [
			 			'./view/product_deta/product_detaController.js',
			 			'./view/product_deta/product_deta.css'
			 			
			 		]
			 	},
			 	{
			 		name: 'copyright',
			 		files: [
			 			'./view/copyright/copyrightController.js',
			 			'./view/copyright/copyright.css'
			 			
			 		]
			 	},
			 	{
			 		name: 'pro_layout',
			 		files: [
			 			'./view/pro_detaLayout/pro_layoutController.js',
			 			'./view/pro_detaLayout/pro_layout.css'
			 			
			 		]
			 	},
			 	{
			 		name: 'all_comment',
			 		files: [
			 			'./view/all_comment/all_commentController.js',
			 			'./view/all_comment/all_comment.css'
			 			
			 		]
			 	},
			 	{
			 		name: 'order',
			 		files: [
			 			'./view/order/orderController.js',
			 			'./view/order/order.css'
			 			
			 		]
			 	},
			 	
			 	{
			 		name: 'seo_order',
			 		files: [
			 			'./view/seo_order/seo_orderController.js',
			 			'./view/seo_order/seo_order.css'
			 			
			 		]
			 	},
			 	{
			 		name: 'collection',
			 		files: [
			 			'./view/collection/collectionController.js',
			 			'./view/collection/collection.css'
			 			
			 		]
			 	},
			 	{
			 		name: 'guide_pages',
			 		files: [
			 			'./view/guide_pages/guide_pagesController.js',
			 			'./view/guide_pages/guide_pages.css'
			 			
			 		]
			 	},
			 	{
			 		name: 'mine_data',
			 		files: [
			 			'./view/mine_data/mine_dataController.js',
			 			'./view/mine_data/mine_data.css',
			 			'./view/mine_data/aa.js'
			 			
			 		]
			 	},
			 	{
			 		name: 'returns',
			 		files: [
			 			'./view/returns/returnsController.js',
			 			'./view/returns/returns.css'
			 			
			 		]
			 	},
			 	{
			 		name: 'Footprint',
			 		files: [
			 			'./view/Footprint/FootprintController.js',
			 			'./view/Footprint/Footprint.css'
			 			
			 		]
			 	},
			 	{
			 		name: 'news',
			 		files: [
			 			'./view/news/newsController.js',
			 			'./view/news/news.css'
			 			
			 		]
			 	}

	 		]
 		});
	}]);
	
})();