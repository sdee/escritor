export default {
    name: "dishList",
    title: "List of Dishes",
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
          name: 'dishes',
          title: 'Dishes',
          type: 'array',
          of: [
              {
                  type: 'reference',
                  to: [
                      {type: 'dish'}
                  ]
              }
          ]
      }
    ],
  };
  