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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
