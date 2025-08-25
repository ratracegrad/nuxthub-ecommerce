import { useValidatedBody, z } from 'h3-zod'

export default eventHandler(async (event) => {
  const { email } = await useValidatedBody(event, {
    email: z.email()
  })

  const emailEntry = await useDrizzle()
    .insert(tables.newsletter)
    .values({
      email: email
    })
    .onConflictDoUpdate({
      target: [tables.newsletter.email],
      set: {
        updatedAt: new Date()
      }
    })
    .returning()
    .get()

  return emailEntry as NewsLetterInsert
})
