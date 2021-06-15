import React from "react";
import { Photo } from "../photo";
import { urlFor, joinIfExists } from "../../util";
const CoverImage = ({ photo }) => {
  const width = 900;
  return (
    <div class="flex flex-wrap justify-center py-0">
      <figure class="py-0 mx-3 my-0">
        <img src={urlFor(photo).width(width).url()} />
      </figure>
    </div>
  );
};
export default CoverImage;
