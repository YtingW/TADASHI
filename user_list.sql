/*
Navicat MySQL Data Transfer

Source Server         : wamp
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : tadashi_user

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2018-05-25 16:45:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user_list`
-- ----------------------------
DROP TABLE IF EXISTS `user_list`;
CREATE TABLE `user_list` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `username` varchar(128) CHARACTER SET utf8 COLLATE utf8_icelandic_ci NOT NULL,
  `password` varchar(128) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user_list
-- ----------------------------
INSERT INTO `user_list` VALUES ('21', '18236567537', '63d80336e51aeb33cb156fa44e78428f');
