/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : hoxing

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-04 13:07:13
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
  PRIMARY KEY (`pid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_product
-- ----------------------------
INSERT INTO `t_product` VALUES ('1', '1', '干湿两用电熨斗', '998', '139.00', '0', 'http://127.0.0.1:9000/product_img1.png', 'aa', '...');
