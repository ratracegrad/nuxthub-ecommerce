export default eventHandler(async () => {
  const products = await useDrizzle()
    .select()
    .from(tables.products)
    .where(eq(tables.products.featured, 1))
    .all()

  return products
})
