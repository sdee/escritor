export const DishList = ({ title, dishes }) => {
  return (
    <div class="relative px-4 sm:px-6 lg:px-8">

    <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
      <h2>{title}</h2>
      <ul>
        {dishes.map((dish) => (
          <li>{dish.name}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};
