// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import chapter from './chapter'
import dishList from './dishList'
import part from './part'
import post from './post'
import dish from './dish'
import photo from './photo'
import location from './location'
import restaurant from './restaurant'
import place from './place'
import subgenre from './subgenre'
import variant from './variant'
import restaurantBlurb from './restaurantBlurb'
import restaurantList from './restaurantList'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    chapter,
    dishList,
    subgenre,
    dish,
    part,
    photo,
    post,
    location,
    restaurant,
    restaurantBlurb,
    restaurantList,
    place,
    variant,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
