const client = require("../client");
import { DishList } from "../components/book/DishList";
import { Part } from "../components/book/Part";

const Chapter = ({ parts }) => {
  return (
    <>
      <h1>Chapter</h1>
      {parts.map((part) => {
        if (part._type === "dishList") {
          return <DishList {...part} />;
        } else if (part._type === "part") {
          return <Part {...part} />;
        }
      })}
    </>
  );
};

Chapter.getInitialProps = async function (context) {
  let { slug = "" } = context.query;
  return await client.fetch(
    `*[_type == "chapter"][0]{
      title,parts[]->
      { _type=="dishList" => {_type, title, dishes[]->{_type, name, mainPhoto->}},
        _type=="part" => {_type, title, content}
      }
    }`
  );
};

export default Chapter;
