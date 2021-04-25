export default {
  name: "restaurantList",
  title: "List of Restaurants",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "intro",
      title: "Introduction",
      type: "text",
    },
    {
      name: "restaurants",
      title: "Restaurants and description",
      type: "array",
      of: [{ type: "restaurantBlurb" }],
    },
  ],
};
