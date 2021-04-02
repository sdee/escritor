export default {
name: 'photo',
title: 'Photo', 
type: 'document',
fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string'
    },
    {
     name: 'caption',
     title: 'Caption', 
     type: 'string',
     options: {
         isHighlighted: true,
     }
    },
    {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            isHighlighted: true,
        }
    },
    {
        name: 'dish',
        title: 'Dish',
        type: 'reference',
        to: [{type: 'dish'}]
    },
    {
        name: 'place',
        title: 'Place',
        type: 'reference',
        to: [{type: 'restaurant'}, {type: 'place'}]
    },
]
};