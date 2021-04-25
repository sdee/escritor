const client = require("../client");
import { DishList } from "../components/book/DishList";
import { RestaurantList } from "../components/book/RestaurantList";
import { Part } from "../components/book/Part";
import { urlFor } from "../util";
const Chapter = ({ title, intro, endcap, parts = [] }) => {
  return (
    <div class="relative py-16 bg-white overflow-hidden">
      <h1>
        <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </span>
      </h1>
      <div class="text-lg max-w-prose mx-auto">
        <p class="mt-8 text-xl text-gray-500 leading-8">{intro}</p>
      </div>
      {parts.map((part) => {
        if (part._type === "dishList") {
          return <DishList {...part} />;
        } else if (part._type == "restaurantList") {
          return <RestaurantList {...part} />;
        } else if (part._type === "part") {
          return <Part {...part} />;
        }
      })}
      {endcap && (
        <>
        <div class="flex flex-wrap justify-center">
        {/* <hr style={{width: 600}} class="py-3" /> */}
            <figure class="py-8 mx-3">
              <img src={urlFor(endcap).width(500).url()} />
            </figure>
          </div>
          </>
      )}
    </div>

  );
};

Chapter.getInitialProps = async function (context) {
  let { slug = "" } = context.query;
  return await client.fetch(
    `*[_type == "chapter" && slug.current==$slug][0]{
      title, intro, endcap, parts[]->
      { _type=="dishList" => {_type, title, intro, coverImage->{image, caption, place->, vertical}, dishes[]->{_type, name, description, mainPhoto->{image, caption, place->, vertical},  secondaryPhoto->{image, caption, place->, vertical}, variants }},
      _type=="restaurantList" => {_type, title, intro, restaurants[]{restaurant->, description, dishesToTry},  coverImage->{image, caption, place->, vertical} },
        _type=="part" => {_type, title, content[]{..., _type=='reference' => {"photo":@->{image, caption, place->, dish->, vertical}}}}
      }
    }`,
    { slug }
  );
};

export default Chapter;
