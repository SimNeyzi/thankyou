
-- mysql -u root < /schema.sql
DROP DATABASE IF EXISTS Thankyous;
CREATE DATABASE Thankyous;

USE Thankyous;

-- ---
-- Table 'Users'
--
-- ---

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Thankyou'
--
-- ---

DROP TABLE IF EXISTS `Sentthankyous`;

CREATE TABLE `Sentthankyous` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `text` TEXT,
  `sender` INTEGER NOT NULL,
  `receiver` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Sentthankyous` ADD FOREIGN KEY (sender) REFERENCES `Users` (`id`);
ALTER TABLE `Sentthankyous` ADD FOREIGN KEY (receiver) REFERENCES `Users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Thankyou` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`user_name`) VALUES
-- ('','');
-- INSERT INTO `Thankyou` (`id`,`text`,`sender`,`receiver`) VALUES
-- ('','','','');