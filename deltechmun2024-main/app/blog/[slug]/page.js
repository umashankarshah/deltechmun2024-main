import React from "react";
import service from "@/app/lib/hygraphServices";
import EditorJsRenderer from "@/app/components/richTextEditor/editorJsRenderer";

export default async function Page({ params }) {
  const { blog } = await service.getTargetBlog(params.slug);

  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-900 text-gray-100">
        <div className="flex justify-center items-center py-16">
          <img
            src={`${blog?.author?.photo?.url || "/img/avatar.png"}`}
            alt="img"
            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-700"
          />
          <div className="px-5">
            <h4 className="text-lg font-semibold font-merriweather tracking-wide">{blog?.author?.name}</h4>
            <p className="text-gray-400">{blog?.author?.bio}</p>
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto pt-10 rounded">
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-3xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-800">
            <div className="space-y-2 flex flex-col items-center justify-center">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-xl font-merriweather tracking-wider font-semibold sm:text-2xl pb-5"
              >
                {blog?.title}
              </a>
              <img
                src={blog?.thumbnail.url}
                alt=""
                className="h-60 sm:h-96 self-center rounded"
              />
            </div>
            <div className="text-gray-100 font-sans">
              <EditorJsRenderer data={blog?.description} className="text-sm" />
            </div>
          </div>
        </div>
        <div className="border-t mt-10 bottom-0 border-gray-700"></div>
      </div>
    </div>
  );
}
