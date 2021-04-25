import {RestaurantItem} from "./RestaurantItem";
import { Photo } from "../photo";
export const RestaurantList = ({ title, intro, restaurants, coverImage}) => {
  return (
    <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto list-none">
      <h2>{title}</h2>
      { coverImage && <Photo photo={coverImage}/> }
      <p class="pb-0">{intro}</p>
      <div class="list-none divide-y divide-gray-200 py-0">
        {restaurants.map((restaurant) => (
          <div class="py-1 px-6">
            <RestaurantItem {...restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};
