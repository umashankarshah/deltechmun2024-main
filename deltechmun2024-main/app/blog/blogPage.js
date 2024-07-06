"use client";
import BlogCard from "@/app/components/cards/BlogCard";
import SectionTitle from "../components/heading/sectionTitle";
import { Tab } from "@headlessui/react";
import { Categories } from "../lib/blogCategories";
// import Loading from "../components/loading";
// import { useState, useEffect } from "react";

const BlogPage = ({blogs}) => {
  console.log(blogs)
  // const [blogs, setBlogs] = useState([]);
  // const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   service.getBlogs().then(({ blogs }) => {
  //     setBlogs(blogs);
  //     setLoading(false);
  //   });
  // }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  function filterBlogsByCategory(categoryName) {
    return blogs.filter((blog) =>
      blog.categories.some((category) => category.name === categoryName)
    );
  }
  return (
    <>
      <SectionTitle
        title="Blogs & Articles"
        excerpt="DelTech MUN & DebSoc stands 56 Council Members and 60+ Diplomats strong. Ready to take onto ant challenge of the world. Reach out to us ! We are happy to discuss the pressing problems of the world even when the clock strikes midnight."
      />
      <div className="w-full px-2 py-16 sm:px-0">
        <Tab.Group defaultIndex={0}>
          <Tab.List className="flex space-x-1 rounded-xl bg-[#040b23] p-1 max-w-xl mx-auto">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-serif font-medium leading-5 text-[#E6E6FA]",
                  "focus:outline-none focus:text-[#33CCCC] focus:bg-[#161f3b]",
                  selected
                    ? "shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              All Blogs
            </Tab>
            {Categories.map((category, i) => (
              <Tab
                key={i}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-serif font-medium leading-5 text-[#E6E6FA]",
                    "focus:outline-none focus:text-[#33CCCC] focus:bg-[#161f3b]",
                    selected
                      ? "shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>

          {/* {isLoading ? (
            <Loading/>
          ) : ( */}
            <Tab.Panels>
              {/* All Blogs*/}
              <Tab.Panel className="mt-16 max-w-screen-xl mx-auto">
                <div className="flex flex-wrap justify-center items-center my-12 max-w-full mx-auto gap-10 py-5">
                  {blogs.map((blog, index) => (
                    <BlogCard
                      key={index}
                      title={blog.title}
                      img={blog.thumbnail.url}
                      excerpt={blog.excerpt}
                      createdAt={blog.createdAt.slice(0, 10)}
                      authorName={blog.author.name}
                      authorPhoto={blog.author.photo?.url || "/img/avatar.png"}
                      slug={blog.id}
                    />
                  ))}
                </div>
              </Tab.Panel>

              {/* Other categories */}
              {Categories.map((category, i) => (
                <Tab.Panel key={i} className="mt-16 max-w-screen-xl mx-auto">
                  <div className="flex flex-wrap justify-center items-center my-12 max-w-full mx-auto gap-10 py-5">
                    {filterBlogsByCategory(category.id).map((blog, index) => (
                      <BlogCard
                        key={index}
                        title={blog.title}
                        img={blog.thumbnail.url}
                        excerpt={blog.excerpt}
                        createdAt={blog.createdAt.slice(0, 10)}
                        authorName={blog.author.name}
                        authorPhoto={
                          blog.author.photo?.url || "/img/avatar.png"
                        }
                        slug={blog.id}
                      />
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          {/* )} */}
        </Tab.Group>
      </div>
    </>
  );
};

export default BlogPage;
