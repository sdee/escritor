const client = require("../client");
import { DishList } from "../components/book/DishList";
import { Part } from "../components/book/Part";

const Chapter = ({ title, intro, parts=[] }) => {
  return (
    <div class="relative py-16 bg-white overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          class="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            class="absolute top-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            class="absolute bottom-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <h1><span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</span></h1>
      <div class="text-lg max-w-prose mx-auto">
      <p class="mt-8 text-xl text-gray-500 leading-8">{intro}</p>
      </div>
      {parts.map((part) => {
        if (part._type === "dishList") {
          return <DishList {...part} />;
        } else if (part._type === "part") {
          return <Part {...part} />;
        }
      })}
    </div>
  );
};

Chapter.getInitialProps = async function (context) {
  let { slug = "" } = context.query;
  return await client.fetch(
    `*[_type == "chapter"][0]{
      title, intro, parts[]->
      { _type=="dishList" => {_type, title, dishes[]->{_type, name, mainPhoto->}},
        _type=="part" => {_type, title, content[]{..., _type=='reference' => {"photo":@->{image, caption, place->, dish->}}}}
      }
    }`
  );
};

export default Chapter;
