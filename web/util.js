
const imageUrlBuilder = require('@sanity/image-url')
import client from "./client";
const imageBuilder = imageUrlBuilder(client)

export function urlFor(source) {
  return imageBuilder.image(source)
}

export const joinIfExists = (...arr) => arr.filter((x) => !!x).join(", ");