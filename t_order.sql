/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : hoxing

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-22 10:01:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_order
-- ----------------------------
DROP TABLE IF EXISTS `t_order`;
CREATE TABLE `t_order` (
  `oid` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `pid` int(11) NOT NULL,
  `status_s` varchar(255) NOT NULL DEFAULT '0',
  `sum` int(30) NOT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_order
-- ----------------------------
INSERT INTO `t_order` VALUES ('2', 'http://127.0.0.1:9000/product_img2.png', '手持式吸尘器', '425.00', '2', '1', '1');
INSERT INTO `t_order` VALUES ('3', 'http://127.0.0.1:9000/product_img4.png', '大功率电吹风', '145.00', '4', '1', '1');
INSERT INTO `t_order` VALUES ('4', 'http://127.0.0.1:9000/product_img7.png', '家用电风扇', '217.00', '7', '2', '1');
INSERT INTO `t_order` VALUES ('5', 'http://127.0.0.1:9000/product_img8.png', '大空间冰箱', '2999.00', '8', '3', '1');
INSERT INTO `t_order` VALUES ('7', 'http://127.0.0.1:9000/product_img11.png', '电熨斗', '336.00', '11', '2', '2');
INSERT INTO `t_order` VALUES ('8', 'http://127.0.0.1:9000/product_img10.png', '多功能电饭煲', '655.00', '10', '4', '1');
