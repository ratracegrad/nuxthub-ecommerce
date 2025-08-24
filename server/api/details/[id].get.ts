import { eq } from 'drizzle-orm'
import { useValidatedParams, zh } from 'h3-zod'

export default eventHandler(async (event) => {
  const { id } = await useValidatedParams(event, {
    id: zh.intAsString
  })

  const products = await useDrizzle()
    .select()
    .from(tables.products)
    .where(eq(tables.products.id, id))
    .all()

  return products[0] as Products | null
})
