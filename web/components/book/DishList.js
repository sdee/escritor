import { Dish } from "./Dish";
import { Photo } from "../photo";
export const DishList = ({ title, intro, dishes = [], coverImage }) => {
  return (
    <div class="mt-6 prose prose-lg prose-indigo text-gray-500 mx-auto list-none">
      <h2>{title}</h2>
      { coverImage && <Photo photo={coverImage}/> }
      <p class="pb-0">{intro}</p>
      <div class="list-none divide-y divide-gray-200">
        {dishes.map((dish) => (
          <div class="py-1 px-6" key={dish.name}>
            <Dish {...dish} />
          </div>
        ))}
      </div>
    </div>
  );
};
