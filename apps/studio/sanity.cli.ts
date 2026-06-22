import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'z5d8ivg0',
    dataset: 'production',
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
  typegen: {
    path: ['../../packages/sanity/src/**/*.{ts,tsx}'],
    schema: './schema.json',
    generates: '../../packages/sanity/generated/sanity.types.ts',
    overloadClientMethods: true,
  },
})
