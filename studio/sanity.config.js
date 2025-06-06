import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas/schema' // ✅ Make sure this file exists

export default defineConfig({
  name: 'default',
  title: 'my-portfolio',

  projectId: 'uxfiqyql',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
