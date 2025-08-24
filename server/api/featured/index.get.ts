import { products } from '~~/server/database/schema'
import { eq } from 'drizzle-orm'

export default eventHandler(async () => {
  console.log('start getting featured products')
  const featuredProducts = await useDrizzle()
    .select()
    .from(products)
    .where(eq(products.featured, true))
    .all()
  console.log('featuredProducts', featuredProducts)

  return featuredProducts
})
