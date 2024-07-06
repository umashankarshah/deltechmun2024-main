import React from "react";
const editorJsHtml = require("editorjs-html");
const EditorJsToHtml = editorJsHtml();

const EditorJsRenderer = ({ data }) => {
  data = JSON.parse(data);
  const html = EditorJsToHtml.parse(data);
  return (
    <>
      <div className="prose max-w-full text-gray-100" key={data.time}>
        {html.map((item, index) => {
          if (typeof item === "string") {
            return (
              <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
            );
          }
          return item;
        })}
      </div>
    </>
  );
};

export default EditorJsRenderer;
