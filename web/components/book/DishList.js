import { Dish } from "./Dish";
export const DishList = ({ title, intro, dishes = [] }) => {
  return (
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
        <h2>{title}</h2>
        <p>{intro}</p>
        <ul>
          {dishes.map((dish) => (
            <Dish {...dish} />
          ))}
        </ul>
      </div>
    </div>
  );
};
