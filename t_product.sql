/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : hoxing

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-12 12:50:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_product
-- ----------------------------
DROP TABLE IF EXISTS `t_product`;
CREATE TABLE `t_product` (
  `pid` int(10) NOT NULL AUTO_INCREMENT,
  `goods_sn` int(10) NOT NULL,
  `goods_name` varchar(255) NOT NULL,
  `store_count` int(10) NOT NULL,
  `market_price` decimal(10,2) NOT NULL,
  `is_hot` varchar(255) NOT NULL DEFAULT '0',
  `pimage` varchar(255) NOT NULL DEFAULT '',
  `txt` varchar(255) NOT NULL,
  `ellipsis` varchar(255) NOT NULL DEFAULT '...',
  `class` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `banner` varchar(255) NOT NULL,
  `parameter` varchar(255) NOT NULL,
  `product_details` varchar(255) NOT NULL,
  `status_s` varchar(255) NOT NULL DEFAULT '0',
  `whether_buy` varchar(255) NOT NULL DEFAULT '0',
  `product_class` varchar(255) NOT NULL DEFAULT '默认',
  PRIMARY KEY (`pid`),
  KEY `class` (`class`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_product
-- ----------------------------
INSERT INTO `t_product` VALUES ('1', '1', '干湿两用电熨斗', '998', '139.00', '1', 'http://127.0.0.1:9000/product_img1.png', 'aa', '...', '001', '1', 'http://127.0.0.1:9000/product_img1.png,http://127.0.0.1:9000/product_img1.png,http://127.0.0.1:9000/product_img1.png', '品牌,Haier/海尔;型号,YD1618;材质,顺滑贴衣底板;最大功率,1000w(含）-1999w(含）;档位选择,4档以上;颜色分类,红白;是否迷你,迷你;调温方式,机械调温', 'http://127.0.0.1:9000/details_img1.png,http://127.0.0.1:9000/details_img2.png,http://127.0.0.1:9000/details_img3.png,http://127.0.0.1:9000/details_img4.png', '1', '1', '颜色:白色,红色;型号:005x,003x');
INSERT INTO `t_product` VALUES ('2', '2', '手持式吸尘器', '995', '425.00', '1', 'http://127.0.0.1:9000/product_img2.png', 'aa', '...', '001', '1', 'http://127.0.0.1:9000/product_img2.png,http://127.0.0.1:9000/product_img2.png,http://127.0.0.1:9000/product_img2.png', '品牌,Haier/海尔;型号,YD1618;材质,顺滑贴衣底板;最大功率,1000w(含）-1999w(含）;档位选择,4档以上;颜色分类,红白;是否迷你,迷你;调温方式,机械调温', 'http://127.0.0.1:9000/product_img2.png,http://127.0.0.1:9000/product_img2.png,http://127.0.0.1:9000/product_img2.png,http://127.0.0.1:9000/product_img2.png', '1', '1', '默认');
INSERT INTO `t_product` VALUES ('3', '3', '大功率电吹风机', '555', '198.00', '1', 'http://127.0.0.1:9000/product_img3.png', 'aa', '...', '001', '1', 'http://127.0.0.1:9000/product_img3.png,http://127.0.0.1:9000/product_img3.png,http://127.0.0.1:9000/product_img3.png', '品牌,Haier/海尔;型号,YD1618;材质,顺滑贴衣底板;最大功率,1000w(含）-1999w(含）;档位选择,4档以上;颜色分类,红白;是否迷你,迷你;调温方式,机械调温', 'http://127.0.0.1:9000/product_img3.png,http://127.0.0.1:9000/product_img3.png,http://127.0.0.1:9000/product_img3.png,http://127.0.0.1:9000/product_img3.png', '0', '0', '默认');
INSERT INTO `t_product` VALUES ('4', '4', '大功率电吹风', '154', '154.00', '0', 'http://127.0.0.1:9000/product_img4.png', 'aa', '...', '002', '2', 'http://127.0.0.1:9000/product_img4.png,http://127.0.0.1:9000/product_img4.png,http://127.0.0.1:9000/product_img4.png', '品牌,Haier/海尔;型号,YD1618;材质,顺滑贴衣底板;最大功率,1000w(含）-1999w(含）;档位选择,4档以上;颜色分类,红白;是否迷你,迷你;调温方式,机械调温', 'http://127.0.0.1:9000/product_img4.png,http://127.0.0.1:9000/product_img4.png,http://127.0.0.1:9000/product_img4.png,http://127.0.0.1:9000/product_img4.png', '1', '1', '颜色:白色,红色;型号:005x,003x');
INSERT INTO `t_product` VALUES ('5', '5', 'Amoi/夏新 BP-150202电热水壶304不锈钢防烫电热壶烧水壶电水壶', '684', '258.00', '0', 'http://127.0.0.1:9000/product_img5.png', 'aa', '...', '002', '2', 'http://127.0.0.1:9000/product_img5.png,http://127.0.0.1:9000/product_img5.png,http://127.0.0.1:9000/product_img5.png', '品牌,Haier/海尔;型号,YD1618;材质,顺滑贴衣底板;最大功率,1000w(含）-1999w(含）;档位选择,4档以上;颜色分类,红白;是否迷你,迷你;调温方式,机械调温', 'http://127.0.0.1:9000/product_img5.png', '0', '0', '默认');
INSERT INTO `t_product` VALUES ('6', '6', '惠能达家用电吹风大功率恒温离子不伤发吹风筒冷热风护发吹风机', '536', '325.00', '0', 'http://127.0.0.1:9000/product_img6.png', 'aa', '...', '002', '2', 'http://127.0.0.1:9000/product_img6.png,http://127.0.0.1:9000/product_img6.png,http://127.0.0.1:9000/product_img6.png', '品牌,Haier/海尔;型号,YD1618;材质,顺滑贴衣底板;最大功率,1000w(含）-1999w(含）;档位选择,4档以上;颜色分类,红白;是否迷你,迷你;调温方式,机械调温', 'http://127.0.0.1:9000/product_img6.png,http://127.0.0.1:9000/product_img6.png', '0', '0', '默认');
INSERT INTO `t_product` VALUES ('7', '7', '家用电风扇', '854', '219.00', '0', 'http://127.0.0.1:9000/product_img7.png', 'aa', '...', '003', '3', 'http://127.0.0.1:9000/product_img7.png,http://127.0.0.1:9000/product_img7.png,http://127.0.0.1:9000/product_img7.png', '品牌,Haier/海尔;型号,YD1618;材质,顺滑贴衣底板;最大功率,1000w(含）-1999w(含）;档位选择,4档以上;颜色分类,红白;是否迷你,迷你;调温方式,机械调温', 'http://127.0.0.1:9000/product_img7.png,http://127.0.0.1:9000/product_img7.png,http://127.0.0.1:9000/product_img7.png', '2', '1', '默认');
INSERT INTO `t_product` VALUES ('8', '8', '大空间冰箱', '587', '2999.00', '0', 'http://127.0.0.1:9000/product_img8.png', 'aa', '...', '003', '3', 'http://127.0.0.1:9000/product_img8.png,http://127.0.0.1:9000/product_img8.png,http://127.0.0.1:9000/product_img8.png', '品牌,Haier/海尔;型号,YD1618;材质,顺滑贴衣底板;最大功率,1000w(含）-1999w(含）;档位选择,4档以上;颜色分类,红白;是否迷你,迷你;调温方式,机械调温', 'http://127.0.0.1:9000/product_img8.png,http://127.0.0.1:9000/product_img8.png,http://127.0.0.1:9000/product_img8.png', '3', '1', '颜色:白色,红色;型号:005x,003x');
INSERT INTO `t_product` VALUES ('9', '9', 'SUPOR/苏泊尔 CFXB40FD8241-86家用4L升智能电饭煲电饭锅3-5-6人', '245', '658.00', '0', 'http://127.0.0.1:9000/product_img9.png', 'aa', '...', '003', '3', 'http://127.0.0.1:9000/product_img9.png,http://127.0.0.1:9000/product_img9.png,http://127.0.0.1:9000/product_img9.png', '品牌,Haier/海尔;型号,YD1618;材质,顺滑贴衣底板;最大功率,1000w(含）-1999w(含）;档位选择,4档以上;颜色分类,红白;是否迷你,迷你;调0温方式,机械调温', 'http://127.0.0.1:9000/product_img9.png,http://127.0.0.1:9000/product_img9.png,http://127.0.0.1:9000/product_img9.png', '3', '0', '默认');
INSERT INTO `t_product` VALUES ('10', '10', '多功能电饭煲', '589', '268.00', '0', 'http://127.0.0.1:9000/product_img10.png', 'aa', '...', '004', '4', 'http://127.0.0.1:9000/product_img10.png,http://127.0.0.1:9000/product_img10.png,http://127.0.0.1:9000/product_img10.png', '品牌,Haier/海尔;型号,YD1618;材质,顺滑贴衣底板;最大功率,1000w(含）-1999w(含）;档位选择,4档以上;颜色分类,红白;是否迷你,迷你;调温方式,机械调温', 'http://127.0.0.1:9000/product_img10.png,http://127.0.0.1:9000/product_img10.png', '4', '1', '默认');
INSERT INTO `t_product` VALUES ('11', '11', '电熨斗', '669', '336.00', '0', 'http://127.0.0.1:9000/product_img11.png', 'aa', '...', '004', '4', 'http://127.0.0.1:9000/product_img11.png,http://127.0.0.1:9000/product_img11.png,http://127.0.0.1:9000/product_img11.png', '品牌,Haier/海尔;型号,YD1618;材质,顺滑贴衣底板;最大功率,1000w(含）-1999w(含）;档位选择,4档以上;颜色分类,红白;是否迷你,迷你;调温方式,机械调温', 'http://127.0.0.1:9000/product_img11.png,http://127.0.0.1:9000/product_img11.png', '2', '1', '默认');
INSERT INTO `t_product` VALUES ('12', '12', '可爱热水壶', '555', '82.00', '0', 'http://127.0.0.1:9000/product_img12.png', 'aa', '...', '004', '4', 'http://127.0.0.1:9000/product_img12.png,http://127.0.0.1:9000/product_img12.png,http://127.0.0.1:9000/product_img12.png', '品牌,Haier/海尔;型号,YD1618;材质,顺滑贴衣底板;最大功率,1000w(含）-1999w(含）;档位选择,4档以上;颜色分类,红白;是否迷你,迷你;调温方式,机械调温', 'http://127.0.0.1:9000/product_img12.png,http://127.0.0.1:9000/product_img12.png,http://127.0.0.1:9000/product_img12.png', '0', '0', '颜色:白色,红色;型号:005x,003x');
