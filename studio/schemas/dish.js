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
            name: 'mainPhoto',
            title: 'Main Photo',
            type: 'reference',
            to: [{type: 'photo'}]
          },
          {
              name: 'variants', 
              title: 'Variants', 
              type: 'array',
              of: [
                {type: 'variant'}
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
};