// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)
const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.coerce.boolean().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
})
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
  }),
})

const audio = defineCollection({
  loader: glob({ pattern: "audio/content.mdx", base: './src/content/portfolio' }),
  schema: z.array(
    z.object({
      category: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          link: z.string(),
          publication: z.string(),
        })
      )
    })
  )
})
const writing = defineCollection({
  loader: glob({ pattern: "writing/content.mdx", base: './src/content/portfolio' }),
  schema: z.array(
    z.object({
      category: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          link: z.string(),
          publication: z.string(),
        })
      )
    })
  )
})

const speaking = defineCollection({
  loader: glob({ pattern: "speaking/content.mdx", base: './src/content/portfolio' }),
  schema: z.array(
    z.string()
  )
})

const services = defineCollection({
  loader: glob({ pattern: "services/content.mdx", base: './src/content/portfolio' }),
  schema: z.array(
    z.string()
  )
})

// 4. Export a single `collections` object to register you collection(s)
export const collections = { posts, projects, audio, writing, speaking, services }
