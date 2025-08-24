export default eventHandler(async () => {
  const categories = await useDrizzle()
    .selectDistinct({ category: tables.products.category })
    .from(tables.products)
    .all()

  return categories as { category: string }[]
})
