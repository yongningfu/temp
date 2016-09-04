DROP TABLE IF EXISTS `account`;

CREATE TABLE `account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(100) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `account` (`account`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `position`;

CREATE TABLE `position` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `launcher_id` int(11) NOT NULL,
  `longitude` decimal(10,7) DEFAULT '999.9999999',
  `latitude` decimal(10,7) DEFAULT '999.9999999',
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`launcher_id`) REFERENCES `account`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;












