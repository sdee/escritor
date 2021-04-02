const sanityClient = require('@sanity/client')
const imageUrlBuilder = require('@sanity/image-url')
const client = sanityClient({
  projectId: 'g8s29jj4', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})

const imageBuilder = imageUrlBuilder(client)
export function urlFor(source) {
  return imageBuilder.image(source)
}

export default client
