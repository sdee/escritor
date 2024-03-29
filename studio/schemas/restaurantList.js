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
    {
      name: "coverImage",
      title: "Cover Image",
      type: "reference",
      to: [{type: "photo"}]
    },
    {
      name: "compact",
      title: "Compact?",
      type: 'boolean',
    }
  ],
};
