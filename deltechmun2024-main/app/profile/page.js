import service from "@/app/lib/hygraphServices";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import ClientOnly from "../components/utils/clientOnly";
import EditProfile from "./editProfile";
import DeleteBlogButton from "./deleteBlogButton";
// import { AiOutlineEdit } from "react-icons/ai";

export default async function Page() {
  const session = await getServerSession(options);
  let { author } = await service.getTargetAuthor(session.user.email);
  if (author == null) {
    let { createAuthor } = await service.createAuthor(
      session.user.email,
      session.user.name
    );
    author = createAuthor;
  }

  return (
    <>
      <div className="font-merriweather">
        <div className="bg-[#040b23] h-[30vh] z-[-1]" />
        <div className="flex md:w-36 md:h-36 absolute top-[22%] md:left-[15%] left-[33%] z-10 shadow-xl bg-gradient-to-r from-[#269af7] to-[#8e59ff] items-center justify-center rounded-full">
          <img
            className="w-[130px] h-[130px] min-w-[120px] rounded-full"
            src={`${author?.photo?.url || "/img/avatar.png"}`}
          />
        </div>

        {/* pc only */}
        <div className="hidden ml-[420px] mt-2 md:flex items-center gap-3">
          <div className="mr-2">
            <p className="text-[24px] truncate">{author?.name}</p>
            <p className="text-[14px] truncate text-gray-400">
              {author?.email}
            </p>
          </div>

          <div className="h-10" style={{ borderLeft: "1px solid black" }} />

          <p className="mt-3 ml-2 text-gray-500 font-light text-[15px] max-w-[400px]">
            {author?.bio}
          </p>

          <div className="h-10" style={{ borderLeft: "1px solid black" }} />

          <ClientOnly>
            <EditProfile author={author}></EditProfile>
          </ClientOnly>
        </div>
      </div>

      {/* mobile only */}
      <div className="mt-20 flex items-center font-merriweather sm:hidden">
        <div className="mx-auto">
          <p className="text-[20px] truncate text-center">{author?.name}</p>
          <p className="text-[13px] truncate text-gray-400 text-center">
            {author?.email}
          </p>
        </div>

        <ClientOnly>
          <EditProfile author={author}></EditProfile>
        </ClientOnly>
      </div>
      <p className="mt-3 text-center text-gray-700 font-medium tracking-wide text-[14px] max-w-[400px] sm:hidden">
        {author?.bio}
      </p>

      {/* profile start */}
      <div className="pt-[40px] sm:ml-[90px] 2xl:pl-[185px] lg:pl-[160px] lg:pr-0 w-[calc(100%-90px)] sm:pr-3 max-w-[1800px] 2xl:mx-auto overflow-x-hidden relative ml-[50px]">
        {/* blog start  */}
        <ul className="w-full flex items-center pt-4 border-b sm:justify-start justify-center">
          <li className="w-60 text-center py-2 text-[17px] font-semibold border-b-2 border-b-black">
            Blogs
          </li>
        </ul>
        {author.posts.length>0 ? (
          <div className="divide-y divide-gray-100">
            {author.posts.map((blog, index) => (
              <div
                key={index}
                className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm my-5 flex flex-col"
              >
                <img className="rounded-t-lg" src={blog.thumbnail.url} alt="" />
                <div class="p-5">
                  <h1 className=" mb-4 text-3xl text-[#333] font-semibold">
                    {blog.title}
                  </h1>
                  <p className="font-normal text-gray-700 mb-4 tracking-wider">
                    {blog.excerpt}
                  </p>
                  <ClientOnly>
                    <DeleteBlogButton blogId={blog.id} />
                  </ClientOnly>

                  {/* <button className=" border-none outline-none text-white bg-gradient-to-r from-[#269af7] to-[#8e59ff] text-[14px] shadow-btn none transition-all ease-in duration-200 py-3 px-5 hover:shadow-hover rounded-[50px]">
                  <div className="flex gap-1 items-center">
                    <AiOutlineEdit size={15} /> Edit
                  </div>
                </button> */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <section class="bg-white">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div class="mx-auto max-w-screen-sm text-center">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-[#3b82f6] ">
                  No Blogs Available
                </h2>
                <p class="mb-6 font-light text-gray-500 400 md:text-lg">
                  Get Started, with your first blog.
                </p>
              </div>
            </div>
          </section>
        )}
        <div className="pb-20" />
      </div>
    </>
  );
}
