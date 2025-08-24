export default defineEventHandler(async (event) => {
  const { email } = await readBody(event)
  try {
    const emailEntry = await useDrizzle()
      .insert(tables.newsletter)
      .values({ email: email })
      .returning()
      .get()

    return emailEntry
  } catch (error) {
    console.error('ERROR', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message ?? 'Failed to add email to newsletter'
    })
  }
})
