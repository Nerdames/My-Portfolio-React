// src/sanity.js

import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: 'uxfiqyql',        // ✅ Your real Sanity project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-06-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export default client
