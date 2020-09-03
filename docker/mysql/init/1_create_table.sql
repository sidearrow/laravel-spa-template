CREATE TABLE `users` (
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`user_id` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_bin',
	`remember_token` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_bin',
	`first_name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_bin',
	`last_name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_bin',
	`password` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_bin',
	PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_bin'
ENGINE=InnoDB
;
