import client, {urlFor} from "../client";
const BlockContent = require("@sanity/block-content-to-react");
const imageUrlBuilder = require('@sanity/image-url')

const Post = ({title, body}) => {
  const serializers = {
    types: {
      reference: ({node}) => {
        return (
        <pre>
          <img src={urlFor(node.photo.image).width(200).url()} />
        </pre>
      )
      }
    }
  }
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
    *[_type == "post" && slug.current=='all-about-tacu-tacu'][0]{body[]{..., _type=='reference' => {"photo":@->}}, title}
    `,
    { slug }
  );
};

export default Post;
