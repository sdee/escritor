import { Dish } from "./Dish";
export const DishList = ({ title, intro, dishes = [] }) => {
  return (
    <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto list-none">
      <h2>{title}</h2>
      <p class="pb-0">{intro}</p>
      <div class="list-none divide-y divide-gray-200 py-0">
        {/* <div class="py-1.5 px-6"></div> */}
        {dishes.map((dish) => (
          <div class="py-0 px-6">
            <Dish {...dish} />
          </div>
        ))}
      </div>
    </div>
  );
};
