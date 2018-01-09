/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : hoxing

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-09 21:00:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_shopping
-- ----------------------------
DROP TABLE IF EXISTS `t_shopping`;
CREATE TABLE `t_shopping` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `sum` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_shopping
-- ----------------------------
INSERT INTO `t_shopping` VALUES ('1', 'http://127.0.0.1:9000/avatar_img1.png', '86.00', '1', '【买一送三】 【以换代修】清风手持式挂烫机电熨斗');
INSERT INTO `t_shopping` VALUES ('2', 'http://127.0.0.1:9000/avatar_img2.png', '54.00', '1', '进口发廊家用理发店专用大功率300w冷热风电吹风');
INSERT INTO `t_shopping` VALUES ('3', 'http://127.0.0.1:9000/avatar_img3.png', '1320.00', '1', '3D立体巡航送风/人工智能/断电记海尔 BCD-258WDPM');
INSERT INTO `t_shopping` VALUES ('4', 'http://127.0.0.1:9000/avatar_img5.png', '385.00', '1', '家用大功率/干湿吹三用/超静音小狗 D-807家用大功率/干湿吹三用/超静音小狗 D-807家用大功率/干湿吹三用/超静音小狗 D-807');
INSERT INTO `t_shopping` VALUES ('5', 'http://127.0.0.1:9000/avatar_img4.png', '280.00', '1', '球斧内胆/精孔火候/狐面立体加热苏泊尔 CFXB40FC835-75');
