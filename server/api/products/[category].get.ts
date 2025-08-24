export default eventHandler(async (event) => {
  const { category } = getRouterParams(event)

  const products = await useDrizzle()
    .select()
    .from(tables.products)
    .where(eq(tables.products.category, category))
    .all()

  return products as Products[]
})
