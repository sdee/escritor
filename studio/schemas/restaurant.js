export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "Restaurant Name",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "location",
    },
    { name: "toTry", title: "Want to Try", type: "boolean" },
  ],
};
