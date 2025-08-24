import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

export const products = sqliteTable('products', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  shortDescription: text('short_description').notNull(),
  longDescription: text('long_description').notNull(),
  price: integer('price').notNull(),
  quantity: integer('quantity').default(0),
  size: text('size', { mode: 'json' }).$type<string[]>(),
  color: text('color', { mode: 'json' }).$type<string[]>(),
  image: text('image').notNull(),
  category: text('category').notNull(),
  featured: integer('featured', { mode: 'boolean' }).default(false),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`)
})

export const newsletter = sqliteTable('newsletter', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`)
})
