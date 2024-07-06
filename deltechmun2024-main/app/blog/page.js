import BlogPage from "./blogPage";
import service from "@/app/lib/hygraphServices";

export default async function Page() {
  const {blogs} = await service.getBlogs();
  // console.log(blogs)
  return (
    <div>
      <BlogPage blogs={blogs} />
    </div>
  );
}
