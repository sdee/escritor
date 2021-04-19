const sanityClient = require('@sanity/client')
const dataset = process.env.SANITY_STUDIO_API_DATASET

module.exports =  sanityClient({
  projectId: 'g8s29jj4', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: false // `false` if you want to ensure fresh data
})