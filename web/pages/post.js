import client from "../client";
const BlockContent = require("@sanity/block-content-to-react");

const Post = ({ body, title }) => {
  return (
    <>
    Test
      <h2>{title}</h2>
      <BlockContent blocks={body}></BlockContent>
    </>
  );
};

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  let { slug = "" } = context.query;
  
  return await client.fetch(
    `
      *[_type == "post" && slug.current==$slug][0]{body, title}
    `,
    { slug }
  );
};

export default Post;
