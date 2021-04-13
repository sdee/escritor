import client from "../client";
import { Photo } from "../components/photo";
const BlockContent = require("@sanity/block-content-to-react");

const Post = ({ title, body }) => {
  const serializers = {
    types: {
      reference: ({ node }) => {
        const { photo } = node;
        return (
          <>
            <Photo photo={photo} />
            <br />
          </>
        );
      },
    },
  };
  return (
    <>
      <h2>{title}</h2>
      <BlockContent blocks={body} serializers={serializers}></BlockContent>
    </>
  );
};

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  let { slug = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "post" && slug.current==$slug][0]{body[]{..., _type=='reference' => {"photo":@->{image, caption, place->, dish->}}}, title}
    `,
    { slug }
  );
};

export default Post;
