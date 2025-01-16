import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemaTypes from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'production',

  projectId: 'fz5xi0uj',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
