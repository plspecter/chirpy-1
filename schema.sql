--CREATE THE DATABASE
-- CREATE DATABASE chirpyy
DROP DATABASE IF EXISTS chirpyy;
USE chirpyy;

CREATE TABLE `chirps` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `author` VARCHAR( 255) NOT NULL,
  `body` VARCHAR( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);

