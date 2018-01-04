/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : hoxing

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-04 13:07:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_goods_category
-- ----------------------------
DROP TABLE IF EXISTS `t_goods_category`;
CREATE TABLE `t_goods_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `sort_order` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `is_hot` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_goods_category
-- ----------------------------
INSERT INTO `t_goods_category` VALUES ('1', '熨烫电器', '1', 'http://127.0.0.1:9000/icon.png', '1');
INSERT INTO `t_goods_category` VALUES ('2', '个人护理', '2', 'http://127.0.0.1:9000/icon1.png', '1');
INSERT INTO `t_goods_category` VALUES ('3', '生活电器', '3', 'http://127.0.0.1:9000/icon2.png', '1');
INSERT INTO `t_goods_category` VALUES ('4', '西式电器', '4', 'http://127.0.0.1:9000/icon3.png', '1');
INSERT INTO `t_goods_category` VALUES ('5', '中式电器', '5', 'http://127.0.0.1:9000/icon4.png', '1');
INSERT INTO `t_goods_category` VALUES ('6', '挂烫机', '6', 'http://127.0.0.1:9000/icon.png', '0');
INSERT INTO `t_goods_category` VALUES ('7', '电熨斗', '7', 'http://127.0.0.1:9000/icon.png', '0');
INSERT INTO `t_goods_category` VALUES ('8', '电吹风', '8', 'http://127.0.0.1:9000/icon.png', '0');
INSERT INTO `t_goods_category` VALUES ('9', '加湿器', '9', 'http://127.0.0.1:9000/icon.png', '0');
INSERT INTO `t_goods_category` VALUES ('10', '电水壶', '10', 'http://127.0.0.1:9000/icon.png', '0');
INSERT INTO `t_goods_category` VALUES ('11', '足浴盆', '11', 'http://127.0.0.1:9000/icon.png', '0');
INSERT INTO `t_goods_category` VALUES ('12', '面包机', '12', 'http://127.0.0.1:9000/icon.png', '0');
INSERT INTO `t_goods_category` VALUES ('13', '蛋糕机', '13', 'http://127.0.0.1:9000/icon.png', '0');
INSERT INTO `t_goods_category` VALUES ('14', '电饭煲', '14', 'http://127.0.0.1:9000/icon.png', '0');
INSERT INTO `t_goods_category` VALUES ('15', '电蒸锅', '15', 'http://127.0.0.1:9000/icon.png', '0');
INSERT INTO `t_goods_category` VALUES ('16', '空气炸锅', '16', 'http://127.0.0.1:9000/icon.png', '0');
INSERT INTO `t_goods_category` VALUES ('17', '毛球修剪器', '17', 'http://127.0.0.1:9000/icon.png', '0');