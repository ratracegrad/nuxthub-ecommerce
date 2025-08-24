import { eq } from 'drizzle-orm'

export default eventHandler(async () => {
  const featuredProducts = await useDrizzle()
    .select()
    .from(tables.products)
    .where(eq(tables.products.featured, true))
    .all()

  return featuredProducts as Products[]
})
