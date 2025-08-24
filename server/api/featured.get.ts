import { eq } from 'drizzle-orm'

export default eventHandler(async () => {
  console.log('start getting featured products')
  const featuredProducts = await useDrizzle()
    .select()
    .from(tables.products)
    .where(eq(tables.products.featured, true))
    .all()

  console.log('featuredProducts', featuredProducts)

  return featuredProducts as Products[]
})
