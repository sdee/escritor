const BlockContent = require("@sanity/block-content-to-react");
import { Photo } from "../photo";
export const Part = ({ title, content }) => {
    const serializers = {
        types: {
          reference: ({ node }) => {
              console.log(node);
            const { photo } = node;
            return (
                <Photo photo={photo} />
            );
          },
        },
      };
  return (
    <>
    <div class="relative px-4 sm:px-6 lg:px-8">
   <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
      <h2>{title}</h2>
        <BlockContent blocks={content} serializers={serializers} />
    </div>
    </div>
    </>
  );
};
