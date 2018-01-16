/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : hoxing

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-16 18:52:34
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
  `uname` varchar(255) NOT NULL,
  `registerTime` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `loginstatus` int(11) DEFAULT '0',
  `ger` varchar(255) DEFAULT NULL,
  `u_address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_reged
-- ----------------------------
INSERT INTO `t_reged` VALUES ('2', '9fee823656cdf98ee07813e904daaa34', '13927975080', '谷歌', '2018-01-16 18:49:51', '1', '', '', '962390910@qq.com');
INSERT INTO `t_reged` VALUES ('3', '45dd9abbacf37b2049c446fc6186e27d', '13927975555', '广告', '2018-01-09 20:24:06', '0', '', '', '');
INSERT INTO `t_reged` VALUES ('4', '938b45e890b00bdc117ab609fd5a77af', '13624264886', '公关', '2018-01-09 20:24:08', '0', '', '', '');
INSERT INTO `t_reged` VALUES ('5', '45dd9abbacf37b2049c446fc6186e27d', '13927975081', '怪怪的', '2018-01-09 20:24:13', '0', '', '', '');
INSERT INTO `t_reged` VALUES ('6', '6d2bdbd40412d9cbea018560cffd870e', '13624265456', '刚刚', '2018-01-05 10:02:46', '0', '', '', '');
INSERT INTO `t_reged` VALUES ('8', 'aaeadb227d6da074df3236475e2776d9', '13927975369', '677789', '2018-01-16 18:48:20', '0', null, null, null);
INSERT INTO `t_reged` VALUES ('9', '880c955f27896d8cdcd830fc96b0bb62', '13512541254', '731566', '2018-01-16 18:48:59', '0', null, null, null);
