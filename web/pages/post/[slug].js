import client from "../../client";
const BlockContent = require("@sanity/block-content-to-react");

const Post = ({ body, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <BlockContent blocks={body}></BlockContent>
    </>
  );
};

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  let { slug = [] } = context.query;
  slug = slug[0];
  return await client.fetch(
    `
      *[_type == "post"][0]{body, title}
    `,
    { slug }
  );
};

export default Post;
