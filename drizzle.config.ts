import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/database/schema.ts',
  out: './server/database/migrations',
  // the file where our database will be stored
  dbCredentials: {
    url: process.env.DB_FILE_NAME!
  }
})
