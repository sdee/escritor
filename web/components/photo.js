import { urlFor, joinIfExists } from "../util";

const _formatPlace = ({ name, _type, location=""}) => {
  let placeString = "";
  const { address="", neighborhood, city } = location;
  const cityString = joinIfExists(neighborhood, city);
  // Example:  El Mercado (Av Hipólito Unanue 203, Miraflores, Lima) 
  if (_type === "restaurant" && address) {
    placeString = `${name} (${[address, cityString].join(", ")})`;
  // Example: Canta Rana, Barranco, Lima
  } else {
    placeString = joinIfExists(name, cityString);
  }
  return placeString;
};

export const Caption = ({ caption, place, dish }) => {
  let formattedCaption = "";
  if (caption) {
    // custom caption from data store overrides automated caption
    formattedCaption = caption;
  } else {
    // Example: "Lomo Saltado at Danica"
    if (dish && place) {
      let locationString = _formatPlace(place);
      formattedCaption = `${dish.name} at ${locationString}`;
      // Example: "Lomo Saltado"
    } else if (dish) {
      formattedCaption = dish;
      // Example: "El Mercado, Miraflores, Lima"
    } else if (place) {
      formattedCaption = _formatPlace(place);
    }
  }
  return formattedCaption ?<figcaption><i>{formattedCaption}</i></figcaption> : <></>;
};

export const Photo = ({ photo: { place, image, caption, dish, vertical}={}, customWidth }) => {
  let width;
  width = vertical ? 300 : 500;
  width = customWidth ? customWidth : width;
  return (
    <div class="flex flex-wrap justify-center py-0">
    <figure class="py-0 mx-3 my-0">
      <img src={urlFor(image).width(width).url()} />
      <Caption caption={caption} dish={dish} place={place} />
    </figure>
    </div>
  );
};