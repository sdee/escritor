const client = require("./client");

module.exports = {
  // Make sure that your node enviroment supports async/await
  exportPathMap: async function (defaultPathMap) {
    // start with basic static routes
    const pathMap = { "/": { page: "/" }, "/about": {page: "/about"}, "/thankyou": {page: "/thankyou"} }
    // now dynamically generate routes
    await client
      .fetch('*[_type == "post"].slug.current')
      .then((data) =>
        data.forEach(
          (slug) =>
            (pathMap[`/blog/${slug}`] = { page: "/post", query: { slug } })
        )
      )
    await client.fetch('*[_type == "chapter"].slug.current').then((data)=>data.forEach((slug)=>(pathMap[`/book/chapter/${slug}`] = { page: "/chapter", query: { slug } })))
    return pathMap;
  },
};