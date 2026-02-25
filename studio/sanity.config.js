import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'festiviteten',
  title: 'Festiviteten Larvik',

  // ⚠️ Replace with your Sanity Project ID from sanity.io/manage
  projectId: 'bjm2vjzp',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
