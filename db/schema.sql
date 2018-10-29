
create database burgers_db;

use burgers_db;

create table `burgers_db`.`events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(45) NOT NULL,
  `devoured` boolean NOT NULL,
)