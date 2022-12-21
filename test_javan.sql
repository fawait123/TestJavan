/*
SQLyog Ultimate v12.5.1 (64 bit)
MySQL - 5.7.36 : Database - test_javan
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`test_javan` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `test_javan`;

/*Table structure for table `assets` */

DROP TABLE IF EXISTS `assets`;

CREATE TABLE `assets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `family_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

/*Data for the table `assets` */

insert  into `assets`(`id`,`name`,`price`,`createdAt`,`updatedAt`,`deletedAt`,`family_id`) values 
(1,'Samsung Universe 9',1249,'2022-12-21 15:49:56','2022-12-21 16:36:05',NULL,2),
(2,' Samsung Galaxy Book',1200,'2022-12-21 15:54:18','2022-12-21 16:37:01',NULL,2),
(3,'Iphone 9',550,'2022-12-21 16:01:08','2022-12-21 16:05:06','2022-12-21 16:05:06',1),
(4,'Iphone 9',549,'2022-12-21 16:18:32','2022-12-21 16:37:36',NULL,4),
(5,'Huawei P30',499,'2022-12-21 16:24:52','2022-12-21 16:40:24',NULL,6),
(6,'Iphone XS',5000,'2022-12-21 16:25:13','2022-12-21 16:25:55','2022-12-21 16:25:55',6),
(7,'Samsung Galaxy Book',1499,'2022-12-21 16:30:13','2022-12-21 16:42:23',NULL,9),
(8,'Iphone X',899,'2022-12-21 16:38:30','2022-12-21 16:38:30',NULL,12),
(9,'Huawei P30',499,'2022-12-21 16:39:08','2022-12-21 16:39:08',NULL,7),
(10,'Samsung Universe 9',1249,'2022-12-21 16:39:40','2022-12-21 16:39:40',NULL,5),
(11,'Iphone X',899,'2022-12-21 16:40:53','2022-12-21 16:40:53',NULL,6),
(12,'Samsung Universe 9',1249,'2022-12-21 16:41:46','2022-12-21 16:41:46',NULL,8),
(13,'Huawei P30',499,'2022-12-21 16:43:12','2022-12-21 16:43:12',NULL,13),
(14,'iPhone X',899,'2022-12-21 16:43:53','2022-12-21 16:43:53',NULL,14);

/*Table structure for table `families` */

DROP TABLE IF EXISTS `families`;

CREATE TABLE `families` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `gender` enum('male','female') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

/*Data for the table `families` */

insert  into `families`(`id`,`name`,`gender`,`createdAt`,`updatedAt`,`deletedAt`) values 
(1,'Iphone 9','male','2022-12-21 13:26:51','2022-12-21 16:03:46','2022-12-21 23:23:21'),
(2,'Budi','male','2022-12-21 13:27:19','2022-12-21 13:27:19',NULL),
(3,'Bani','male','2022-12-21 13:27:26','2022-12-21 16:31:30',NULL),
(4,'Hari','male','2022-12-21 13:27:50','2022-12-21 16:44:38',NULL),
(5,'Bila','female','2022-12-21 13:27:56','2022-12-21 13:27:56',NULL),
(6,'Lesti','female','2022-12-21 13:28:02','2022-12-21 16:25:36',NULL),
(7,'Nida','female','2022-12-21 13:43:29','2022-12-21 13:52:09',NULL),
(8,'Andi','male','2022-12-21 13:46:09','2022-12-21 13:52:25',NULL),
(9,'Diki','male','2022-12-21 13:46:26','2022-12-21 13:57:41',NULL),
(10,'Sigit','male','2022-12-21 14:10:17','2022-12-21 14:16:08','2022-12-21 14:16:08'),
(11,'Toni','male','2022-12-21 16:17:44','2022-12-21 16:18:03','2022-12-21 16:18:03'),
(12,'Siti','female','2022-12-21 16:38:06','2022-12-21 16:38:06',NULL),
(13,'Sigit','male','2022-12-21 16:42:55','2022-12-21 16:42:55',NULL),
(14,'Doni','male','2022-12-21 16:43:36','2022-12-21 16:43:36',NULL),
(15,'Toni','male','2022-12-21 16:44:11','2022-12-21 16:44:11',NULL);

/*Table structure for table `sequelizemeta` */

DROP TABLE IF EXISTS `sequelizemeta`;

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `sequelizemeta` */

insert  into `sequelizemeta`(`name`) values 
('20221221113258-create-family.js'),
('20221221114910-create-asset.js'),
('20221221150741-add-column-to-asset-table.js');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
