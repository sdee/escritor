import { urlFor, joinIfExists } from "../../util";
export const RestaurantItem = ({ description, restaurant, dishesToTry }) => {
  const {
    name,
    location: { neighborhood, city } = {}
  } = restaurant;   
  
  return (
    <>
      <h3>{name}</h3>
      {(neighborhood || city) && <i>{joinIfExists(neighborhood, city)}</i>}
      <p>{description}</p>
      { dishesToTry && <><b><i>Dishes to try: </i></b>{dishesToTry.join(', ')}</> } 
    </>
  );
};
