export const DishList = ({ title, dishes }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {dishes.map((dish) => (
          <li>{dish.name}</li>
        ))}
      </ul>
    </>
  );
};
