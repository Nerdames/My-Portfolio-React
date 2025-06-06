import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'uxfiqyql',
    dataset: 'production',
  },
  studioHost: 'james-orjiene-portfolio', // ✅ Sets your custom domain
  autoUpdates: true,
})
