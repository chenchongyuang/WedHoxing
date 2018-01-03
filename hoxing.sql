/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : hoxing

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-03 13:46:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_reged
-- ----------------------------
DROP TABLE IF EXISTS `t_reged`;
CREATE TABLE `t_reged` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `pwd` varchar(32) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `registerTime` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_reged
-- ----------------------------
INSERT INTO `t_reged` VALUES ('2', 'd715cf55804f2e6313599b98f158701c', '13927975080', '2018-01-03 09:54:48');
INSERT INTO `t_reged` VALUES ('3', '45dd9abbacf37b2049c446fc6186e27d', '13927975555', '2018-01-03 09:57:14');
INSERT INTO `t_reged` VALUES ('4', '938b45e890b00bdc117ab609fd5a77af', '13624264886', '2018-01-03 09:57:45');
INSERT INTO `t_reged` VALUES ('5', '45dd9abbacf37b2049c446fc6186e27d', '13927975081', '2018-01-03 10:09:23');
