import { Photo } from "../photo";
import { joinIfExists } from "../../util";


export const DescriptiveRestaurantItem = ({ description, restaurant, dishesToTry }) => {
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

const DescriptiveRestaurantList = ({ restaurants }) => {
  return (
    <div class="list-none divide-y divide-gray-200 py-0">
      {restaurants.map((restaurant) => (
        <div class="pt-0 px-6 py-1">
          <DescriptiveRestaurantItem {...restaurant} />
        </div>
      ))}
    </div>
  );
};

const CompactRestaurantList = ({ restaurants }) => (
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden sm:rounded-lg">
          <table class="!px-2 min-w-full divide-y divide-gray-200">
            <tbody class="bg-white">
              {restaurants.map(({ restaurant, description }) => {
                const {
                  name,
                  location: { neighborhood, city } = {}
                } = restaurant;  
              const neighborhoodBadge = neighborhood ? (<span class="inline-flex items-center px-1 py-0.5 rounded-full text-sm font-medium bg-yellow-500 text-gray-800">
              {neighborhood}
            </span>) : <></>;
              return (
                <tr>
                  <td class="!mx-2 !px-2 py-4 w-2/12 whitespace-normal">{neighborhoodBadge}
                  </td>
                  <td class="px-1 py-4 w-2/12 whitespace-normal"><b>{name}</b></td>
                  <td class="px-1 py-4 w-8/12 whitespace-normal">
                    {description}
                  </td>
                </tr>
              );})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export const RestaurantList = ({
  title,
  intro,
  coverImage,
  compact,
  ...rest
}) => {
  const list = compact ? (
    <CompactRestaurantList {...rest} />
  ) : (
    <DescriptiveRestaurantList {...rest} />
  );
  return (
    <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto list-none">
      <h2>{title}</h2>
      {coverImage && <Photo photo={coverImage} />}
      <p class="pb-0">{intro}</p>
      {list}
    </div>
  );
};
