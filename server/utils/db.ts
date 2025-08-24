import { drizzle } from 'drizzle-orm/d1'
import * as schema from '../database/schema'

export { sql, eq, and, or } from 'drizzle-orm'

export const tables = schema

export function useDrizzle() {
  return drizzle(hubDatabase(), { schema })
}

export type Products = typeof tables.products.$inferSelect
export type ProductsInsert = typeof tables.products.$inferInsert
export type NewsLetter = typeof tables.newsletter.$inferSelect
export type NewsLetterInsert = typeof tables.newsletter.$inferInsert
