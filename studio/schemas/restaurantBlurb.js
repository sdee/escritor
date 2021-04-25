export default {
    name: "restaurantBlurb",
    title: "Restaurant Blurb", 
    type: "object",
    fields: [
        {
            name: "restaurant",
            title: "Restaurant",
            type: "reference",
            to: [{type: 'restaurant'}]
        },
        {
            name: "description",
            title: "Description",
            type: "text"
        },
        {
            name: "dishesToTry",
            title: "Dishes to Try",
            type: 'array',
            of: [
                {
                    type: 'string',
                }
            ]
        }
    ]
}