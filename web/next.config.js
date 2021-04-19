const client = require('./client')

module.exports = {
  // Make sure that your node enviroment supports async/await
  exportPathMap: async function (defaultPathMap) {
  
    const path = await client
      // get all the posts and return those with slugs
      .fetch('*[_type == "post"].slug.current')
      .then(data =>
        {
        // use reduce to build an object with routes
        // and select the blog.js file, and send in the
        // correct query paramater.
        const routes = data.reduce(
          (acc, slug) => {console.log(slug); return ({
            '/': { page: '/' },
            ...acc,
            [`/blog/${slug}`]: { page: '/post', query: { slug } }
          })},
          {}
       
          )
          console.log(routes)
          return routes;

        }
        
      )
      .catch(console.error)
    return path
  }
}