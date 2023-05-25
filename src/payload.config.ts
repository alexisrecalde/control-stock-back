import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Products from './collections/product/product';
import redirects from '@payloadcms/plugin-redirects';
import Nav from './globals/Nav';
import Pages from './collections/pages/Pages';

export default buildConfig({
  serverURL: 'http://localhost:8080',
  cors: "*",
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Products,
    Pages
    // Add Collections here
    // Examples,
  ],
  globals: [Nav],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
   plugins: [
    redirects({
      collections: ['pages'],
    }),
  ],
})
