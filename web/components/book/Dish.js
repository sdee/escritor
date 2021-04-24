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

export const Dish = ({ mainPhoto = {}, name, description, variants = [] }) => {
  return (
    <>
      <BlockContent blocks={description} />
      {variants ? <Variants variants={variants} /> : <></>}
    </>
  );
};
