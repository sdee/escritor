export default {
  name: "chapter",
  title: "Chapter",
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
      name: "parts",
      title: "Parts",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "part" }, { type: "dishList" }],
        },
      ],
    },
  ],
};
