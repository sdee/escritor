import {urlFor} from "../util";

const joinIfExists = (...arr) => arr.filter(x => !!x).join(', ');

const _formatPlace = ({name, _type, location}) => {
    let placeString = '';
    const {address, neighborhood, city} = location;
    let cityString = joinIfExists(neighborhood, city);
    if (_type==="restaurant" && address) {
        placeString = `${name} (${[address, cityString].join(', ')})`;
    }
    else {
         placeString = joinIfExists(name, cityString);
    }
    return placeString;
}

export const Caption = ({ caption, place, dish }) => {
  let formattedCaption = '';
  if (caption) {
    formattedCaption = caption;
  } else {
      if (dish && place) {
        console.log("TYPE", place._type);
        console.log(place)
        let locationString = _formatPlace(place);
        // if (place._type==="restaurant") {
        //     let restaurant = place.name;
        //     formattedPlace = [restaurant, locationString].join(', ')
        // }
        formattedCaption = `${dish.name} at ${locationString}`
      } else if (dish) {
          formattedCaption = dish;
      }
        else if (place) {
            formattedCaption = _formatPlace(place.name, place.location)
          }
    
  }
  return <i>{formattedCaption}</i>;
};

export const Photo = ({ photo: { place, image, caption, dish } }) => {
  console.log(place);
  console.log(image);
  console.log(caption);
  console.log(dish);    



  return (
    <>
      <img src={urlFor(image).width(600).url()} /> <br />
      <Caption caption={caption} dish={dish} place={place} /> <br />
    </>
  );
};
