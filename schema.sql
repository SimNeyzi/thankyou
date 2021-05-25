
-- mysql -u root < schema.sql
DROP DATABASE IF EXISTS Thankyous;
CREATE DATABASE Thankyous;

USE Thankyous;

-- ---
-- Table 'Users'
--
-- ---

-- DROP TABLE IF EXISTS `Users`;

CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(100) NULL DEFAULT NULL,
  `user_email` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Thankyou'
--
-- ---

DROP TABLE IF EXISTS `sentthankyous`;

CREATE TABLE `sentthankyous` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `text` TEXT,
  `sender` INTEGER,
  `receiver` INTEGER,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `sentthankyous` ADD FOREIGN KEY (sender) REFERENCES `Users` (`id`);
ALTER TABLE `sentthankyous` ADD FOREIGN KEY (receiver) REFERENCES `Users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Thankyou` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `users` (`user_name`, `user_email` ) VALUES
('Sim Neyzi','simneyzi@gmail.com');
INSERT INTO `users` (`user_name` ) VALUES
('Jack Drggs');
INSERT INTO `users` (`user_name` ) VALUES
('Liu Kang');
INSERT INTO `users` (`user_name`) VALUES
('Sonya Blade');
INSERT INTO `users` (`user_name`) VALUES
('Jonny Cage');
INSERT INTO `users` (`user_name`) VALUES
('Shang Tsung');


INSERT INTO `sentthankyous` (`text`,`sender`,`receiver`) VALUES
('Thanks for helping me with my training!','4','1');

INSERT INTO `sentthankyous` (`text`,`sender`,`receiver`) VALUES
('Thanks for being AWESOME!','3','1');

INSERT INTO `sentthankyous` (`text`,`sender`,`receiver`) VALUES
('Thanks for taking the time to explain me xyz today','2','1');

INSERT INTO `sentthankyous` (`text`,`sender`,`receiver`) VALUES
('Thank you for your contribution to the project','6','1');

INSERT INTO `sentthankyous` (`text`,`sender`,`receiver`) VALUES
('Thank you for helping me understand xyz','4','1');

INSERT INTO `sentthankyous` (`text`,`sender`,`receiver`) VALUES
('Thanks you!','6','1');

INSERT INTO `sentthankyous` (`text`,`sender`,`receiver`) VALUES
('Appreciate the help today!','1','5');

INSERT INTO `sentthankyous` (`text`,`sender`,`receiver`) VALUES
('Thanks for showing me the xyz database','1','4');

INSERT INTO `sentthankyous` (`text`,`sender`,`receiver`) VALUES
('Thanks for reviewing my code!','1','6');

INSERT INTO `sentthankyous` (`text`,`sender`,`receiver`) VALUES
('Thanks you for creating the doc','1','5');

INSERT INTO `sentthankyous` (`text`,`sender`,`receiver`) VALUES
('Thanks for the donuts','1','2');

INSERT INTO `sentthankyous` (`text`,`sender`,`receiver`) VALUES
('I love working with you','1','3');