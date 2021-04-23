import { Photo } from "../photo";
const BlockContent = require("@sanity/block-content-to-react")
export const Dish = ({mainPhoto={}, name, description}) => {
    return <>
    <h3>{name}</h3>
    <BlockContent blocks={description} />
    </>
}