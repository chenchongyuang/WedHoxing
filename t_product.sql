/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : hoxing

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-05 13:00:12
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
  PRIMARY KEY (`pid`),
  KEY `class` (`class`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_product
-- ----------------------------
INSERT INTO `t_product` VALUES ('1', '1', '干湿两用电熨斗', '998', '139.00', '1', 'http://127.0.0.1:9000/product_img1.png', 'aa', '...', '001', '1');
INSERT INTO `t_product` VALUES ('2', '2', '手持式吸尘器', '995', '425.00', '1', 'http://127.0.0.1:9000/product_img2.png', 'aa', '...', '001', '1');
INSERT INTO `t_product` VALUES ('3', '3', '大功率电吹风机', '555', '198.00', '1', 'http://127.0.0.1:9000/product_img3.png', 'aa', '...', '001', '1');
INSERT INTO `t_product` VALUES ('4', '4', '大功率电吹风', '154', '154.00', '0', 'http://127.0.0.1:9000/product_img4.png', 'aa', '...', '002', '2');
INSERT INTO `t_product` VALUES ('5', '5', '电热水壶', '684', '258.00', '0', 'http://127.0.0.1:9000/product_img5.png', 'aa', '...', '002', '2');
INSERT INTO `t_product` VALUES ('6', '6', '大功率电吹风机', '536', '325.00', '0', 'http://127.0.0.1:9000/product_img6.png', 'aa', '...', '002', '2');
INSERT INTO `t_product` VALUES ('7', '7', '家用电风扇', '854', '219.00', '0', 'http://127.0.0.1:9000/product_img7.png', 'aa', '...', '003', '3');
INSERT INTO `t_product` VALUES ('8', '8', '大空间冰箱', '587', '2999.00', '0', 'http://127.0.0.1:9000/product_img8.png', 'aa', '...', '003', '3');
INSERT INTO `t_product` VALUES ('9', '9', '大松电饭煲', '245', '658.00', '0', 'http://127.0.0.1:9000/product_img9.png', 'aa', '...', '003', '3');
INSERT INTO `t_product` VALUES ('10', '10', '多功能电饭煲', '589', '268.00', '0', 'http://127.0.0.1:9000/product_img10.png', 'aa', '...', '004', '4');
INSERT INTO `t_product` VALUES ('11', '11', '电熨斗', '669', '336.00', '0', 'http://127.0.0.1:9000/product_img11.png', 'aa', '...', '004', '4');
INSERT INTO `t_product` VALUES ('12', '12', '可爱热水壶', '555', '82.00', '0', 'http://127.0.0.1:9000/product_img12.png', 'aa', '...', '004', '4');
