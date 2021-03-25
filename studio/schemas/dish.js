export default {
    name: 'dish',
    title: 'Dish',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'blockContent',
          },
          {
            name: 'summary',
            title: 'Short summary',
            type: 'string',
          },
          {
              name: 'variationDescription',
              title: 'Variation Description',
              type: 'string'
          },
          {
              name: 'variants', 
              title: 'Variants', 
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [
                    {type: 'dish'},
                  ]
                }
              ]
          },
          {
            name: 'subgenre',
            title: 'Subgenre',
            type: 'array',
            description: 'Subgenre',
            of: [
              {
                type: 'reference',
                to: [
                  {
                    type: 'subgenre',
                  },
                ],
              },
            ],
          },
    ],
    preview: {
        select: {
          title: 'title',
        },
      },
};