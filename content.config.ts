import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const createAvatarSchema = () => z.object({
  src: z.string(),
  alt: z.literal('avatar').default('avatar').optional(),
  loading: z.literal('lazy').default('lazy').optional()
})
const createAuthorSchema = () => z.object({
  name: z.string(),
  description: z.string().optional(),
  username: z.string().optional(),
  to: z.string().optional(),
  avatar: createAvatarSchema().optional()
})
export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        minRead: z.number(),
        image: z.string(),
        authors: z.array(createAuthorSchema()).optional()
      })
    })
  }
})
