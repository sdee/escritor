import { Photo } from "../photo";
const BlockContent = require("@sanity/block-content-to-react");

export const Variants = ({ variants }) => {
  return (
    <div>
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

export const Dish = ({ mainPhoto, name, description, variants = [], secondaryPhoto }) => {
  return (
    <>
    {mainPhoto && <Photo photo={mainPhoto}/>}
      <BlockContent blocks={description} />
      {variants ? <Variants variants={variants} /> : <></>}
      {secondaryPhoto ? <Photo photo={secondaryPhoto}/> : <></>}
    </>
  );
};
