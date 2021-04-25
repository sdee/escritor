export default {
    name: 'location',
    title: 'Location',
    type: 'object',
    fields: [
        {
            name: 'address',
            title: 'Address',
            type: 'string'
        },
        {
            name: 'neighborhood',
            title: 'Neighborhood',
            type: 'string',
            options: {
            list: ['Miraflores', 'Barranco', 'Callao', 'Lince', 'San Isidro', 'La Victoria']
            }
        },
        {
            name: 'city',
            title: 'City',
            type: 'string'
        },
        {
            name: 'hasMultipleLocations',
            title: 'Has Multiple locations',
            type: 'boolean'
        }
    ]
}