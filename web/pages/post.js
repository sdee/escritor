import client from "../client";
import { Photo } from "../components/photo";
import CoverImage from "../components/blog/CoverImage";
const BlockContent = require("@sanity/block-content-to-react");

const Post = ({ title, body, coverImage }) => {
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
    <div class="relative py-16 bg-white overflow-hidden">
    <h1>
      <span class="mt-2 block text-4xl text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </span>
    </h1>
    <br/>
    <>
      { coverImage && <CoverImage photo={coverImage}/> }
      <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
      <BlockContent blocks={body} serializers={serializers} />
      </div>
      </div>
    </>
    </div>
  );
};

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  let { slug = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "post" && slug.current==$slug][0]{body[]{..., _type=='reference' => {"photo":@->{image, caption, place->, dish->}}}, title, coverImage}
    `,
    { slug }
  );
};

export default Post;
