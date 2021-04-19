const BlockContent = require("@sanity/block-content-to-react");

export const Part = ({ title, content }) => {
  return (
    <>
      <h1>{title}</h1>
        <BlockContent blocks={content}/>
    </>
  );
};
