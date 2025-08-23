DROP INDEX `newsletter_email_unique`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_products` (
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
	`featured` integer DEFAULT false,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP,
	`updated_at` integer DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
INSERT INTO `__new_products`("id", "name", "short_description", "long_description", "price", "quantity", "size", "color", "image", "category", "featured", "created_at", "updated_at") SELECT "id", "name", "short_description", "long_description", "price", "quantity", "size", "color", "image", "category", "featured", "created_at", "updated_at" FROM `products`;--> statement-breakpoint
DROP TABLE `products`;--> statement-breakpoint
ALTER TABLE `__new_products` RENAME TO `products`;--> statement-breakpoint
PRAGMA foreign_keys=ON;