const client = require("../client");
import { DishList } from "../components/book/DishList";
import {RestaurantList} from "../components/book/RestaurantList"
import { Part } from "../components/book/Part";

const Chapter = ({ title, intro, parts=[] }) => {
  return (
    <div class="relative py-16 bg-white overflow-hidden">
      <h1><span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</span></h1>
      <div class="text-lg max-w-prose mx-auto">
      <p class="mt-8 text-xl text-gray-500 leading-8">{intro}</p>
      </div>
      {parts.map((part) => {
        if (part._type === "dishList") {
          return <DishList {...part} />;
        }
        else if (part._type=="restaurantList") {
          return <RestaurantList {...part} />
        }
         else if (part._type === "part") {
          return <Part {...part} />;
        }
      })}
    </div>
  );
};

Chapter.getInitialProps = async function (context) {
  let { slug = "" } = context.query;
  return await client.fetch(
    `*[_type == "chapter" && slug.current==$slug][0]{
      title, intro, parts[]->
      { _type=="dishList" => {_type, title, intro, coverImage->{image, caption, place->}, dishes[]->{_type, name, description, mainPhoto->{image, caption, place->}, variants }},
      _type=="restaurantList" => {_type, title, intro, restaurants[]{restaurant->, description, dishesToTry},  coverImage->{image, caption, place->} },
        _type=="part" => {_type, title, content[]{..., _type=='reference' => {"photo":@->{image, caption, place->, dish->}}}}
      }
    }`,
    {slug}
  );
};

export default Chapter;
