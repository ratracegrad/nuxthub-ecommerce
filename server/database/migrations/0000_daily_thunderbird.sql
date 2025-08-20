CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`short_description` text NOT NULL,
	`long_description` text NOT NULL,
	`price` integer NOT NULL,
	`quantity` integer DEFAULT 0,
	`size` text,
	`color` text,
	`image` text NOT NULL,
	`category` text NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP,
	`updated_at` integer DEFAULT CURRENT_TIMESTAMP
);
