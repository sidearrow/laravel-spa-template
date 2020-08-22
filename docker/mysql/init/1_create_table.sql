CREATE TABLE `users` (
	`user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`first_name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_bin',
	`last_name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_bin',
	`password` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_bin',
	PRIMARY KEY (`user_id`)
)
COLLATE='utf8mb4_bin'
ENGINE=InnoDB
;
