/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : hoxing

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-12 12:49:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_address
-- ----------------------------
DROP TABLE IF EXISTS `t_address`;
CREATE TABLE `t_address` (
  `aid` int(11) NOT NULL AUTO_INCREMENT,
  `aname` varchar(255) NOT NULL,
  `uname` varchar(255) NOT NULL,
  `uphone` varchar(255) NOT NULL,
  `aphone` varchar(255) NOT NULL,
  `area` varchar(255) NOT NULL,
  `detailed_area` varchar(255) NOT NULL,
  `default` int(11) NOT NULL DEFAULT '0',
  `uid` int(11) NOT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_address
-- ----------------------------
INSERT INTO `t_address` VALUES ('13', '谷歌', '', '', '13927975080', '撒大声地', '达大厦', '0', '0');
INSERT INTO `t_address` VALUES ('4', '刚刚', '谷歌', '13927975080', '13525105525', '广东省广州市天河区', '广告', '1', '0');
INSERT INTO `t_address` VALUES ('14', '公关', '谷歌', '13927975080', '13927975080', '沙发上嘎嘎嘎', '发送发发发', '0', '0');
INSERT INTO `t_address` VALUES ('15', '公关', '谷歌', '13927975080', '13927975080', '沙发上嘎嘎嘎', '发送发发发', '0', '0');
INSERT INTO `t_address` VALUES ('16', 'gg', '谷歌', '13927975080', '13927975080', 'fasfasfasfaf', 'fsa5f4as456f', '0', '0');
