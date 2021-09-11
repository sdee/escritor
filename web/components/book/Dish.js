import { Photo } from "../photo";
const BlockContent = require("@sanity/block-content-to-react");

export const Variants = ({ variants }) => {
  return (
    <div>
      <b>Variations</b>
      <ul>
        {variants.map((v) => (
          <li>
            <b>{v.name}: </b>
            {v.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
const serializers = {
  types: {
    reference: ( {node} ) => {
      const { photo } = node;
      return <Photo photo={photo} />;
    },
  },
};

export const Dish = ({ mainPhoto, name, description, variants = [], secondaryPhoto }) => {
  return (
    <div class="pt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
    {mainPhoto && <Photo photo={mainPhoto}/>}
      <BlockContent blocks={description} serializers={serializers} />
      {variants.length > 0 ? <Variants variants={variants} /> : <></>}
      {secondaryPhoto ? <Photo photo={secondaryPhoto}/> : <></>}
    </div>
  );
};
