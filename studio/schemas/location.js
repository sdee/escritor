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
            list: ['Miraflores', 'Barranco', 'Callao', 'Lince', 'Pueblo Libre', 'San Isidro', 'La Victoria', 'Surquillo', 'San Miguel', 'Magdalena']
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